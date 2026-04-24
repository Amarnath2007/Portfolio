"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center overflow-hidden pt-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-[1.5px] w-full relative"
          style={{
            background: "linear-gradient(to right, transparent, #0A66C2 20%, #00CFFF 50%, #0A66C2 80%, transparent)",
          }}
        >
          {/* Subtle Glow */}
          <div 
            className="absolute inset-0 blur-[6px] opacity-60"
            style={{
              background: "linear-gradient(to right, transparent, #0A66C2 20%, #00CFFF 50%, #0A66C2 80%, transparent)",
            }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 w-1/2"
            style={{
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
