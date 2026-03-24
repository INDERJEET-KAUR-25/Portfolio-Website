"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["Java", "C++", "Python", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraies",
    items: ["Django", "Scikit-Learn", "NumPy", "Pandas"],
  },
  {
    category: "Tools & Platforms",
    items: ["MySQL", "Power BI", "Git"],
  },
  {
    category: "Soft Skills",
    items: ["Problem-Solving", "Leadership", "Communication", "Adaptability"],
  },
];

export default function Skills() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
            Skills.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
