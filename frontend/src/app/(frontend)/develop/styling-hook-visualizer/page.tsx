export default function StylingHookVisualizerPage() {
  return (
    <div className="w-full" style={{ margin: '0 -1rem', width: 'calc(100% + 2rem)' }}>
      <iframe
        src="/tools/styling-hook-viewer.html"
        title="Styling Hook Comparison — Lightning Blue vs Cosmos"
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
