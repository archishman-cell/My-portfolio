import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function BackgroundAnimation() {
  const controls = useAnimation();

  // Fade in on load
  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 1.5 } });
  }, [controls]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Beam 1 */}
      <motion.div
        className="absolute w-[120%] h-[200px] bg-gradient-to-r from-blue-500/30 via-blue-400/10 to-transparent blur-3xl"
        style={{ top: "20%", left: "-10%", rotate: "-25deg" }}
        animate={{
          x: ["-10%", "10%", "-10%"],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Beam 2 */}
      <motion.div
        className="absolute w-[140%] h-[250px] bg-gradient-to-r from-blue-400/20 via-blue-300/5 to-transparent blur-2xl"
        style={{ bottom: "15%", left: "-20%", rotate: "20deg" }}
        animate={{
          x: ["0%", "15%", "0%"],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center glow pulse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
        style={{ top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 6 + 4;
        return (
          <motion.div
            key={i}
            className="absolute bg-blue-400/20 rounded-full"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -300],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </motion.div>
  );
}
