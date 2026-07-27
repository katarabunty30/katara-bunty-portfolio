import profile from "../assets/images/profile.jpeg";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center px-8"
    >
      {/* Background Glow */}

      <div className="absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute -bottom-52 -right-52 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[200px]" />

<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center px-5">
        {/* LEFT SIDE */}

<motion.div
  initial={{ opacity: 0, x: -70 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="pt-28 lg:pt-35 text-center lg:text-left"
>

  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">

    Hi, I'm

    <br />

    <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Katara Bunty
    </span>

  </h1>

  <div className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300 min-h-[60px]">

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

  <p className="mt-6 text-lg leading-9 text-slate-400 max-w-xl">

    I transform raw datasets into professional spreadsheets using
    Microsoft Excel, Google Sheets, formulas, automation and
    AI-powered workflows with exceptional accuracy.

  </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-cyan-500 font-semibold text-white shadow-[0_0_35px_rgba(34,211,238,.35)]"
            >

              <span className="relative z-10 flex items-center gap-3">

                Hire Me

                <FaArrowRight className="group-hover:translate-x-1 transition" />

              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            </motion.a>

            <motion.a
  href="/Katara_Bunty_Resume.pdf"
  download
  whileHover={{
    scale: 1.05,
    y: -3,
  }}
  whileTap={{ scale: 0.97 }}
  className="px-8 py-4 rounded-2xl border border-cyan-400/30 bg-[#0d1a2d] backdrop-blur-xl text-cyan-300 flex items-center gap-3 hover:bg-[#13243d] hover:border-cyan-400 transition"
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
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-7 text-center hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,.25)] transition"
              >

                <h2 className="text-2xl md:text-4xl font-black text-cyan-400">

                  {item[0]}

                </h2>

                <p className="mt-3 text-slate-400">

                  {item[1]}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
  initial={{ opacity: 0, x: 70 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex justify-center items-start -mt-10"
>
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative
w-[300px] h-[300px]
sm:w-[360px] sm:h-[360px]
md:w-[430px] md:h-[430px]
lg:w-[540px] lg:h-[540px]
flex justify-center items-center"
  >

    {/* Background Glow */}

    <div className="absolute w-[520px] h-[520px] rounded-full bg-cyan-400/15 blur-[120px]" />

    {/* Static Outer Ring */}

    <div className="absolute w-[560px] h-[560px] rounded-full border border-cyan-400/15" />

    {/* Rotating Dashed Ring */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[530px] h-[530px] rounded-full border-2 border-dashed border-cyan-400/35"
    />

    {/* Rotating Solid Ring */}

    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 28,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[495px] h-[495px] rounded-full border-[5px] border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,.30)]"
    />

{/* Floating Freelancer Badge */}

<motion.div
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-8 right-0 z-30"
>
  <div
    className="flex items-center gap-3 px-7 py-4 rounded-full
               bg-[#071321]/95
               backdrop-blur-xl
               border border-cyan-400
               shadow-[0_0_30px_rgba(34,211,238,0.25)]"
  >
    <span className="text-lg">🚀</span>

    <span className="text-cyan-300 font-semibold text-xl">
      Freelancer
    </span>
  </div>
</motion.div>

    {/* Profile Image */}

    <div className="relative w-[455px] h-[455px] rounded-full bg-white shadow-[0_0_90px_rgba(34,211,238,.35)] flex justify-center items-center overflow-hidden">

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
    </section>
  );
}

export default Hero;