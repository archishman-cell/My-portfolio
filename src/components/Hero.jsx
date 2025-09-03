import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gray-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-blue-600/15 rounded-full blur-xl"
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-18 h-18 bg-cyan-500/20 rounded-full blur-xl"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Simplified Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-blue-400"
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.02,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Reduced Floating Particles */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Download Resume Button - Top Right */}
      <motion.a 
        href="/resume.pdf" 
        download="Archishman_Kar_Resume.pdf"
        className="absolute top-6 right-6 z-20 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full transition-all duration-300 text-sm hover:bg-white/20 hover:border-white/30"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ 
          scale: 1.05,
          y: -2
        }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Resume
      </motion.a>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight"
        >
          Hi, I'm <motion.span 
            className="text-blue-500 relative"
            animate={{
              textShadow: [
                "0 0 5px rgba(59, 130, 246, 0.3)",
                "0 0 12px rgba(59, 130, 246, 0.5)",
                "0 0 18px rgba(59, 130, 246, 0.7)",
                "0 0 12px rgba(59, 130, 246, 0.5)",
                "0 0 5px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Archishman Kar
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-2xl px-4"
        >
          Frontend Developer | React Specialist | Creative Problem Solver
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 sm:mt-10"
        >
          <a 
            href="#about" 
            className="inline-block text-blue-400 hover:text-blue-300 transition-colors duration-300 animate-bounce text-sm sm:text-base"
          >
            ↓ Scroll Down
          </a>
        </motion.div>
      </div>

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)",
            "linear-gradient(225deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)",
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}
