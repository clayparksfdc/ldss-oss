/**
 * In-memory cache layer for express-session Store.
 * Reduces PostgreSQL round-trips for repeated requests (e.g. loading files).
 * Industry-standard pattern for CMS: cache session lookups with short TTL.
 */
import { EventEmitter } from 'events';
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

  // Express-session expects store to be an EventEmitter (has .on); delegate to underlying store
  const delegateEventEmitter = (store as unknown as EventEmitter);
  const wrapped = Object.create(delegateEventEmitter);

  wrapped.get = function (sid: string, cb: (err: any, session?: SessionData | null) => void): void {
    const entry = cache.get(sid);
    if (entry && entry.expiresAt > Date.now()) {
      return process.nextTick(() => cb(null, entry.data ?? undefined));
    }
    cache.delete(sid);

    store.get(sid, (err, sess) => {
      if (!err && sess) {
        cache.set(sid, { data: sess, expiresAt: Date.now() + ttlMs });
      }
      cb(err, sess);
    });
  };

  wrapped.set = function (sid: string, sess: SessionData, cb?: (err?: any) => void): void {
    cache.delete(sid);
    store.set(sid, sess, cb);
  };

  wrapped.destroy = function (sid: string, cb?: (err?: any) => void): void {
    cache.delete(sid);
    store.destroy(sid, cb);
  };

  wrapped.touch = function (sid: string, sess: SessionData, cb?: () => void): void {
    if (typeof store.touch === 'function') {
      store.touch(sid, sess, cb);
    } else {
      process.nextTick(() => cb?.());
    }
  };

  return wrapped as session.Store;
}
