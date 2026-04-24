"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionDivider from "./SectionDivider";

const stats = [
  { value: "5+", label: "Projects Done" },
  { value: "3+", label: "Years in Tech" },
  { value: "10+", label: "Events Won" },
  { value: "3+", label: "Certifications" },
];

const details = [
  { label: "Name:", value: "Amarnath B" },
  { label: "Location:", value: "Coimbatore, Tamil Nadu" },
  { label: "Email:", value: "amarmicrosoft2021@gmail.com" },
  { label: "College:", value: "PSG CAS" },
  { label: "Availability:", value: "Open to Opportunities", highlight: true },
];

const tags = ["C", "C++", "Python", "Java", "Problem Solving", "AI Tools", "Debugging"];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24">
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
            — WHO I AM —
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">About</h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Left Column */}
          <div>
            {/* Avatar + Name */}
            <div className="flex items-start gap-5 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-500/50 flex-shrink-0 animate-pulse-glow">
                <Image
                  src="/photo.jpg"
                  alt="Amarnath B"
                  fill
                  className="object-cover object-top"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src =
                      "https://via.placeholder.com/160x160/081428/3b82f6?text=AB";
                  }}
                />
              </div>
              <div>
                <p className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-1">
                  ABOUT ME
                </p>
                <h3 className="text-2xl font-bold text-white">
                  I&apos;m Amarnath
                </h3>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I&apos;m a BCA student at PSG CAS, Coimbatore — an enthusiastic coder
              passionate about competitive programming, hackathons, and tech
              innovation. With 15+ competition wins and a strong interest in AI
              tools, I combine creative thinking with technical execution to build
              meaningful, impactful solutions.
            </p>

            {/* Currently Learning */}
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm mb-3">Currently Learning 🚀</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Advanced System Design"].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, borderColor: "rgba(52,211,153,0.6)" }}
                    className="px-3 py-1 rounded-lg bg-emerald-900/30 border border-emerald-800/40 text-emerald-300 text-xs font-medium cursor-default transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.05, borderColor: "rgba(96,165,250,0.6)" }}
                  className="px-3 py-1 rounded-lg bg-blue-900/30 border border-blue-800/40 text-blue-300 text-xs font-medium cursor-default transition-all"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Details */}
            <div className="space-y-4">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="text-gray-500 text-sm w-28 flex-shrink-0 pt-0.5">
                    {d.label}
                  </span>
                  <span
                    className={`text-sm font-medium break-all ${d.highlight ? "text-emerald-400" : "text-white"
                      }`}
                  >
                    {d.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-[#050d1f] border border-blue-900/30">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center py-3"
                >
                  <div className="text-3xl font-black text-blue-400 glow-text">
                    {s.value}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </section>
  );
}
