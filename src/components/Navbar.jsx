import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Social icons */}
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* GitHub Icon */}
            <motion.a
              href="https://github.com/archishman-cell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full transition-all duration-300 text-sm hover:bg-white/20 hover:border-white/30"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-4 h-4 mr-2" />
              GitHub
            </motion.a>

            {/* LinkedIn Icon */}
            <motion.a
              href="https://www.linkedin.com/in/archishman-kar-15131336b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full transition-all duration-300 text-sm hover:bg-white/20 hover:border-white/30"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Right side - Resume */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Resume Download Button */}
            <motion.a 
              href="/resume.pdf" 
              download="Archishman_Kar_Resume.pdf"
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full transition-all duration-300 text-sm hover:bg-white/20 hover:border-white/30"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="w-4 h-4 mr-2" />
              Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
