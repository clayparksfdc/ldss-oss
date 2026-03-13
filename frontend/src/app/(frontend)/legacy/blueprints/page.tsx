export default function LegacyBlueprintsPage() {
  return (
    <div className="w-full" style={{ margin: '0 -1rem', width: 'calc(100% + 2rem)' }}>
      <iframe
        src="/assets/vrt-all-components.html"
        title="Legacy Component Blueprints — Lightning Blue & Cosmos"
        style={{
          width: '100%',
          height: 'calc(100vh - 80px)',
          border: 'none',
          display: 'block',
        }}
      />
    </div>
  );
}
