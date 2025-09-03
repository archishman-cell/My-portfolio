import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFirebase } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5", color: "orange" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3", color: "blue" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript", color: "yellow" },
  { icon: <FaReact className="text-cyan-400" />, name: "React", color: "cyan" },
  { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS", color: "blue" },
  { icon: <SiVite className="text-purple-500" />, name: "Vite", color: "purple" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", color: "green" },
  { icon: <FaGitAlt className="text-orange-600" />, name: "Git", color: "orange" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 bg-gray-900 overflow-hidden">
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
            >
              <motion.div 
                className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-3"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {skill.icon}
              </motion.div>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {skill.name}
              </motion.p>
              
              {/* Hover Effect Glow */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, var(--tw-${skill.color}-500) 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
