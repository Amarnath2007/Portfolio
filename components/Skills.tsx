"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionDivider from "./SectionDivider";

const skills = [
  { name: "C", level: 90, icon: "C", color: "#60a5fa", bg: "#1e3a5f" },
  { name: "C++", level: 85, icon: "C++", color: "#818cf8", bg: "#2d1f5e" },
  { name: "Python", level: 85, icon: "🐍", color: "#34d399", bg: "#064e3b" },
  { name: "Java", level: 88, icon: "☕", color: "#fb923c", bg: "#431407" },
  { name: "Problem Solving", level: 92, icon: "🧠", color: "#f472b6", bg: "#500724" },
  { name: "AI Tools", level: 88, icon: "🤖", color: "#a78bfa", bg: "#2e1065" },
  { name: "Debugging", level: 87, icon: "🔍", color: "#38bdf8", bg: "#082f49" },
  { name: "UI/UX", level: 75, icon: "🎨", color: "#fb7185", bg: "#4c0519" },
];

function SkillCard({ skill, delay }: { skill: typeof skills[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-6 min-w-[160px] flex-shrink-0 cursor-default"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
        style={{ backgroundColor: skill.bg }}
      >
        <span style={{ color: skill.color }}>{skill.icon}</span>
      </div>

      {/* Name */}
      <p className="text-white font-semibold text-sm mb-3">{skill.name}</p>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-blue-950 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: dir === "right" ? 200 : -200, behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            — MY EXPERTISE —
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Skills</h2>
        </motion.div>

        {/* Scrollable cards */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#081428] border border-blue-900/40 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={i * 0.08} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#081428] border border-blue-900/40 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
