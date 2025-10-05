import { m } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  { 
    title: "VibeAI", 
    shortDesc: "An intelligent AI chatbot built with React and Vite, powered by Google's Gemini API.",
    desc: "A React-based AI chat interface using Google Gemini API with modular architecture, real-time typing animations, and comprehensive error handling.", 
    detailedDescription: [
      "VibeAI is a cutting-edge conversational AI application that leverages Google's powerful Gemini API to provide intelligent, context-aware responses to user queries.",
      "Built with modern React and Vite for optimal performance, the application features a sleek, intuitive interface that makes AI interaction seamless and enjoyable.",
      "The project demonstrates advanced state management, API integration, and real-time communication patterns while maintaining a responsive design across all devices.",
      "Achieved significant performance improvements through modular component architecture and custom hooks, reducing development time by 30% and improving user engagement by 25%."
    ],
    features: [
      "Real-time AI conversations with Google Gemini API",
      "Real-time typing animations for enhanced user experience",
      "Automated prompt suggestions to guide user interactions",
      "Modular component architecture with custom hooks",
      "Comprehensive error handling with 60-second timeouts",
      "Mobile-first responsive design with 90% mobile compatibility",
      "Sticky input components and auto-scroll functionality",
      "Service layer architecture with environment variables",
      "Robust API integration reducing failed requests by 20%"
    ],
    challenges: [
      {
        problem: "Reducing development time while maintaining code quality and scalability",
        solution: "Implemented modular component architecture and custom hooks, reducing development time by 30% through reusable components and efficient state management patterns"
      },
      {
        problem: "Improving user engagement and response times in AI chat interface",
        solution: "Added real-time typing animations and automated prompt suggestions, improving user engagement by 25% and reducing average response time by 40%"
      },
      {
        problem: "Managing API reliability and error handling for seamless user experience",
        solution: "Created robust API integration with comprehensive error handling and 60-second timeouts, reducing failed requests by 20% and significantly improving user experience"
      },
      {
        problem: "Optimizing code maintainability and deployment processes",
        solution: "Structured code using service layers and environment variables, reducing maintenance overhead by 35% and enabling easy deployment across different environments"
      },
      {
        problem: "Ensuring mobile compatibility and responsive design across all devices",
        solution: "Built mobile-first design with sticky input components and auto-scroll functionality, achieving 90% mobile compatibility across various devices and screen sizes"
      }
    ],
    link: "https://vibe-ai-silk.vercel.app/",
    github: "https://github.com/archishman-cell/VibeAI",
    tech: "React, Vite, Gemini API, Custom Hooks, Service Architecture",
    technologies: ["React", "Vite", "Google Gemini API", "Custom Hooks", "Service Architecture", "JavaScript", "HTML5", "CSS3", "Mobile-First Design"],
    status: "Completed",
    icon: "🤖"
  },
  { 
    title: "Movie Finder App", 
    shortDesc: "A React-based movie discovery app using OMDB API with search functionality and detailed movie information.",
    desc: "A responsive movie search application using React and OMDB API with real-time search, advanced filtering, and optimized API integration.", 
    detailedDescription: [
      "Movie Finder is a comprehensive movie discovery application that helps users search, explore, and learn about their favorite films using the OMDB (Open Movie Database) API.",
      "The application features an intuitive search interface with real-time search capabilities, detailed movie information pages, and a responsive design that works seamlessly across all devices.",
      "Built with React and modern development practices, it showcases efficient API integration, state management, and user experience design with significant performance optimizations.",
      "Achieved exceptional performance with 40% reduction in API calls through debouncing and 85% search accuracy with advanced filtering capabilities."
    ],
    features: [
      "Real-time search with 500ms debouncing to optimize API calls",
      "Advanced multi-criteria filtering (title, director, actors, plot)",
      "85% search accuracy with intelligent fallback data handling",
      "Comprehensive error handling for network failures and rate limits",
      "Mobile-first responsive UI with 95% mobile compatibility",
      "Smooth animations with staggered loading effects",
      "Detailed movie information including plot, cast, ratings, and reviews",
      "User-friendly error messages and loading states",
      "Optimized API integration reducing failed requests by 30%"
    ],
    challenges: [
      {
        problem: "Optimizing API performance while maintaining real-time search experience",
        solution: "Implemented 500ms debouncing mechanism, reducing API calls by 40% while preserving responsive search functionality and user experience"
      },
      {
        problem: "Building comprehensive search functionality with high accuracy",
        solution: "Developed advanced multi-criteria filtering system (title, director, actors, plot) achieving 85% search accuracy with intelligent edge case handling and fallback data"
      },
      {
        problem: "Managing API reliability and network error handling",
        solution: "Created robust error handling system for network failures and rate limits, reducing failed requests by 30% and providing clear, user-friendly error messages"
      },
      {
        problem: "Ensuring optimal mobile experience and responsive design",
        solution: "Designed mobile-first responsive UI with Tailwind CSS, achieving 95% mobile compatibility with smooth animations and staggered loading effects for enhanced user experience"
      }
    ],
    link: "https://movie-finder-xi-five.vercel.app/",
    github: "https://github.com/archishman-cell/movie-finder",
    tech: "React, OMDB API, Tailwind CSS, Debouncing, Advanced Filtering",
    technologies: ["React", "OMDB API", "Tailwind CSS", "Vite", "Debouncing", "Advanced Filtering", "JavaScript", "HTML5", "CSS3", "Mobile-First Design"],
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
      <m.h2 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center"
      >
        Projects
      </m.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <m.div 
            key={i}
              className="relative p-4 sm:p-6 rounded-lg hover:scale-105 transition-all duration-300 group overflow-hidden bg-gray-900/40 backdrop-blur-md border border-gray-700 cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-white/20"
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
              <m.div
                className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              >
                {p.icon}
              </m.div>
              
              <m.h3 
                className="text-xl sm:text-2xl font-semibold mb-3 pr-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3 + 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {p.title}
              </m.h3>
              
              <m.p 
                className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 + 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {p.desc}
              </m.p>

              {p.title === "EdTech Music Learning Platform" && (
                <div className="mb-4 p-3 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm">
                  <strong>Note:</strong> This project is under development, can be routed through login button, this project may not be responsive for mobile devices
                </div>
              )}
              
              <m.div 
                className="mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.3 + 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-xs sm:text-sm text-blue-300 bg-blue-400/10 px-2 py-1 rounded-full">
                  {p.tech}
                </span>
              </m.div>
              
              <m.div
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
              </m.div>
              
              {/* Hover Glow Effect removed to avoid per-card background animation */}
          </m.div>
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
