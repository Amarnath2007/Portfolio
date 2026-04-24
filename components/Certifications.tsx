"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { supabase } from "@/lib/supabase";

const initialCerts = [
  {
    title: "HDCA Programming Certificate",
    issuer: "CSC (Computer Science Corporation)",
    fileName: "Hdca.pdf",
    description: "Comprehensive programming certification covering hardware and software fundamentals alongside core coding skills.",
    color: "#60a5fa",
    bg: "#0c1a40",
  },
  {
    title: "Introduction to C",
    issuer: "NPTEL",
    fileName: "Nptel.pdf",
    description: "Officially certified by NPTEL, India's premier e-learning platform backed by IITs and IISc, covering C programming fundamentals.",
    color: "#34d399",
    bg: "#064e3b",
  },
  {
    title: "SEO for WordPress",
    issuer: "Udemy",
    fileName: "seo-udemy.pdf",
    description: "Completed training on search engine optimization techniques, web content strategy, and WordPress website management.",
    color: "#f472b6",
    bg: "#4c0519",
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x",
    fileName: "B10x.pdf",
    description: "Successfully completed an intensive workshop on AI tools, focusing on productivity enhancement and advanced generative AI workflows.",
    color: "#a78bfa",
    bg: "#2e1065",
  },
];

export default function Certifications() {
  const [certs, setCerts] = useState(initialCerts);

  useEffect(() => {
    async function fetchCerts() {
      try {
        // Try to fetch from database table first
        const { data, error } = await supabase
          .from("certificates")
          .select("*")
          .limit(4);
        
        if (data && data.length > 0) {
          setCerts(data);
        } else {
          // If no DB table, enrich initialCerts with Supabase storage URLs
          const enrichedCerts = await Promise.all(initialCerts.map(async (cert) => {
            const { data: urlData } = supabase.storage
              .from("certifications")
              .getPublicUrl(cert.fileName);
            return { ...cert, file_url: urlData.publicUrl };
          }));
          setCerts(enrichedCerts);
        }
      } catch (err) {
        console.error("Error fetching homepage certs:", err);
      }
    }
    fetchCerts();
  }, []);
  return (
    <section id="certifications" className="relative z-10 py-24">
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
            — MY CREDENTIALS —
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Certifications</h2>
        </motion.div>

        {/* Horizontally Scrollable Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-8 px-1 items-stretch [&::-webkit-scrollbar]:hidden ms-auto" style={{ scrollbarWidth: 'none' }}>
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-7 group flex-shrink-0 w-full sm:w-96 scroll-snap-align-start flex flex-col"
              >
                {/* Badge Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: cert.bg }}
                >
                  <BadgeCheck size={24} style={{ color: cert.color }} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base mb-1">{cert.title}</h3>
                <p className="text-sm font-medium mb-4" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{cert.description}</p>

                {/* Link */}
                <div className="mt-auto pt-5 border-t border-gray-800/50">
                  <a 
                    href={(cert as any).file_url || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={12} />
                    <span>View Certificate</span>
                  </a>
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
