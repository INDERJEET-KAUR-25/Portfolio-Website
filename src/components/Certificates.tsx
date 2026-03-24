"use client";

import { motion } from "framer-motion";
import { Award, Trophy, ExternalLink } from "lucide-react";

export default function Certificates() {
  const certificates = [
    { title: "Tata - GenAI Powered Data Analytics Job Simulation", date: "Sep 2025" },
    { title: "NPTEL – Cloud Computing", date: "Apr 2025" },
    { title: "Generative AI Foundation Course", date: "Mar 2024" },
    { title: "Responsive Web Design", date: "Nov 2023" },
  ];

  const achievements = [
    { title: "3 Achiever DSA badge on Code360 (Coding Ninjas)", date: "" },
    { title: "190+ questions on Code360 (Coding Ninjas)", date: "" },
  ];

  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Certificates */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Award size={40} className="text-white" strokeWidth={1.5} />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Certificates.
              </h2>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">{cert.title}</h3>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <span className="text-sm text-white/40 whitespace-nowrap">{cert.date}</span>
                  <ExternalLink size={16} className="text-white/30 group-hover:text-white/100 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-12">
              <Trophy size={40} className="text-white" strokeWidth={1.5} />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Achievements.
              </h2>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:from-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">{ach.title}</h3>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <ExternalLink size={16} className="text-white/30 group-hover:text-white/100 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
