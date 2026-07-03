"use client";

import { motion } from "framer-motion";
import { ChevronUp, Mail, Github, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  "Home",
  "Skills",
  "Achievements",
  "Certifications",
  "Projects",
  "About",
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
 
  return (
    <footer className="relative z-10 border-t border-blue-900/30 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content Group */}
        <div className="flex flex-col items-center gap-8 mb-12">
          {/* Logo */}
          <div className="text-3xl font-bold flex flex-col items-center gap-1">
            <div>
              <span className="text-white">Portfolio</span>
              <span className="text-blue-400">.</span>
            </div>
            <div className="h-1 w-8 bg-blue-500 rounded-full" />
          </div>

          {/* Social Links - Increased gap for mobile */}
          <div className="flex items-center gap-6 sm:gap-4">
            {[
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=amarmicrosoft2021@gmail.com" },
              { icon: Github, href: "https://github.com/Amarnath2007" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/amarnath2007" },
              { icon: Instagram, href: "https://www.instagram.com/da_matrix_404?igsh=MWpvbW15NXU4MG5sbA==" },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-blue-900/10 border border-blue-900/40 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all shadow-lg"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Nav Links - Better spacing on mobile */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 border-y border-white/5 py-8">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors uppercase tracking-widest text-[11px] sm:text-xs"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-sm order-last sm:order-first">
            © 2026 Amarnath B. All Rights Reserved.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 transition-all text-xs font-bold uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ChevronUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
