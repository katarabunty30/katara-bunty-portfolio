import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  const messages = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Preparing Experience...",
    "Almost Ready...",
    "Welcome...",
  ];

  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return prev + 1;
      });
    }, 28);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 600);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <AnimatePresence>

      <motion.div
  initial={{ opacity: 1 }}
  animate={{
    opacity: progress >= 100 ? 0 : 1,
    scale: progress >= 100 ? 1.04 : 1,
  }}
  transition={{
    duration: 0.45,
    ease: "easeOut",
  }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816] overflow-hidden"
      >

        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[320px] h-[320px] rounded-full bg-cyan-500 blur-[90px]"
        />

        {/* Small Floating Dots */}

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"

            style={{
              width: 4,
              height: 4,
              left: `${15 + i * 10}%`,
              top: `${25 + (i % 3) * 20}%`,
            }}

            animate={{
              y: [-8, 8, -8],
              opacity: [0.3, 1, 0.3],
            }}

            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative z-20 flex flex-col items-center">

          {/* Logo */}

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.92,
            }}

            animate={{
              opacity: 1,
              scale: [1, 1.02, 1],
            }}

            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}

            className="text-6xl md:text-7xl font-black tracking-[6px] text-white"
          >
            BUNTY
            <span className="text-cyan-400">.</span>
          </motion.h1>

          <p className="mt-3 uppercase tracking-[8px] text-xs text-slate-500">
            Portfolio Experience
          </p>

          {/* Loading Message */}

          <motion.p
            key={messageIndex}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="mt-8 text-cyan-300 text-base md:text-lg"
          >
            {messages[messageIndex]}
          </motion.p>

          {/* Progress Bar */}
                    <div className="w-72 md:w-80 h-[8px] rounded-full bg-slate-800 overflow-hidden mt-8">

            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.15,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300"
            />

          </div>

          {/* Percentage */}

          <motion.h2
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="text-cyan-400 text-3xl md:text-4xl font-black mt-6"
          >
            {progress}%
          </motion.h2>

          <p className="text-slate-500 text-xs uppercase tracking-[6px] mt-3">
            Please Wait...
          </p>

        </div>

      </motion.div>

    </AnimatePresence>
  );
}

export default Loader;