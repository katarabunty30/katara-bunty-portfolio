import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader() {

  const messages = [
    "Initializing Portfolio...",
    "Loading Components...",
    "Preparing Projects...",
    "Loading Skills...",
    "Optimizing Experience...",
    "Almost Ready...",
    "Welcome..."
  ];

  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {

    const progressTimer = setInterval(() => {

      setProgress(prev => {

        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return prev + 1;

      });

    }, 50);

    const messageTimer = setInterval(() => {

      setMessageIndex(prev => (prev + 1) % messages.length);

    }, 700);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };

  }, []);

  return (

    <div className="fixed inset-0 bg-[#050816] overflow-hidden flex items-center justify-center">

      {/* Main Glow */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500 blur-[180px]"
      />

      {/* Floating Particles */}

      {[...Array(30)].map((_, i) => (

        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400"

          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}

          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 1, 0.2],
          }}

          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}

        />

      ))}

      <div className="relative z-20 text-center">

        {/* Rotating Ring */}

        <motion.div

          animate={{
            rotate: 360,
          }}

          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}

          className="absolute -inset-10 border border-cyan-500/20 rounded-full"

        />

        {/* Logo */}

        <div className="relative inline-block">

          <div className="absolute inset-0 bg-cyan-400 blur-[100px] opacity-40" />

          <motion.h1

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
            }}

            className="relative text-7xl md:text-8xl font-black tracking-widest"

          >

            BUNTY
            <span className="text-cyan-400">.</span>

          </motion.h1>

        </div>

        <p className="tracking-[10px] uppercase text-gray-500 mt-5">

          Portfolio Experience

        </p>

        {/* Message */}

        <motion.p

          key={messageIndex}

          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.5,
          }}

          className="mt-10 text-cyan-300 text-lg"

        >

          {messages[messageIndex]}

        </motion.p>

        {/* Progress Bar */}

        <div className="w-80 h-3 bg-slate-800 rounded-full overflow-hidden mt-10 mx-auto">

          <motion.div

            animate={{
              width: `${progress}%`,
            }}

            transition={{
              ease: "easeOut",
            }}

            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.9)]"

          />

        </div>

        {/* Percentage */}

        <motion.h2

          animate={{
            opacity: [0.5, 1, 0.5],
          }}

          transition={{
            duration: 1,
            repeat: Infinity,
          }}

          className="text-cyan-400 text-4xl font-black mt-8"

        >

          {progress}%

        </motion.h2>

        <p className="text-gray-500 tracking-[6px] uppercase text-xs mt-3">

          Please Wait...

        </p>

      </div>

    </div>

  );

}

export default Loader;