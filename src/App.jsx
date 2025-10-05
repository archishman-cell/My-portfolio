import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  return (
    <Router>
      <LazyMotion features={domAnimation}>
        <ParticleBackground />
        <Navbar />
        <div className="text-white">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </LazyMotion>
    </Router>
  );
}
