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
        const { data } = supabase.storage.from("resume").getPublicUrl("Amar_Resume.pdf");
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
              I build web applications, real-time systems, and digital solutions using modern AI-powered development tools. Possessing strong leadership, teamwork, and problem-solving skills, I am passionate about technology and creating intuitive user experiences while continuously expanding my software development expertise.
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
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(79, 70, 229, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 border border-transparent bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold text-white shadow-[0_0_12px_rgba(79,70,229,0.4)] transition-all duration-200"
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
                { icon: Linkedin, href: "https://www.linkedin.com/in/amarnath-b-b7b79b39a/", label: "LinkedIn" },
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
            className="relative flex justify-center items-center h-[500px] sm:h-[650px] lg:h-[800px]" // Increased container height to fit larger image
          >
            {/* Proportional increase of the outer circular glow (420 -> 550) */}
            <div
              className="absolute"
              style={{
                width: "min(550px, 85vw)",
                height: "min(550px, 85vw)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow:
                  "0 0 0 3px rgba(59,130,246,0.8), 0 0 60px 15px rgba(59,130,246,0.5), 0 0 120px 30px rgba(29,78,216,0.35)",
              }}
            />

            {/* Proportional increase of the inner gradient (300 -> 390) */}
            <div
              className="absolute"
              style={{
                width: "min(390px, 60vw)",
                height: "min(390px, 60vw)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(29,78,216,0.1) 50%, transparent 75%)",
                filter: "blur(20px)",
              }}
            />

            {/* Increased image container size (420x540 -> 550x710) while maintaining aspect ratio and centering */}
            <div
              className="relative z-10"
              style={{ 
                width: "min(550px, 85vw)", 
                height: "min(710px, 110vw)" 
              }}
            >
              <Image
                src="/photo.png"
                alt="Amarnath B"
                fill
                className="object-cover object-center"
                style={{
                  filter:
                    "drop-shadow(0 0 20px rgba(59,130,246,0.4)) drop-shadow(0 0 50px rgba(29,78,216,0.3))",
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
