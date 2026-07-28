import profile from "../assets/images/profile.jpeg";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center"
    >
      {/* Background Glow */}

      <div className="absolute -top-52 -left-52 w-[500px] md:w-[650px] h-[500px] md:h-[650px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -bottom-52 -right-52 w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >

            <h1 className="font-black leading-tight">

              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm
              </span>

              <span className="block mt-3 text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">

                Katara Bunty

              </span>

            </h1>

            <div className="mt-7 text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300 min-h-[55px]">

              <TypeAnimation
                sequence={[
                  "Excel Specialist",
                  2000,
                  "Google Sheets Expert",
                  2000,
                  "AI Data Cleaning",
                  2000,
                  "Automation Expert",
                  2000,
                ]}
                speed={45}
                repeat={Infinity}
              />

            </div>

            <p className="mt-7 text-slate-400 leading-8 max-w-xl mx-auto lg:mx-0 text-base md:text-lg">

              I transform raw datasets into professional spreadsheets using
              Microsoft Excel, Google Sheets, formulas, automation and
              AI-powered workflows with exceptional accuracy.

            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

  <motion.a
    href="#contact"
    whileHover={{ scale: 1.05, y: -3 }}
    whileTap={{ scale: 0.96 }}
    className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-cyan-500 font-semibold text-white shadow-[0_0_35px_rgba(34,211,238,.35)]"
  >
    <span className="relative z-10 flex items-center justify-center gap-3">
      Hire Me
      <FaArrowRight className="group-hover:translate-x-1 transition" />
    </span>

    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>

  </motion.a>

  <motion.a
    href="/Katara_Bunty_Resume.pdf"
    download
    whileHover={{ scale: 1.05, y: -3 }}
    whileTap={{ scale: 0.96 }}
    className="px-8 py-4 rounded-2xl border border-cyan-400/30 bg-[#0d1a2d] backdrop-blur-xl text-cyan-300 flex items-center justify-center gap-3 hover:bg-[#13243d] hover:border-cyan-400 transition"
  >
    <FaDownload />
    Download Resume
  </motion.a>

</div>

{/* Stats */}

<div className="grid grid-cols-3 gap-3 md:gap-6 mt-12">

  {[
    ["100+", "Projects"],
    ["99%", "Accuracy"],
    ["24/7", "Support"],
  ].map((item, index) => (

    <motion.div
      key={index}
      whileHover={{ y: -8, scale: 1.03 }}
      className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-6 text-center hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,.25)] transition"
    >

      <h2 className="text-2xl md:text-4xl font-black text-cyan-400">
        {item[0]}
      </h2>

      <p className="mt-2 text-sm md:text-base text-slate-400">
        {item[1]}
      </p>

    </motion.div>

  ))}

</div>

</motion.div>

{/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  className="flex justify-center"
>
  <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    relative
    w-[300px] h-[300px]
    sm:w-[360px] sm:h-[360px]
    md:w-[430px] md:h-[430px]
    lg:w-[540px] lg:h-[540px]
    flex justify-center items-center
  "
>

  {/* Background Glow */}

  <div
    className="
      absolute
      w-[280px] h-[280px]
      sm:w-[380px] sm:h-[380px]
      md:w-[470px] md:h-[470px]
      lg:w-[520px] lg:h-[520px]
      rounded-full
      bg-cyan-400/15
      blur-[90px]
      lg:blur-[120px]
    "
  />

  {/* Static Ring */}

  <div
    className="
      absolute
      w-[320px] h-[320px]
      sm:w-[390px] sm:h-[390px]
      md:w-[480px] md:h-[480px]
      lg:w-[560px] lg:h-[560px]
      rounded-full
      border
      border-cyan-400/15
    "
  />

  {/* Rotating Dashed Ring */}

  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      w-[300px] h-[300px]
      sm:w-[370px] sm:h-[370px]
      md:w-[450px] md:h-[450px]
      lg:w-[530px] lg:h-[530px]
      rounded-full
      border-2
      border-dashed
      border-cyan-400/35
    "
  />

  {/* Rotating Solid Ring */}

  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      duration: 28,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      w-[280px] h-[280px]
      sm:w-[350px] sm:h-[350px]
      md:w-[420px] md:h-[420px]
      lg:w-[495px] lg:h-[495px]
      rounded-full
      border-[5px]
      border-cyan-400
      shadow-[0_0_35px_rgba(34,211,238,.30)]
    "
  />

  {/* Freelancer Badge */}

  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-0 sm:top-5 right-2 sm:right-0 z-30"
  >
    <div
      className="
        flex items-center gap-2
        px-4 sm:px-7
        py-2 sm:py-4
        rounded-full
        bg-[#071321]/95
        backdrop-blur-xl
        border border-cyan-400
        shadow-[0_0_30px_rgba(34,211,238,0.25)]
      "
    >
      <span>🚀</span>

      <span className="text-cyan-300 font-semibold text-sm sm:text-xl">
        Freelancer
      </span>
    </div>
  </motion.div>
    {/* Profile Image */}

  <div
    className="
      relative
      w-[240px] h-[240px]
      sm:w-[300px] sm:h-[300px]
      md:w-[360px] md:h-[360px]
      lg:w-[455px] lg:h-[455px]
      rounded-full
      bg-white
      shadow-[0_0_90px_rgba(34,211,238,.35)]
      flex
      justify-center
      items-center
      overflow-hidden
    "
  >
    <img
      src={profile}
      alt="Katara Bunty"
      className="w-full h-full object-cover rounded-full"
      style={{
        objectPosition: "center 8%",
      }}
    />
  </div>

</motion.div>

</motion.div>

</div>

</div>

</section>

  );
}

export default Hero;