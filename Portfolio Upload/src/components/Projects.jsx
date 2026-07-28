import hotel from "../assets/images/projects/hotel-booking.png";
import banking from "../assets/images/projects/banking-data.png";
import employee from "../assets/images/projects/employee-database.png";
import blinkit from "../assets/images/projects/blinkit-data.png";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaEye } from "react-icons/fa";

import SectionWrapper from "./SectionWrapper";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: hotel,
      title: "Hotel Booking Data Cleaning",
      description:
        "Converted messy hotel booking records into a clean, analysis-ready Excel spreadsheet using advanced formulas and formatting.",
      tech: ["Excel", "Cleaning", "Formatting"],
      status: "Coming Soon",
    },
    {
      image: banking,
      title: "Banking Transaction Data",
      description:
        "Organized raw banking transaction records into a professional financial dataset for analysis.",
      tech: ["Excel", "Finance", "Functions"],
      status: "Coming Soon",
    },
    {
      image: employee,
      title: "Employee Database",
      description:
        "Created a structured employee database with formulas, formatting, and automated calculations.",
      tech: ["Excel", "Database", "Automation"],
      status: "Coming Soon",
    },
    {
      image: blinkit,
      title: "Blinkit Sales Data",
      description:
        "Cleaned and structured retail sales data into an analysis-ready spreadsheet with consistent formatting.",
      tech: ["Excel", "Google Sheets", "Cleaning"],
      status: "Coming Soon",
    },
  ];

  return (
    <SectionWrapper>
      <section
        id="projects"
        className="relative py-28 px-8 bg-[#050816] text-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-center"
          >
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <p className="text-center text-gray-400 mt-5 mb-16 text-lg">
            Professional Excel, Google Sheets and AI-powered spreadsheet projects.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400 shadow-xl hover:shadow-cyan-500/30 transition-all"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-cyan-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-110 transition"
                    >
                      <FaEye />
                      View Project
                    </button>

                  </div>

                </div>

                {/* Content */}
                <div className="p-8">

                  <h3 className="text-2xl font-bold text-cyan-400">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mt-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.tech.map((item, i) => (

                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-sm"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  <div className="flex justify-end items-center mt-8">

  <button
    onClick={() => setSelectedProject(project)}
    className="flex items-center gap-2 text-cyan-400 hover:text-white hover:gap-4 transition-all"
  >
    Details
    <FaArrowRight />
  </button>

</div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  );
}

export default Projects;