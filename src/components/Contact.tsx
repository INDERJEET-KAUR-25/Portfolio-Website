"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Briefcase, Link2 } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Let&apos;s build<br />something together.
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-lg">
            Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6 w-full md:w-auto"
        >
          <a
            href="mailto:kaurinder2506@gmail.com"
            className="flex items-center gap-4 text-white/70 hover:text-white transition-colors text-lg"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
              <Mail size={20} />
            </div>
            kaurinder2506@gmail.com
          </a>

          <a
            href="tel:+916239856821"
            className="flex items-center gap-4 text-white/70 hover:text-white transition-colors text-lg"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
              <Phone size={20} />
            </div>
            +91-6239856821
          </a>

          <a
            href="https://www.linkedin.com/in/inderjeetkaur25/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-white/70 hover:text-white transition-colors text-lg"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
              <Briefcase size={20} />
            </div>
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/INDERJEET-KAUR-25"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-white/70 hover:text-white transition-colors text-lg"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
              <Link2 size={20} />
            </div>
            GitHub Profile
          </a>
        </motion.div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
        <p>© {new Date().getFullYear()} Inderjeet Kaur. All rights reserved.</p>
        <p>Built with Next.js, Tailwind & Framer Motion.</p>
      </div>
    </section>
  );
}
