"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Loader2, ExternalLink, ImageIcon, ZoomIn, X, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import StarsBg from "@/components/StarsBg";
import Footer from "@/components/Footer";

interface AchievementFile {
  id: string;
  name: string;
  url: string;
  type: "image" | "pdf";
}

const CATEGORY_NAMES: Record<string, string> = {
  intercollege: "Inter-College Wins",
  hackathon: "Hackathon Prizes",
  events: "College Wins (PSG CAS)",
};

export default function AchievementGallery() {
  const params = useParams();
  const category = params.category as string;
  const [files, setFiles] = useState<AchievementFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const { data, error } = await supabase.storage
          .from("achievements")
          .list(category);

        if (error) throw error;

        if (data) {
          const formattedFiles = data.map((file) => {
            const isPdf = file.name.toLowerCase().endsWith(".pdf");
            const { data: urlData } = supabase.storage
              .from("achievements")
              .getPublicUrl(`${category}/${file.name}`);
            
            return {
              id: file.id || file.name,
              name: file.name,
              url: urlData.publicUrl,
              type: isPdf ? ("pdf" as const) : ("image" as const),
            };
          });
          setFiles(formattedFiles);
        }
      } catch (err) {
        console.error("Error fetching achievement files:", err);
      } finally {
        setLoading(false);
      }
    }

    if (category) {
      fetchFiles();
    }
  }, [category]);

  const handleView = (file: AchievementFile) => {
    if (file.type === "image") {
      setSelectedImage(file.url);
    } else {
      window.open(file.url, "_blank");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#020818] text-white">
      <StarsBg />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        {/* Back Link */}
        <Link 
          href="/#achievements"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Achievements
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            {CATEGORY_NAMES[category] || "Achievements"} <span className="text-blue-400">Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A collection of certificates and captures from my journey in {CATEGORY_NAMES[category]?.toLowerCase() || "this category"}.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-500 animate-pulse">Loading certificates...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {files.map((file, i) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden group border border-blue-900/30 flex flex-col"
              >
                {/* Preview Area */}
                <div 
                  className="relative h-56 w-full bg-blue-900/5 cursor-zoom-in overflow-hidden"
                  onClick={() => handleView(file)}
                >
                  {file.type === "image" ? (
                    <>
                      <Image 
                        src={file.url} 
                        alt={file.name} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="text-white w-8 h-8" />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 group-hover:text-blue-400 transition-colors">
                      <FileText size={48} className="mb-3 opacity-20 group-hover:opacity-100" />
                      <span className="text-xs font-medium">PDF Certificate</span>
                    </div>
                  )}
                </div>

                {/* Info & Button */}
                <div className="p-5 flex flex-col gap-4">
                  <p className="text-sm font-medium text-gray-300 truncate" title={file.name}>
                    {file.name}
                  </p>
                  
                  <button
                    onClick={() => handleView(file)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    {file.type === "image" ? "View Image" : "Open PDF"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && files.length === 0 && (
          <div className="text-center py-20 bg-blue-900/5 rounded-3xl border border-dashed border-blue-900/20">
            <ImageIcon size={48} className="mx-auto mb-4 text-gray-600 opacity-20" />
            <p className="text-gray-500 italic">No files found for this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[85vh]"
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
                  alt="Full Achievement"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
