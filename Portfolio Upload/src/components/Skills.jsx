import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "Microsoft Excel", level: 95 },
    { name: "Google Sheets", level: 90 },
    { name: "Data Cleaning", level: 95 },
    { name: "Advanced Formulas", level: 88 },
    { name: "AI Automation", level: 85 },
    { name: "PDF to Excel", level: 92 },
  ];

  return (
    <section
      id="skills"
      className="py-28 px-8 bg-[#050816] text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[160px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-4 mb-16 text-lg"
        >
          Technologies and tools I use to deliver high-quality work.
        </motion.p>

        <div className="space-y-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all"
            >

              <div className="flex justify-between items-center mb-4">

                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>

                <span className="text-cyan-400 font-bold text-lg">
                  {skill.level}%
                </span>

              </div>

              <div className="h-4 bg-slate-800 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;