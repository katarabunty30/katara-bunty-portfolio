function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Top Left Glow */}
      <div
        className="
          absolute
          top-10 left-6
          md:top-20 md:left-20
          w-52 h-52
          md:w-80 md:h-80
          lg:w-96 lg:h-96
          rounded-full
          bg-cyan-500/15
          blur-[70px]
          md:blur-[120px]
          animate-pulse
        "
      />

      {/* Bottom Right Glow */}
      <div
        className="
          absolute
          bottom-0 right-0
          md:bottom-10 md:right-10
          w-64 h-64
          md:w-[420px] md:h-[420px]
          lg:w-[500px] lg:h-[500px]
          rounded-full
          bg-blue-500/15
          blur-[80px]
          md:blur-[140px]
          animate-pulse
        "
      />

      {/* Center Glow (Desktop Only) */}
      <div
        className="
          hidden md:block
          absolute
          top-1/2 left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-72 h-72
          lg:w-80 lg:h-80
          rounded-full
          bg-purple-500/8
          blur-[120px]
          animate-pulse
        "
      />

    </div>
  );
}

export default Background;