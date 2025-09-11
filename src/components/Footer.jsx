 

export default function Footer() {
    return (
      <footer className="relative py-6 sm:py-8 text-center  text-gray-300 px-4 overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} Archishman Kar. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>
    );
  }
  