function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Top Left Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse"></div>

      {/* Bottom Right Glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[180px] animate-pulse"></div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[170px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

    </div>
  );
}

export default Background;