"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, FolderOpen, MapPin, Linkedin, Instagram, Github, Mail } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function Hero() {
  const [resumeUrl, setResumeUrl] = useState("/resume.pdf");

  useEffect(() => {
    if (supabase && supabase.storage) {
      try {
        const { data } = supabase.storage.from("resume").getPublicUrl("Resume.pdf");
        if (data?.publicUrl) {
          setResumeUrl(data.publicUrl);
        }
      } catch (err) {
        console.error("Error getting resume URL:", err);
      }
    }
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center z-10 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-8 min-h-[calc(100vh-64px)]">


          {/* Left Content */}
          <div className="space-y-6 self-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 rounded-full px-4 py-2 text-sm text-gray-300"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Tech Enthusiast & Coder
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Amarnath </span>
                <span className="text-blue-400 glow-text">B</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl font-semibold text-blue-400"
            >
              Turning Ideas into Impactful Solutions
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I specialize in building scalable web applications, robust real-time systems, and intuitive user experiences. Passionate about writing clean code and solving complex problems with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Amarnath_B_Resume.pdf"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 border border-transparent bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              >
                <Download size={18} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 border border-blue-500/50 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-900/20 transition-all duration-200"
              >
                <FolderOpen size={18} />
                View Projects
              </motion.button>

              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amarmicrosoft2021@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52, 211, 153, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 border border-emerald-500/40 rounded-xl text-sm font-semibold text-emerald-400 hover:text-white hover:border-emerald-400 hover:bg-emerald-900/20 transition-all duration-200"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4 pt-2"
            >
              <span className="text-gray-500 text-sm">Follow Me</span>
              {[
                { icon: MapPin, href: "#", label: "Location" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/amarnath-b-88b907252/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/its_me_amar2007?utm_source=qr&igsh=MWt2NzJnMDMwejh6OA==", label: "Instagram" },
                { icon: Github, href: "https://github.com/Amarnath2007", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-900/20 border border-blue-800/40 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex justify-center items-center h-[600px]"
          >
            <div
              className="absolute"
              style={{
                width: 420,
                height: 420,
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow:
                  "0 0 0 3px rgba(59,130,246,0.8), 0 0 60px 15px rgba(59,130,246,0.5), 0 0 120px 30px rgba(29,78,216,0.35)",
              }}
            />

            <div
              className="absolute"
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(29,78,216,0.15) 50%, transparent 75%)",
                filter: "blur(25px)",
              }}
            />

            <div
              className="relative z-10"
              style={{ width: 420, height: 540 }}
            >
              <Image
                src="/photo.png"
                alt="Amarnath B"
                fill
                className="object-cover object-center"
                style={{
                  filter:
                    "drop-shadow(0 0 30px rgba(59,130,246,0.7)) drop-shadow(0 0 80px rgba(29,78,216,0.5))",
                }}
                priority
              />
              {/* Line under photo */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500%] h-[2px]"
                style={{
                  background: "linear-gradient(to right, transparent, rgba(59,130,246,0.8), transparent)",
                  boxShadow: "0 0 12px rgba(59,130,246,0.6)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>


  );
}
