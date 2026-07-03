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
      className="relative min-h-[70vh] md:min-h-screen flex items-center z-10 pt-20 md:pt-16 pb-12 md:pb-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-8 md:gap-12 py-4 md:py-8 min-h-fit md:min-h-[calc(100vh-64px)]">

          {/* Right — Image (Moved above text for mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center h-[300px] sm:h-[400px] md:h-[650px] lg:h-[800px] order-first lg:order-last w-full"
          >
            {/* Circular glow - scaled down for mobile */}
            <div
              className="absolute"
              style={{
                width: "min(var(--glow-size), 85vw)",
                height: "min(var(--glow-size), 85vw)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow:
                  "0 0 0 2px rgba(59,130,246,0.6), 0 0 40px 10px rgba(59,130,246,0.4), 0 0 80px 20px rgba(29,78,216,0.25)",
              }}
            />
            <style jsx>{`
              div {
                --glow-size: 240px;
              }
              @media (min-width: 768px) {
                div {
                  --glow-size: 380px;
                }
              }
              @media (min-width: 1024px) {
                div {
                  --glow-size: 550px;
                }
              }
            `}</style>

            {/* Image container - scaled down for mobile */}
            <div
              className="relative z-10 w-[220px] h-[280px] sm:w-[260px] sm:h-[330px] md:w-[450px] md:h-[580px] lg:w-[550px] lg:h-[710px]"
            >
              <Image
                src="/photo.png"
                alt="Amarnath B"
                fill
                className="object-cover object-center"
                style={{
                  filter:
                    "drop-shadow(0 0 15px rgba(59,130,246,0.3))",
                }}
                priority
              />
              {/* Line under photo */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[500%] h-[2px]"
                style={{
                  background: "linear-gradient(to right, transparent, rgba(59,130,246,0.8), transparent)",
                  boxShadow: "0 0 8px rgba(59,130,246,0.5)",
                }}
              />
            </div>
          </motion.div>

          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 self-center text-center lg:text-left w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-gray-300"
            >
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400 animate-pulse" />
              Tech Enthusiast & Coder
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Amarnath </span>
                <span className="text-blue-400 glow-text">B</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-2xl font-semibold text-blue-400"
            >
              Turning Ideas into Impactful Solutions
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I build web applications, real-time systems, and digital solutions using modern AI-powered development tools. I am passionate about technology and creating intuitive user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 md:pt-0"
            >
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Amarnath_B_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-5 py-3.5 md:py-3 border border-transparent bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              >
                <Download size={18} />
                Download Resume
              </motion.a>

              <div className="flex gap-3">
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 md:py-3 border border-blue-500/50 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-blue-900/20 transition-all duration-200"
                >
                  <FolderOpen size={18} />
                  Projects
                </motion.button>

                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=amarmicrosoft2021@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 md:py-3 border border-transparent bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                >
                  <Mail size={18} />
                  Contact
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 md:pt-2"
            >
              <span className="hidden sm:inline text-gray-500 text-sm">Follow Me</span>
              {[
                { icon: MapPin, href: "#", label: "Location" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/amarnath2007", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/da_matrix_404?igsh=MWpvbW15NXU4MG5sbA==", label: "Instagram" },
                { icon: Github, href: "https://github.com/Amarnath2007", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-blue-900/20 border border-blue-800/40 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>


  );
}
