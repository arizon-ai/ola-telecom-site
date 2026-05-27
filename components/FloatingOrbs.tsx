export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Orb 1 - Green */}
      <div
        className="absolute top-[10%] left-[15%] w-60 h-60 rounded-full bg-accent-green opacity-10 blur-[100px]"
        style={{ animation: 'orbFloat1 12s ease-in-out infinite' }}
      />

      {/* Orb 2 - Cyan */}
      <div
        className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full bg-accent-cyan opacity-[0.08] blur-[120px]"
        style={{ animation: 'orbFloat2 15s ease-in-out 1s infinite' }}
      />

      {/* Orb 3 - Magenta */}
      <div
        className="absolute -bottom-[10%] left-[40%] w-72 h-72 rounded-full bg-accent-magenta opacity-[0.12] blur-[110px]"
        style={{ animation: 'orbFloat3 14s ease-in-out 2s infinite' }}
      />
    </div>
  );
}
