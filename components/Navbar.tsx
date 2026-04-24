"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Mail, Github, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020818]/90 backdrop-blur-xl border-b border-blue-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo("#home")}
          >
            <span className="text-white">Portfolio</span>
            <span className="text-blue-400">.</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/40"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </motion.button>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block relative">
            <motion.button
              onClick={() => setContactOpen(!contactOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/50 text-blue-400 text-sm font-medium hover:bg-blue-600/10 transition-all duration-200"
            >
              Contact Me <ChevronDown size={14} />
            </motion.button>
            <AnimatePresence>
              {contactOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute right-0 top-12 bg-[#081428] border border-blue-900/40 rounded-xl p-3 min-w-[200px] shadow-xl"
                >
                  <a
                    href="mailto:amarmicrosoft2021@gmail.com"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-900/20 text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Mail size={14} className="text-blue-400" />
                    Email Me
                  </a>
                  <a
                    href="https://github.com/Amarnath2007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-900/20 text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Github size={14} className="text-blue-400" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amarnath-b-88b907252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-900/20 text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Linkedin size={14} className="text-blue-400" />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/its_me_amar2007?utm_source=qr&igsh=MWt2NzJnMDMwejh6OA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-900/20 text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Instagram size={14} className="text-blue-400" />
                    Instagram
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#020818]/95 backdrop-blur-xl border-t border-blue-900/30"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/20 rounded-lg transition-all text-sm"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:amarmicrosoft2021@gmail.com"
                className="block w-full text-left px-4 py-3 text-blue-400 hover:bg-blue-900/20 rounded-lg transition-all text-sm"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
