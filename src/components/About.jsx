import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 overflow-hidden text-white">
      {/* Animated Background Elements */}
      
      {/* Floating Orbs */}
      
      
      
     
      

      

      {/* Reduced Floating Particles */}
      
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
