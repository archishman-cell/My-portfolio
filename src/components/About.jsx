import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 bg-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-blue-600/15 rounded-full blur-xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-18 h-18 bg-cyan-500/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Animated Grid Pattern */}
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

      <div className="relative z-10 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left"
      >
        About Me
      </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <motion.p 
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            I'm Archishman Kar, a passionate frontend developer specializing in building modern, responsive, and interactive web applications. I love creating experiences that leave an impression and solving complex problems with clean, efficient code.
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
          >
            With expertise in React, JavaScript, and modern CSS frameworks like Tailwind CSS, I focus on creating user-friendly interfaces that work seamlessly across all devices. I'm particularly interested in educational technology and entertainment applications.
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
          >
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that combine my love for technology and creativity.
      </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
