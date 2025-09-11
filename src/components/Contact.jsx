import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20  overflow-hidden">

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
          className="max-w-2xl mx-auto p-6 sm:p-8 rounded-lg space-y-4 sm:space-y-6 relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/10"
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
                className="w-full p-3 sm:p-4 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300 transition-all duration-300 hover:bg-white/15 hover:border-white/20 backdrop-blur-md" 
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
                className="w-full p-3 sm:p-4 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300 transition-all duration-300 hover:bg-white/15 hover:border-white/20 backdrop-blur-md" 
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
                className="w-full p-3 sm:p-4 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300 resize-none transition-all duration-300 hover:bg-white/15 hover:border-white/20 backdrop-blur-md" 
              />
            </motion.div>
            
            <motion.button 
              className="w-full p-3 sm:p-4 rounded-lg text-white font-semibold transition-all duration-300 text-base sm:text-lg relative overflow-hidden group bg-blue-500/80 hover:bg-blue-500"
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
              />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
