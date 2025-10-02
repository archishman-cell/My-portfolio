import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  { 
    title: "VibeAI", 
    shortDesc: "An intelligent AI chatbot built with React and Vite, powered by Google's Gemini API.",
    desc: "An intelligent AI chatbot built with React and Vite, powered by Google's Gemini API. Features real-time conversations, smart responses, and a modern user interface.", 
    detailedDescription: [
      "VibeAI is a cutting-edge conversational AI application that leverages Google's powerful Gemini API to provide intelligent, context-aware responses to user queries.",
      "Built with modern React and Vite for optimal performance, the application features a sleek, intuitive interface that makes AI interaction seamless and enjoyable.",
      "The project demonstrates advanced state management, API integration, and real-time communication patterns while maintaining a responsive design across all devices."
    ],
    features: [
      "Real-time AI conversations with Google Gemini API",
      "Modern, responsive UI built with React and Tailwind CSS",
      "Fast development and build process with Vite",
      "Intelligent context awareness for better conversations",
      "Clean, intuitive user interface design",
      "Cross-platform compatibility"
    ],
    challenges: [
      {
        problem: "Managing API rate limits and response times while maintaining smooth user experience",
        solution: "Implemented intelligent caching, request queuing, and loading states to handle API limitations gracefully"
      },
      {
        problem: "Creating a responsive chat interface that works well on all devices",
        solution: "Used Tailwind CSS with mobile-first design principles and extensive testing across different screen sizes"
      }
    ],
    link: "https://vibe-ai-silk.vercel.app/",
    github: "https://github.com/archishman-cell/VibeAI",
    tech: "React, Vite, Gemini API, Tailwind CSS",
    technologies: ["React", "Vite", "Google Gemini API", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    status: "Completed",
    icon: "🤖"
  },
  { 
    title: "Movie Finder App", 
    shortDesc: "A React-based movie discovery app using OMDB API with search functionality and detailed movie information.",
    desc: "A React-based movie discovery app using OMDB API with search functionality, movie details, and responsive design", 
    detailedDescription: [
      "Movie Finder is a comprehensive movie discovery application that helps users search, explore, and learn about their favorite films using the OMDB (Open Movie Database) API.",
      "The application features an intuitive search interface, detailed movie information pages, and a responsive design that works seamlessly across all devices.",
      "Built with React and modern development practices, it showcases efficient API integration, state management, and user experience design."
    ],
    features: [
      "Advanced movie search with real-time results",
      "Detailed movie information including plot, cast, ratings, and reviews",
      "Responsive design optimized for all screen sizes",
      "Fast loading with optimized API calls",
      "Clean, modern user interface",
      "Movie poster gallery and image optimization"
    ],
    challenges: [
      {
        problem: "Handling large amounts of movie data and optimizing search performance",
        solution: "Implemented debounced search, pagination, and efficient data caching to improve performance"
      },
      {
        problem: "Creating an engaging UI for movie browsing and discovery",
        solution: "Designed an intuitive card-based layout with smooth animations and clear information hierarchy"
      }
    ],
    link: "https://movie-finder-xi-five.vercel.app/",
    github: "https://github.com/archishman-cell/movie-finder",
    tech: "React, OMDB API, Vite",
    technologies: ["React", "OMDB API", "Vite", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    status: "Completed",
    icon: "🎬"
  },
  { 
    title: "EdTech Music Learning Platform", 
    shortDesc: "A comprehensive music education platform featuring teacher-student marketplace and course management.",
    desc: "A comprehensive music education platform built with React and Tailwind CSS, featuring teacher-student marketplace and course management", 
    detailedDescription: [
      "Surtaal is an innovative educational technology platform designed to connect music teachers with students in a comprehensive learning environment.",
      "The platform features a sophisticated teacher-student marketplace, course management system, and interactive learning tools specifically designed for music education.",
      "Built with React and Tailwind CSS, it demonstrates complex state management, user authentication flows, and responsive design principles for educational applications."
    ],
    features: [
      "Teacher-student marketplace with profile matching",
      "Comprehensive course management system",
      "Interactive learning modules for different instruments",
      "User authentication and profile management",
      "Responsive design for all devices",
      "Course progress tracking and analytics",
      "Multiple instrument categories (Vocals, Keys, Strings, Percussion)",
      "Teacher verification and rating system"
    ],
    challenges: [
      {
        problem: "Creating a complex multi-user system with different user roles and permissions",
        solution: "Implemented role-based routing and state management with clear separation of teacher and student interfaces"
      },
      {
        problem: "Designing an intuitive course management system for music education",
        solution: "Created specialized components for different instrument types with tailored learning paths and progress tracking"
      },
      {
        problem: "Ensuring responsive design across the large application",
        solution: "Used Tailwind CSS with systematic component design and extensive testing across different screen sizes"
      }
    ],
    link: "https://surtaalwebapp.vercel.app/",
    github: "https://github.com/archishman-cell/Surtaal-web-app",
    tech: "React, Tailwind CSS, React Router",
    technologies: ["React", "Tailwind CSS", "React Router", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    status: "In Development",
    icon: "🎵"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAnimationComplete = () => {
    if (!isModalOpen) {
      setSelectedProject(null);
    }
  };

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
              className="relative p-4 sm:p-6 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              onClick={() => openModal(p)}
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
                className="flex gap-3"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(p);
                  }}
                  className="text-green-400 hover:text-green-300 text-sm sm:text-base font-medium inline-flex items-center group-hover:translate-x-1 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  View Details →
                </button>
                <a 
                  href={p.link}
                  target={p.link && p.link.startsWith('http') ? '_blank' : '_self'}
                  rel={p.link && p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium inline-flex items-center group-hover:translate-x-1 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Live Demo →
                </a>
              </motion.div>
              
              {/* Hover Glow Effect removed to avoid per-card background animation */}
          </motion.div>
        ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        onAnimationComplete={handleAnimationComplete}
      />
    </section>
  );
}
