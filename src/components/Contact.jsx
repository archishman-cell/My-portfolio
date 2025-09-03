import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 bg-gray-900 overflow-hidden">
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

      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center"
      >
        Contact Me
      </motion.h2>
        
        <motion.form 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg space-y-4 sm:space-y-6 relative overflow-hidden"
        >
          {/* Form Background Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-lg"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            style={{
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <div className="relative z-10 space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-600" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-600" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-none transition-all duration-300 hover:bg-gray-600" 
              />
            </motion.div>
            
            <motion.button 
              className="w-full p-3 sm:p-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 text-base sm:text-lg relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Send Message</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
