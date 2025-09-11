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
    link: "https://surtaalwebapp.vercel.app/",
    tech: "React, Tailwind CSS, React Router",
    icon: "🎵"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20  overflow-hidden">

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
              className="relative p-4 sm:p-6 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/20"
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

              {p.title === "EdTech Music Learning Platform" && (
                <div className="mb-4 p-3 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm">
                  This project is under development, can be routed through login button, this project maynot be responsive for mobile devices
                </div>
              )}
              
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
                  target={p.link && p.link.startsWith('http') ? '_blank' : '_self'}
                  rel={p.link && p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium inline-flex items-center group-hover:translate-x-1 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  View Project →
                </a>
              </motion.div>
              
              {/* Hover Glow Effect removed to avoid per-card background animation */}
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
