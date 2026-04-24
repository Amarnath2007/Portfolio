"use client";

export default function StarsBg() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020818] via-[#050d1f] to-[#020818]" />
      
      {/* Blue glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-800/8 blur-3xl" />
      <div className="absolute top-3/4 right-1/3 w-64 h-64 rounded-full bg-indigo-900/10 blur-3xl" />

      {/* Static stars */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 120 }).map((_, i) => {
          const cx = (((i * 137.5) % 100)).toFixed(2);
          const cy = (((i * 97.3 + 23) % 100)).toFixed(2);
          const r = i % 7 === 0 ? 1.5 : i % 3 === 0 ? 1 : 0.6;
          const op = (0.2 + (i % 5) * 0.15).toFixed(2);
          return (
            <circle
              key={i}
              cx={`${cx}%`}
              cy={`${cy}%`}
              r={r}
              fill="white"
              opacity={op}
            />
          );
        })}
      </svg>
    </div>
  );
}
