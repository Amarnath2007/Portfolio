"use client";

import { motion } from "framer-motion";
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
    title: "Core Competencies",
    icon: "🧠",
    skills: ["Problem Solving", "Data Structures", "Algorithms", "AI Tools", "Debugging"],
    color: "#fb923c",
    bg: "#431407"
  }
];

export default function Skills() {
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-default hover:-translate-y-2 transition-transform duration-300 h-full"
            >
              {/* Category Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 shadow-lg"
                style={{ backgroundColor: category.bg }}
              >
                <span style={{ color: category.color }}>{category.icon}</span>
              </div>

              {/* Category Title */}
              <h3 className="text-white font-bold text-lg mb-4 w-full pb-3 border-b border-white/10 shrink-0">
                {category.title}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-2.5 w-full">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
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
      <SectionDivider />
    </section>
  );
}
