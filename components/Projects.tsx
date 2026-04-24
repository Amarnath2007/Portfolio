"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionDivider from "./SectionDivider";

const projects = [
  {
    letter: "F",
    color: "#60a5fa",
    bg: "from-blue-900/40 to-blue-950/60",
    title: "Flames Game",
    subtitle: "Personal · 2025",
    description:
      "A fun interactive logic-based game built to demonstrate creative problem solving and algorithm design. Calculates relationship outcomes using the classic FLAMES formula with a clean terminal-style interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amarnath2007/Flames_game.git",
    demo: "https://flames-lilac.vercel.app",
  },
  {
    letter: "B",
    color: "#34d399",
    bg: "from-emerald-900/40 to-emerald-950/60",
    title: "Birthday Web Gift",
    subtitle: "Personal · 2026",
    description:
      "A personalized web-based gift crafted with AI tools, featuring smooth animations, confetti effects, and a heartfelt user experience — combining creative vision with technical execution.",
    tags: ["HTML", "CSS", "AI Tools"],
    github: "https://github.com/Amarnath2007/Template_birthday.git",
    demo: "https://template-birthday.vercel.app",
  },
  {
    letter: "C",
    color: "#3471d3",
    bg: "from-blue-910/40 to-blue-980/60",
    title: "Chatting System",
    subtitle: "Personal · 2024",
    description:
      "A real-time chat application built in C using TCP socket programming, allowing multiple users to connect, send and receive messages simultaneously over a network with efficient communication handling.",
    tags: ["C", "Networking", "Real-time"],
    github: "https://github.com/Amarnath2007/Chat_System-using-C.git",
  },
  {
    letter: "P",
    color: "#f472b6",
    bg: "from-pink-900/40 to-pink-950/60",
    title: "Personal Portfolio",
    subtitle: "Personal · 2026",
    description:
      "A modern, high-performance portfolio website built with Next.js and Tailwind CSS, featuring smooth animations, dark mode, and a responsive design to showcase my professional journey.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Amarnath2007/Portfolio",
    demo: "https://amar-portfolio-26.vercel.app",
  },
  {
    letter: "B",
    color: "#fbbf24",
    bg: "from-amber-900/40 to-amber-950/60",
    title: "Banking System",
    subtitle: "Personal · 2024",
    description:
      "A robust command-line banking application developed in C, featuring secure user authentication, balance management, and transaction history with file-based data persistence.",
    tags: ["C", "File Handling", "Algorithms"],
    github: "https://github.com/Amarnath2007/Bank_System-using-C.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase mb-2">
              MY WORK
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Projects</h2>
          </motion.div>
        </div>

        {/* Horizontally Scrollable Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-1 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden group flex-shrink-0 w-full sm:w-[32rem]"
              >
                {/* Thumbnail */}
                <div
                  className={`h-48 bg-gradient-to-br ${p.bg} flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at center, ${p.color}, transparent 70%)`,
                    }}
                  />
                  <span
                    className="text-8xl font-black relative z-10 select-none"
                    style={{ color: p.color, textShadow: `0 0 40px ${p.color}` }}
                  >
                    {p.letter}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{p.title}</h3>
                  <p className="text-sm mb-3 font-medium" style={{ color: p.color }}>
                    {p.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md bg-blue-900/30 text-blue-300 text-xs border border-blue-800/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {p.github && (
                        <motion.a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-500 hover:text-blue-400 transition-colors flex items-center"
                          title="Source Code"
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      {p.demo && (
                        <motion.a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-500 hover:text-blue-400 transition-colors flex items-center"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
