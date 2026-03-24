"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Opacities for different sections
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);

  // Y transforms for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

  return (
    // The overlay container spans the same height as the canvas (250vh)
    // but its pointer-events are disabled so we can scroll smoothly
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[250vh] pointer-events-none z-10">
      
      {/* Section 1: 0% scroll */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-center p-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          Inderjeet Kaur
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide">
          Computer Science Student & Software Developer
        </p>
      </motion.div>

      {/* Section 2: 30% scroll */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="fixed top-0 left-0 h-screen w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl">
          Turning data into intelligent insights.
        </h2>
        
        <div className="hidden md:block w-[350px] lg:w-[450px] h-[250px] lg:h-[300px] rounded-xl overflow-hidden mt-8 md:mt-0 border border-white/20 shadow-2xl shadow-indigo-500/10">
          <img src="/frame_25_delay-0.066s.png" alt="Data Feature" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Section 3: 60% scroll */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="fixed top-0 right-0 h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-24"
      >
        <div className="hidden md:block w-[350px] lg:w-[450px] h-[250px] lg:h-[300px] rounded-xl overflow-hidden mb-8 md:mb-0 border border-white/20 shadow-2xl shadow-purple-500/10">
          <img src="/frame_50_delay-0.066s.png" alt="Web App Feature" className="w-full h-full object-cover" />
        </div>

        <div className="text-right">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl">
            Building scalable web applications.
          </h2>
        </div>
      </motion.div>

    </div>
  );
}
