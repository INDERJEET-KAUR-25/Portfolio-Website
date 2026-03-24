"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* About Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            About Me.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            I&apos;m Inderjeet Kaur, a passionate developer based in Punjab, India. With a strong foundation in Computer Science and Engineering from Lovely Professional University, I specialize in Machine Learning, Data Science, and Full-Stack Web Development.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            I love bridging the gap between intelligent algorithms and responsive user interfaces to create impactful digital solutions. 
          </p>
          
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/80 transition-colors"
          >
            <Download size={20} />
            Download CV / Resume
          </a>
        </motion.div>

        {/* Education Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            Education.
          </h2>

          <div className="relative border-l border-white/20 pl-6 pb-2">
            <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1"></div>
            <h3 className="text-xl font-semibold">Lovely Professional University</h3>
            <p className="text-white/50 text-sm mb-2">Punjab, India • Aug 2023 - Jan 2026</p>
            <p className="text-white/80">B.Tech - Computer Science and Engineering | CGPA: 8.26</p>
          </div>

          <div className="relative border-l border-white/20 pl-6 pb-2">
            <div className="absolute w-3 h-3 bg-white/40 rounded-full -left-[6.5px] top-1"></div>
            <h3 className="text-xl font-semibold">Vertex Global School</h3>
            <p className="text-white/50 text-sm mb-2">Sardar Nagar, Gorakhpur • Apr 2019 - Mar 2021</p>
            <p className="text-white/80">Intermediate | Percentage: 91.6%</p>
          </div>

          <div className="relative border-l border-white/20 pl-6 pb-2 border-transparent">
            <div className="absolute w-3 h-3 bg-white/40 rounded-full -left-[6.5px] top-1"></div>
            <h3 className="text-xl font-semibold">St. Joseph’s School</h3>
            <p className="text-white/50 text-sm mb-2">Khorabar, Gorakhpur • Apr 2017 - Mar 2019</p>
            <p className="text-white/80">Matriculation | Percentage: 90.3%</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
