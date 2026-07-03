"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionDivider from "./SectionDivider";

const skillCategories = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["C", "C++", "Python", "Java"],
    color: "#60a5fa",
    bg: "#1e3a5f"
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    color: "#f472b6",
    bg: "#500724"
  },
  {
    title: "Backend & Database",
    icon: "🗄️",
    skills: ["Node.js", "SQL", "Supabase", "File Handling"],
    color: "#34d399",
    bg: "#064e3b"
  },
  {
    title: "Application Development",
    icon: "📱",
    skills: ["Flutter", "Kotlin", "Java"],
    color: "#818cf8",
    bg: "#1e1b4b"
  },
  {
    title: "Core Competencies",
    icon: "🧠",
    skills: ["Problem Solving", "Data Structures", "Algorithms", "AI Tools", "Debugging"],
    color: "#fb923c",
    bg: "#431407"
  }
];

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // Handle scroll arrows visibility
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 20);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = dir === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-blue-400 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            — MY EXPERTISE —
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Skills</h2>
        </motion.div>

        {/* Categories Carousel */}
        <div className="relative group/carousel px-1">
          {/* Left Arrow */}
          <AnimatePresence>
            {showLeft && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-900/40 border border-blue-400/30 text-blue-400 flex items-center justify-center backdrop-blur-md shadow-lg shadow-blue-500/20 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <ChevronLeft size={28} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Right Arrow */}
          <AnimatePresence>
            {showRight && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-900/40 border border-blue-400/30 text-blue-400 flex items-center justify-center backdrop-blur-md shadow-lg shadow-blue-500/20 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <ChevronRight size={28} />
              </motion.button>
            )}
          </AnimatePresence>

          <div 
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 pb-10 px-4 md:px-0 scroll-smooth [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl md:rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center cursor-default hover:-translate-y-2 transition-transform duration-300 w-[85%] sm:w-[350px] md:w-[400px] flex-shrink-0 snap-center border border-white/5 min-h-[350px]"
              >
                {/* Category Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl"
                  style={{ backgroundColor: category.bg }}
                >
                  <span style={{ color: category.color }}>{category.icon}</span>
                </div>

                {/* Category Title */}
                <h3 className="text-white font-bold text-xl md:text-2xl mb-5 w-full pb-3 border-b border-white/10 shrink-0">
                  {category.title}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap justify-center gap-2.5 w-full mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl text-[13px] sm:text-sm font-bold transition-colors"
                      style={{ 
                        backgroundColor: `${category.color}15`, 
                        color: category.color,
                        border: `1px solid ${category.color}30`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
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
