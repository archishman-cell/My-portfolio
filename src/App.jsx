import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UnifiedBackground from "./components/UnifiedBackground";

export default function App() {
  return (
    
    <>
        <UnifiedBackground />

      <div className= "text-white">
      
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        
      
      </div>
      </>
  
  );
}
