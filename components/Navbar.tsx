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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=amarmicrosoft2021@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href="https://www.linkedin.com/in/amarnath2007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-900/20 text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <Linkedin size={14} className="text-blue-400" />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/da_matrix_404?igsh=MWpvbW15NXU4MG5sbA=="
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
            className="md:hidden text-gray-300 hover:text-white z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide-in */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#020818] border-l border-blue-900/30 z-50 md:hidden p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-xl font-bold cursor-pointer" onClick={() => { scrollTo("#home"); setMenuOpen(false); }}>
                  <span className="text-white">Portfolio</span>
                  <span className="text-blue-400">.</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center px-4 py-4 text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-xl transition-all text-base font-medium border border-transparent hover:border-blue-500/20"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-blue-900/30">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold px-4">Socials</p>
                <div className="grid grid-cols-4 gap-2 px-2">
                  {[
                    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=amarmicrosoft2021@gmail.com" },
                    { icon: Github, href: "https://github.com/Amarnath2007" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/amarnath2007" },
                    { icon: Instagram, href: "https://www.instagram.com/da_matrix_404?igsh=MWpvbW15NXU4MG5sbA==" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 hover:bg-blue-400 hover:text-white transition-all border border-blue-500/20"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
