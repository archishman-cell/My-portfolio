import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectModal({ project, isOpen, onClose, onAnimationComplete }) {
  if (!project && !isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut",
                scale: { type: "spring", stiffness: 300, damping: 25 }
              }}
              onAnimationComplete={onAnimationComplete}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-hide"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
              >
                <FaTimes size={20} />
              </button>

              {/* Project Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{project.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-lg">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                <div className="text-gray-300 space-y-4">
                  {project.detailedDescription.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {project.features && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              {project.challenges && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Challenges & Solutions</h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <h4 className="text-orange-400 font-medium mb-2">Challenge:</h4>
                        <p className="text-gray-300 mb-3">{challenge.problem}</p>
                        <h4 className="text-green-400 font-medium mb-2">Solution:</h4>
                        <p className="text-gray-300">{challenge.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Status */}
              {project.status && (
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : project.status === 'In Development'
                      ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </motion.a>
                )}
                
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub size={16} />
                    View Code
                  </motion.a>
                )}
              </div>

              {/* Development Note */}
              {project.title === "EdTech Music Learning Platform" && (
                <div className="mt-6 p-4 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-sm">
                  <strong>Note:</strong> This project is under development, can be routed through login button, this project may not be responsive for mobile devices
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
