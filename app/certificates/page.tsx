"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import StarsBg from "@/components/StarsBg";
import Footer from "@/components/Footer";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  file_url: string;
  category?: string;
  color?: string;
  bg?: string;
}

const FALLBACK_CERTS = [
  {
    id: "1",
    title: "HDCA Programming Certificate",
    issuer: "CSC (Computer Science Corporation)",
    file_url: "",
    fileName: "Hdca.pdf",
    color: "#60a5fa",
    bg: "#0c1a40",
  },
  {
    id: "2",
    title: "Introduction to C",
    issuer: "NPTEL",
    file_url: "",
    fileName: "Nptel.pdf",
    color: "#34d399",
    bg: "#064e3b",
  },
  {
    id: "3",
    title: "SEO for WordPress",
    issuer: "Udemy",
    file_url: "",
    fileName: "seo-udemy.pdf",
    color: "#f472b6",
    bg: "#4c0519",
  },
  {
    id: "4",
    title: "AI Tools Workshop",
    issuer: "Be10x",
    file_url: "",
    fileName: "B10x.pdf",
    color: "#a78bfa",
    bg: "#2e1065",
  },
];

export default function CertificatesPage() {
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCerts() {
      try {
        // Try to fetch from database table first
        const { data, error } = await supabase
          .from("certificates")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        
        if (data && data.length > 0) {
          setCerts(data);
        } else {
          // Fallback: Check storage
          const { data: storageData, error: storageError } = await supabase
            .storage
            .from("certifications")
            .list();

          if (storageError) throw storageError;

          if (storageData && storageData.length > 0) {
            const formattedCerts = storageData.map((file) => ({
              id: file.id || file.name,
              title: file.name.replace(".pdf", ""),
              issuer: "External Certification",
              file_url: supabase.storage.from("certifications").getPublicUrl(file.name).data.publicUrl,
              color: "#60a5fa",
              bg: "#0c1a40"
            }));
            setCerts(formattedCerts);
          } else {
            // Ultimate Fallback: Use hardcoded list and try to get URLs
            const enrichedFallbacks = FALLBACK_CERTS.map((cert) => ({
              ...cert,
              file_url: supabase.storage.from("certifications").getPublicUrl(cert.fileName).data.publicUrl
            }));
            setCerts(enrichedFallbacks);
          }
        }
      } catch (err) {
        console.error("Error fetching certificates:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCerts();
  }, []);

  return (
    <main className="relative min-h-screen bg-[#020818] text-white">
      <StarsBg />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        {/* Back Link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            My <span className="text-blue-400">Certifications</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A verified collection of my technical skills, workshops, and inter-college achievements.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-500 animate-pulse">Fetching your achievements...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-2xl p-7 group hover:border-blue-500/50 transition-all border border-blue-900/30"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: cert.bg || "#0c1a40" }}
                >
                  <BadgeCheck size={24} style={{ color: cert.color || "#60a5fa" }} />
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{cert.title}</h3>
                <p className="text-sm font-medium mb-4 text-blue-400">
                  {cert.issuer}
                </p>

                <a
                  href={cert.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-600 hover:text-white transition-all"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && certs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 italic">No certificates found. Add some to your Supabase storage!</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
