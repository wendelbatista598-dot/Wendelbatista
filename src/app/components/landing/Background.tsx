export function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#F8FAFC]">
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"
        style={{
            maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)"
        }}
      />
      
      {/* Floating Blobs */}
      <div
        className="animate-blob-1 absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-[#60A5FA]/10 rounded-full blur-[100px]"
      />
      
      <div
        className="animate-blob-2 absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-[#2563EB]/5 rounded-full blur-[100px]"
      />

       <div
        className="animate-blob-3 absolute bottom-[-10%] left-[20%] w-[30vw] h-[30vw] bg-[#132A4A]/5 rounded-full blur-[80px]"
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
}