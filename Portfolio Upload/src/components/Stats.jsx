import { motion } from "framer-motion";
import {
  FaFolderOpen,
  FaBullseye,
  FaHeadset,
  FaFileExcel,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaFolderOpen />,
      number: "100+",
      title: "Projects Completed",
    },
    {
      icon: <FaBullseye />,
      number: "99%",
      title: "Accuracy",
    },
    {
      icon: <FaHeadset />,
      number: "24/7",
      title: "Support",
    },
    {
      icon: <FaFileExcel />,
      number: "1000+",
      title: "Rows Processed",
    },
  ];

  return (
    <section className="py-24 px-8 bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Achievements</span>
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Numbers that represent my dedication.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-3xl border border-cyan-500/20 p-8 text-center"
            >
              <div className="text-cyan-400 text-5xl mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-5xl font-black text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;