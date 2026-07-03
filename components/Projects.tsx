"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Download } from "lucide-react";
import SectionDivider from "./SectionDivider";

const projects = [
  {
    letter: "T",
    color: "#a78bfa",
    bg: "from-purple-900/40 to-purple-950/60",
    title: "Tunic Music",
    subtitle: "Mobile App · 2026",
    description:
      "A premium music streaming application featuring a library of 500+ songs with a Spotify-inspired user experience.",
    highlights: ["Built with Flutter and Kotlin", "Integrated with Cloudinary for seamless media hosting", "Advanced playback controls and playlist management"],
    tags: ["Flutter", "Kotlin", "Cloudinary"],
    download: "https://ydfjuomyveiwbxejkjvh.supabase.co/storage/v1/object/sign/Apps/Tunic_music_by_Amar.apk?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81N2RmMTE0ZC1iNTk5LTRhN2ItYjk1ZS02ZDJhYjA0NWZiMTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcHBzL1R1bmljX211c2ljX2J5X0FtYXIuYXBrIiwiaWF0IjoxNzc4ODIwNzczLCJleHAiOjE5MzY1MDA3NzN9.BQpxvEi3oVdrAoFjPy-NuKtezOKsABWQRDD8Uzns0ho", 
    contactSource: true,
    topProject: true,
  },
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
    contactSource: true,
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
    topProject: false,
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 1.2 : scrollLeft + clientWidth / 1.2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

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
        <div className="relative w-full group/carousel">
          <div 
            ref={scrollRef}
            className="flex gap-1 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 md:px-1 items-stretch [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl md:rounded-3xl overflow-hidden group flex-shrink-0 w-[92%] sm:w-[32rem] flex flex-col transition-all duration-300 snap-center sm:snap-start mx-[4%] md:mx-0 ${p.topProject ? 'border border-blue-500/30' : ''}`}
              >
              {/* Thumbnail / Header */}
              <div
                className={`h-56 sm:h-48 bg-gradient-to-br ${p.bg} flex items-center justify-center relative overflow-hidden shrink-0`}
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-30 md:opacity-20"
                  style={{
                    background: `radial-gradient(circle at center, ${p.color}, transparent 70%)`,
                  }}
                />
                <span
                  className="text-9xl sm:text-8xl font-black relative z-10 select-none"
                  style={{ color: p.color, textShadow: `0 0 50px ${p.color}` }}
                >
                  {p.letter}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 relative flex flex-col flex-grow">
                {p.topProject && (
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center justify-center border bg-blue-900/40 border-blue-500/50 text-blue-400"
                  >
                    Top Project
                  </div>
                )}
                <h3 className="text-white font-bold text-xl mb-1">{p.title}</h3>
                <p className="text-sm mb-3 font-semibold" style={{ color: p.color }}>
                  {p.subtitle}
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {p.description}
                </p>
                <div className="mb-6 space-y-2">
                  {p.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-6 border-t border-white/5 gap-6">
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-blue-900/30 text-blue-300 text-[11px] font-medium border border-blue-800/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5 items-center justify-between sm:justify-end border-t sm:border-none border-white/5 pt-4 sm:pt-0">
                    <span className="sm:hidden text-gray-500 text-xs font-medium uppercase tracking-widest">Links</span>
                    <div className="flex gap-5">
                      {p.github && (
                        <motion.a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-gray-400 hover:text-blue-400 transition-colors shrink-0"
                          title="Source Code"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {p.contactSource && (
                        <button 
                          onClick={() => alert("Please contact the owner directly for the source code of this project.")}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-gray-400 hover:text-purple-400 transition-colors shrink-0"
                          title="Contact owner for source code"
                        >
                          <Github size={20} className="opacity-50" />
                        </button>
                      )}
                      {p.download && (
                        <motion.a
                          href={p.download}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-500/10 text-green-400 hover:text-green-300 transition-colors shrink-0"
                          title="Download APK"
                        >
                          <Download size={20} />
                        </motion.a>
                      )}
                      {p.demo && (
                        <motion.a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 hover:text-blue-300 transition-colors shrink-0"
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 rounded-full bg-slate-900/60 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 transition-all duration-500 z-30 hover:bg-blue-500 hover:text-white hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hidden sm:flex"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 rounded-full bg-slate-900/60 border border-white/10 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 transition-all duration-500 z-30 hover:bg-blue-500 hover:text-white hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
