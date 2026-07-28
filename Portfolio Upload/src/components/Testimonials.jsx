import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

function Testimonials() {
  const testimonials = [
    {
      name: "Jimmy",
      role: "Excel Automation Project",
      review:
        "Outstanding work! The Excel spreadsheet was organized professionally with automation and clean formatting. Everything was delivered on time.",
    },
    {
      name: "Jigar",
      role: "Google Sheets Dashboard",
      review:
        "Very professional workflow and excellent communication. The final spreadsheet was easy to understand and exceeded expectations.",
    },
    {
      name: "Pradeep",
      role: "Data Cleaning Project",
      review:
        "The dataset was cleaned accurately and prepared perfectly for analysis. Great attention to detail and quality.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper>
      <section
        id="testimonials"
        className="py-24 px-8 bg-[#050816] relative overflow-hidden text-white"
      >
        {/* Background Glow */}
        <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/10 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center"
          >
            Testimonials
          </motion.h2>

          <p className="text-center text-gray-400 mt-5 mb-16">
            What people say about my work.
          </p>

          <div className="relative h-[370px]">

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.15)] p-12 flex flex-col justify-center items-center text-center"
              >

                {/* Quote Icon */}
                <FaQuoteLeft className="text-cyan-400 text-5xl opacity-30 mb-6" />

                {/* Stars */}
                <div className="text-yellow-400 text-2xl mb-6 tracking-widest">
                  ★★★★★
                </div>

                {/* Review */}
                <p className="text-xl italic leading-9 text-gray-300 max-w-3xl">
                  "{testimonials[current].review}"
                </p>

                {/* Divider */}
                <div className="w-24 h-[2px] bg-cyan-400 mt-10 mb-6 rounded-full"></div>

                {/* Client Name */}
                <h3 className="text-2xl font-bold text-cyan-400">
                  {testimonials[current].name}
                </h3>

                {/* Role */}
                <p className="text-gray-500 mt-2">
                  {testimonials[current].role}
                </p>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10">

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 ${
                  current === index
                    ? "w-10 h-3 rounded-full bg-cyan-400"
                    : "w-3 h-3 rounded-full bg-gray-600 hover:bg-cyan-300"
                }`}
              />
            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Testimonials;