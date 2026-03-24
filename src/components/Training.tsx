"use client";

import { motion } from "framer-motion";

export default function Training() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
            Training & Experience.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">CipherSchools <span className="text-white/50 font-normal">(Edtech Company)</span></h3>
              <p className="text-xl text-white/80">Machine Learning with Data Science</p>
            </div>
            <span className="text-white/50 mt-4 md:mt-0 font-medium tracking-wide">Jul 2025</span>
          </div>

          <ul className="space-y-4 text-white/70 leading-relaxed max-w-4xl">
            <li className="flex items-start">
              <span className="text-white mr-4 mt-1.5">•</span>
              <p>Performed Exploratory Data Analysis using NumPy and Pandas, leading to a 20% reduction in data preprocessing time.</p>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-4 mt-1.5">•</span>
              <p>Developed, trained, and evaluated various Machine Learning models, including Linear Regression, KNN, SVM, Decision Trees, K-Means, and Ensemble Methods using Scikit-learn, achieving an average accuracy improvement of 15%.</p>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-4 mt-1.5">•</span>
              <p>Employed feature engineering techniques to enhance model performance by 25% for predictive analysis.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
