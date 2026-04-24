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
      "A fun interactive logic-based game built to demonstrate creative problem solving and algorithm design.",
    highlights: ["Interactive terminal-style interface", "Calculates relationship outcomes with FLAMES formula"],
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amarnath2007/Flames_game.git",
    demo: "https://flames-lilac.vercel.app",
    topProject: true,
  },
  {
    letter: "P",
    color: "#f472b6",
    bg: "from-pink-900/40 to-pink-950/60",
    title: "Personal Portfolio",
    subtitle: "Personal · 2026",
    description:
      "A modern, high-performance portfolio website built to showcase my professional journey.",
    highlights: ["Built with Next.js and Tailwind CSS", "Features smooth animations and dark mode"],
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Amarnath2007/Portfolio",
    demo: "https://amar-portfolio-26.vercel.app",
    topProject: true,
  },
  {
    letter: "B",
    color: "#fbbf24",
    bg: "from-amber-900/40 to-amber-950/60",
    title: "Banking System",
    subtitle: "Personal · 2024",
    description:
      "A robust command-line banking application featuring secure user authentication.",
    highlights: ["Balance management and transaction history", "File-based data persistence"],
    tags: ["C", "File Handling", "Algorithms"],
    github: "https://github.com/Amarnath2007/Bank_System-using-C.git",
    topProject: true,
  },
  {
    letter: "B",
    color: "#34d399",
    bg: "from-emerald-900/40 to-emerald-950/60",
    title: "Birthday Web Gift",
    subtitle: "Personal · 2026",
    description:
      "A personalized web-based gift crafted with AI tools, featuring a heartfelt user experience.",
    highlights: ["Smooth animations and confetti effects", "Combines creative vision with technical execution"],
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
      "A real-time chat application allowing multiple users to connect, send and receive messages simultaneously.",
    highlights: ["Built in C using TCP socket programming", "Efficient communication handling over a network"],
    tags: ["C", "Networking", "Real-time"],
    github: "https://github.com/Amarnath2007/Chat_System-using-C.git",
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
        <div className="relative w-full">
          <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 px-1 items-stretch [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl overflow-hidden group flex-shrink-0 w-full sm:w-[32rem] flex flex-col transition-all duration-300 snap-center sm:snap-start ${p.topProject ? 'border border-[var(--blue-glow)] shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]' : ''}`}
              >
              {/* Thumbnail */}
              <div
                className={`h-48 bg-gradient-to-br ${p.bg} flex items-center justify-center relative overflow-hidden shrink-0`}
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
              <div className="p-6 relative flex flex-col flex-grow">
                {p.topProject && (
                  <div 
                    className="absolute top-4 right-4 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase flex items-center justify-center border bg-blue-900/20 border-blue-500/40 text-blue-400"
                  >
                    Top Project
                  </div>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{p.title}</h3>
                <p className="text-sm mb-3 font-medium" style={{ color: p.color }}>
                  {p.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="mb-5 space-y-1">
                  {p.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
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
                        className="text-gray-500 hover:text-blue-400 transition-colors flex items-center shrink-0"
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
                        className="text-gray-500 hover:text-blue-400 transition-colors flex items-center shrink-0"
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
