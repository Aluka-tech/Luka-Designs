"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto pt-6 pb-16 px-4 md:px-8 flex flex-col items-start justify-center">
      
      {/* BRAND HEADER LINE */}
      <div className="w-full flex justify-between items-center mb-16 pb-6 border-b border-white/5">
        <span className="text-sm font-medium tracking-[0.2em] text-studio-ice font-mono">
          LUKA DESIGNS
        </span>
        <span className="text-[10px] tracking-widest text-studio-muted font-mono uppercase">
          [ NG // 2026 ]
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-studio-cobalt animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-studio-muted uppercase">
            Available for Select Commissions
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-light tracking-tight text-studio-ice max-w-4xl leading-[1.1]">
          Engineering elite digital <br />
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-studio-ice via-white to-studio-cobalt">
            architectural spaces.
          </span>
        </h1>
        
        <p className="text-sm md:text-base font-light text-studio-muted max-w-xl leading-relaxed">
          A premium full-stack studio building high-performance modern web platforms with deep materiality, 60fps interaction logic, and custom fluid grids.
        </p>
      </motion.div>
    </section>
  );
}