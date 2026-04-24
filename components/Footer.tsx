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
    <footer className="relative z-10 border-t border-blue-900/30 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">Portfolio</span>
            <span className="text-blue-400">.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=amarmicrosoft2021@gmail.com" },
              { icon: Github, href: "https://github.com/Amarnath2007" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/amarnath-b-88b907252/" },
              { icon: Instagram, href: "https://www.instagram.com/its_me_amar2007?utm_source=qr&igsh=MWt2NzJnMDMwejh6OA==" },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-900/20 border border-blue-800/40 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600/30 transition-all"
          >
            <ChevronUp size={16} />
          </motion.button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Amarnath B. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
