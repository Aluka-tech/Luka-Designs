"use client";

import { motion } from "framer-motion";
import { Compass, Layers } from "lucide-react";

export default function DesignPhilosophy() {
  // Added "as const" at the end to make TypeScript happy with the ease string literal
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  } as const;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-24 bg-studio-bg border-t border-white/5">
      <motion.div {...fadeInUp} className="mb-16">
        <span className="text-xs tracking-[0.3em] text-studio-cobalt font-mono font-semibold uppercase block">
          DESIGN FRAMEWORK
        </span>
        <h2 className="text-3xl md:text-5xl font-light text-studio-ice mt-2 tracking-tight">
          Core Architectural Principles
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        {/* PILLAR 1: PRECISION MAPPING */}
        <motion.div 
          {...fadeInUp}
          className="group relative bg-white/[0.02] border border-white/10 rounded-[32px] p-6 md:p-8 flex flex-col justify-between overflow-hidden backdrop-blur-md"
        >
          {/* Spatial Interior Image Mask */}
          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 relative border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" 
              alt="Precision Mapping Minimalist Concrete Atrium Layout" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-out mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-bg/90 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 p-3 bg-studio-bg/60 border border-white/10 backdrop-blur-md rounded-xl">
              <Compass className="w-5 h-5 text-studio-cobalt" />
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-widest text-studio-muted uppercase">
              BLUEPRINT ORCHESTRATION
            </span>
            <h3 className="text-xl md:text-2xl font-light text-studio-ice mt-1 mb-4">
              Precision Mapping
            </h3>
            <p className="text-sm text-studio-muted leading-relaxed font-light">
              Every premium digital space requires a rigid structural foundation before visual layers are applied. Precision Mapping is our systematic process of plotting out interaction touchpoints, viewport constraints, and programmatic fluid grids. We design layouts from scratch, treating the browser canvas exactly like a structural site blueprint.
            </p>
          </div>
        </motion.div>

        {/* PILLAR 2: MATERIALITY */}
        <motion.div 
          {...fadeInUp}
          className="group relative bg-white/[0.02] border border-white/10 rounded-[32px] p-6 md:p-8 flex flex-col justify-between overflow-hidden backdrop-blur-md"
        >
          {/* Spatial Interior Image Mask */}
          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 relative border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" 
              alt="Materiality Luxury Dark Interior Glassmorphism" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-out mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-bg/90 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 p-3 bg-studio-bg/60 border border-white/10 backdrop-blur-md rounded-xl">
              <Layers className="w-5 h-5 text-studio-cobalt" />
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-widest text-studio-muted uppercase">
              VISUAL TACTILITY
            </span>
            <h3 className="text-xl md:text-2xl font-light text-studio-ice mt-1 mb-4">
              Materiality
            </h3>
            <p className="text-sm text-studio-muted leading-relaxed font-light">
              In physical architecture, form is dictated by stone, raw concrete, steel, and glass. In our digital practice, we translate these materials into high-end UI components. Through custom glassmorphism, multi-layered depth maps, 60fps micro-interactions, and high-contrast dark color palettes, we give digital surfaces a tactile weight you can almost feel.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}