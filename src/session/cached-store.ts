/**
 * In-memory cache layer for express-session Store.
 * Reduces PostgreSQL round-trips for repeated requests (e.g. loading files).
 * Industry-standard pattern for CMS: cache session lookups with short TTL.
 */
import session from 'express-session';
import type { SessionData } from 'express-session';

const DEFAULT_TTL_MS = 10 * 60 * 1000; // 10 minutes

interface CacheEntry {
  data: SessionData | null;
  expiresAt: number;
}

export function createCachedStore(store: session.Store, ttlMs = DEFAULT_TTL_MS): session.Store {
  const cache = new Map<string, CacheEntry>();

  const pruneExpired = () => {
    const now = Date.now();
    for (const [sid, entry] of cache.entries()) {
      if (entry.expiresAt <= now) cache.delete(sid);
    }
  };

  const pruneInterval = setInterval(pruneExpired, 5 * 60 * 1000);
  if (pruneInterval.unref) pruneInterval.unref();

  return {
    ...store,
    get(sid: string, cb: (err: any, session?: SessionData | null) => void): void {
      const entry = cache.get(sid);
      if (entry && entry.expiresAt > Date.now()) {
        return process.nextTick(() => cb(null, entry.data ?? undefined));
      }
      cache.delete(sid);

      store.get(sid, (err, session) => {
        if (!err && session) {
          cache.set(sid, {
            data: session,
            expiresAt: Date.now() + ttlMs,
          });
        }
        cb(err, session);
      });
    },
    set(sid: string, session: SessionData, cb?: (err?: any) => void): void {
      cache.delete(sid);
      store.set(sid, session, cb);
    },
    destroy(sid: string, cb?: (err?: any) => void): void {
      cache.delete(sid);
      store.destroy(sid, cb);
    },
    touch(sid: string, session: SessionData, cb?: () => void): void {
      // Don't invalidate cache — session data unchanged; touch only extends expiry in PG
      if (typeof store.touch === 'function') {
        store.touch(sid, session, cb);
      } else {
        process.nextTick(() => cb?.());
      }
    },
  } as session.Store;
}
