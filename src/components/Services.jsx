import {
  FaFileExcel,
  FaGoogle,
  FaRobot,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

function Services() {
  const services = [
    {
      icon: <FaFileExcel size={45} />,
      title: "Excel Data Cleaning",
      desc: "Transform messy spreadsheets into clean, structured, and analysis-ready Excel files.",
    },
    {
      icon: <FaGoogle size={45} />,
      title: "Google Sheets",
      desc: "Create smart Google Sheets with formulas, formatting, dashboards, and automation.",
    },
    {
      icon: <FaRobot size={45} />,
      title: "AI Data Processing",
      desc: "Use AI tools to automate repetitive tasks and speed up data processing workflows.",
    },
  ];

  return (
    <SectionWrapper>
      <section
        id="services"
        className="py-24 px-8 bg-[#050816] text-white"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-4">
            My Services
          </h2>

          <p className="text-center text-gray-400 mb-16">
            Helping businesses organize, clean and automate their data efficiently.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-cyan-500/20 p-8 shadow-xl"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

                <div className="text-cyan-400 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {service.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Services;