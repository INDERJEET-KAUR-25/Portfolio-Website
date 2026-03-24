"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Using real data from the user's resume
const projects = [
  {
    title: "TravelPro",
    category: "Web Application",
    description: "Bus Booking Web Application designed with a responsive modular interface and structured frontend components.",
    year: "Mar 2026",
  },
  {
    title: "Luxe Shop",
    category: "E-Commerce",
    description: "Complete e-commerce solution using Django (MVT), secure authentication, and robust admin dashboard.",
    year: "Feb 2026",
  },
  {
    title: "AI Job Trends & Forecasting",
    category: "Data Analysis",
    description: "Multi-page Power BI dashboard to visualize global AI employment trends and predict future market momentum.",
    year: "Dec 2025",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
            Selected Work.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a key={project.title} href="https://github.com/INDERJEET-KAUR-25" target="_blank" rel="noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group h-full relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-sm font-medium text-white/30 truncate ml-2">
                    {project.year}
                  </span>
                </div>
                
                <div className="mt-12 lg:mt-24 mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="absolute top-8 right-8 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-white">
                  <ArrowUpRight size={28} strokeWidth={1.5} />
                </div>
              </motion.div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
