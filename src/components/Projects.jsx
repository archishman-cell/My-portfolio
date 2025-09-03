import { motion } from "framer-motion";

const projects = [
  { 
    title: "Movie Finder App", 
    desc: "A React-based movie discovery app using OMDB API with search functionality, movie details, and responsive design", 
    link: "https://movie-finder-xi-five.vercel.app/",
    tech: "React, OMDB API, Vite",
    icon: "🎬"
  },
  { 
    title: "EdTech Music Learning Platform", 
    desc: "A comprehensive music education platform built with React and Tailwind CSS, featuring teacher-student marketplace and course management", 
    link: "#",
    tech: "React, Tailwind CSS, React Router",
    icon: "🎵"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 bg-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      
      {/* Floating Project Icons */}
      <motion.div
        className="absolute top-20 right-20 text-6xl opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 10, -10, 0],
        }}
        style={{
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        🎬
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 text-5xl opacity-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        style={{
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        🎵
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-10 text-4xl opacity-10"
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.1, rotate: 180 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
        animate={{
          rotate: [180, 360, 180],
        }}
        style={{
          transition: { duration: 12, repeat: Infinity, ease: "linear" }
        }}
      >
        💻
      </motion.div>

      {/* Animated Code Lines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-4 h-full w-full p-8">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-1 bg-blue-400 rounded-full"
              style={{ width: `${Math.random() * 100}%` }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 via-transparent to-cyan-500/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        animate={{
          background: [
            "linear-gradient(225deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)",
            "linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)",
          ]
        }}
        style={{
          transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <div className="relative z-10">
      <motion.h2 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center"
      >
        Projects
      </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
              className="relative bg-gray-700 p-4 sm:p-6 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Project Icon */}
              <motion.div
                className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                style={{
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {p.icon}
              </motion.div>
              
              <motion.h3 
                className="text-xl sm:text-2xl font-semibold mb-3 pr-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 + 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {p.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 + 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {p.desc}
              </motion.p>
              
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.3 + 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-xs sm:text-sm text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                  {p.tech}
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.3 + 0.8, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <a 
                  href={p.link} 
                  target={p.link.startsWith('http') ? '_blank' : '_self'}
                  rel={p.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium inline-flex items-center group-hover:translate-x-1 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={(e) => {
                    if (p.link.startsWith('http')) {
                      e.preventDefault();
                      window.open(p.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  View Project →
                </a>
              </motion.div>
              
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)"
                }}
              />
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
