import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function ProjectModal({ project, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6 py-8"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 80 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 80 }}
            transition={{ duration: 0.35 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white shadow-lg transition"
            >
              <FaTimes size={18} />
            </button>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[400px] object-contain bg-slate-800"
            />

            {/* Content */}
            <div className="p-8">

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h2>

              <p className="text-gray-300 leading-8 mb-6">
                {project.description}
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Project Highlights
                </h3>

                <ul className="space-y-3 text-gray-300 list-disc ml-5">
                  <li>Professional Excel formatting</li>
                  <li>Data cleaning & preprocessing</li>
                  <li>Formula optimization</li>
                  <li>Organized spreadsheet workflow</li>
                  <li>Analysis-ready dataset</li>
                </ul>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;