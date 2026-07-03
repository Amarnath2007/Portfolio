"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Star, Zap, ChevronLeft, ChevronRight, ArrowRight, X, ImageIcon, ZoomIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionDivider from "./SectionDivider";
import { supabase } from "@/lib/supabase";

const achievements = [
  {
    icon: Trophy,
    iconColor: "#60a5fa",
    iconBg: "#0c1a40",
    title: "Inter-College Wins",
    highlight: "🏆 5+ Wins",
    subtitle: "Various Institutions",
    category: "intercollege",
    description:
      "Successfully competed and secured top positions in symposiums and technical fests held at various reputed colleges.",
  },
  {
    icon: Award,
    iconColor: "#f59e0b",
    iconBg: "#1c1200",
    title: "College Wins",
    highlight: "🏆 5+ Wins",
    subtitle: "PSG CAS (Internal)",
    category: "events",
    description:
      "Consistent performance in intra-college events, spanning debugging, logic-building, and technical paper presentations.",
  },
  {
    icon: Zap,
    iconColor: "#818cf8",
    iconBg: "#1e1b4b",
    title: "Hackathon Prizes",
    subtitle: "Innovation & Coding",
    category: "hackathon",
    description:
      "Building functional prototypes and solving real-world problems under pressure. Secured multiple podium finishes.",
  },
];

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<Record<string, string>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      const categories = ["intercollege", "hackathon", "events"];
      const newImages: Record<string, string> = {};

      for (const cat of categories) {
        try {
          const { data, error } = await supabase.storage.from("achievements").list(cat);
          if (error) continue;

          if (data && data.length > 0) {
            const { data: urlData } = supabase.storage
              .from("achievements")
              .getPublicUrl(`${cat}/${data[0].name}`);
            newImages[cat] = urlData.publicUrl;
          }
        } catch (err) {
          console.error(`Error fetching images for ${cat}:`, err);
        }
      }
      setImages(newImages);
    }
    fetchImages();
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
    }
  };

  return (
    <section id="achievements" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Container */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              — MY JOURNEY —
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Achievements</h2>
          </motion.div>

          {/* View All Button Removed from here */}
        </div>

        {/* Centered Cards Grid */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card relative rounded-2xl md:rounded-3xl p-8 sm:p-10 w-[95%] sm:w-[350px] mx-auto md:mx-0 cursor-default flex flex-col group justify-between overflow-hidden border border-white/5"
              >
                {/* Floating Badge */}
                {item.highlight && (
                  <div 
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center justify-center border"
                    style={{ 
                      backgroundColor: `${item.iconColor}15`,
                      borderColor: `${item.iconColor}40`,
                      color: item.iconColor,
                      boxShadow: `0 0 15px ${item.iconColor}30`
                    }}
                  >
                    {item.highlight}
                  </div>
                )}

                <div className="pr-12 md:pr-0">
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      <Icon size={24} style={{ color: item.iconColor }} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl leading-tight pr-2">{item.title}</h3>
                      <p className="text-sm font-semibold" style={{ color: item.iconColor }}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">{item.description}</p>
                </div>

                <Link href={`/achievements/${item.category}`} className="w-full">
                  <motion.button
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: "rgba(59, 130, 246, 0.15)",
                      borderColor: "#3b82f6"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-bold transition-all duration-300"
                  >
                    View Certificates
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={selectedImage}
                  alt="Achievement Full"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionDivider />
    </section>
  );
}
