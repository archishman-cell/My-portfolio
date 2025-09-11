import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

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
    <section id="skills" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20  overflow-hidden">

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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center max-w-4xl mx-auto" style={{ perspective: 1000 }}>
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                opacity: { delay: i * 0.1, duration: 0.6 },
                scale: { type: "spring", stiffness: 300, damping: 20 },
                y: { type: "spring", stiffness: 300, damping: 20 },
                rotateX: { type: "spring", stiffness: 300, damping: 20 },
                rotateY: { type: "spring", stiffness: 300, damping: 20 }
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                rotateX: -6,
                rotateY: 6
              }}
              whileTap={{ scale: 0.98, rotateX: 0, rotateY: 0 }}
              className="flex flex-col items-center p-4 sm:p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/15 hover:border-white/20 transition-all duration-300 cursor-pointer group transform-gpu will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-3"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
                style={{ transform: "translateZ(24px)" }}
              >
                {skill.icon}
              </motion.div>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ transform: "translateZ(12px)" }}
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
