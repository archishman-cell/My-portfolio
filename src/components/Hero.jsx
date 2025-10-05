import { m } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16">

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <m.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight"
        >
          Hi, I'm <m.span 
            className="text-blue-500 relative"
            animate={{
              textShadow: [
                "0 0 5px rgba(59, 130, 246, 0.3)",
                "0 0 12px rgba(59, 130, 246, 0.5)",
                "0 0 18px rgba(59, 130, 246, 0.7)",
                "0 0 12px rgba(59, 130, 246, 0.5)",
                "0 0 5px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Archishman Kar
          </m.span>
        </m.h1>
        
        <m.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-2xl px-4"
        >
          Frontend Developer | React Specialist | Creative Problem Solver
        </m.p>
        
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 sm:mt-10"
        >
          <a 
            href="#about" 
            className="inline-block text-blue-300 hover:text-blue-200 transition-colors duration-300 animate-bounce text-sm sm:text-base"
          >
            ↓ Scroll Down
          </a>
        </m.div>
      </div>
    </section>
  );
}
