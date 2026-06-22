"use client";

import { motion } from "framer-motion";
import { Award, Compass, Globe } from "lucide-react";

export default function AboutCreative() {
  return (
    <section className="w-full max-w-6xl mx-auto px-2 py-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10 relative">
      
      {/* Left Column: Your Stylized Profile Frame */}
      <div className="md:col-span-5 flex justify-center relative group">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-studio-cobalt/20 rounded-[32px] blur-xl group-hover:bg-studio-cobalt/30 transition-all duration-500" />
        
        {/* Frame container designed to hold a photo of your face */}
        <div className="w-full max-w-[360px] aspect-[4/5] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 rounded-[32px] p-4 backdrop-blur-md relative z-10 overflow-hidden">
          <div className="w-full h-full bg-studio-bg/60 rounded-[22px] overflow-hidden relative flex items-center justify-center border border-white/5">
            
            {/* Architectural studio background placeholder */}
            <img 
      src="/aluka profile.png" 
      alt="Aluka - Lead Creative Director" 
      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
    />

            {/* Lower badge overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-studio-bg/80 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-xs font-medium text-studio-ice tracking-wider">ALUKA</p>
                <p className="text-[10px] text-studio-muted uppercase tracking-widest font-mono">Principal / Director</p>
              </div>
              <Globe className="w-4 h-4 text-studio-cobalt" />
            </div>

          </div>
        </div>
      </div>

      {/* Right Column: Narrative Biography */}
      <div className="md:col-span-7 flex flex-col justify-center">
        <span className="text-xs tracking-[0.3em] text-studio-cobalt font-mono font-semibold uppercase block mb-3">
          Behind The Form
        </span>
        
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-studio-ice mb-6 leading-tight">
          Meet the Lead Creative Director
        </h2>
        
        <p className="text-studio-muted font-light leading-relaxed mb-6 text-sm md:text-base">
          Led by Aluka, our practice approaches architecture not just as a mechanical discipline, but as a deep visual conversation between physical weight, geometry, and environment. We engineer custom premium residential and digital spaces from scratch, ensuring clean architectural structures match up with flawless execution.
        </p>

        {/* Micro Credential Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6 mt-2">
          <div className="flex gap-3 items-start">
            <div className="p-2 bg-studio-cobalt/10 border border-studio-cobalt/20 rounded-lg text-studio-cobalt mt-0.5">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-studio-ice">Bespoke Curation</h4>
              <p className="text-xs text-studio-muted mt-0.5">Custom configurations designed end-to-end to serve unique, premium aesthetics.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="p-2 bg-studio-cobalt/10 border border-studio-cobalt/20 rounded-lg text-studio-cobalt mt-0.5">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-studio-ice">Full-Stack Execution</h4>
              <p className="text-xs text-studio-muted mt-0.5">Bridging structural blueprint ideation seamlessly into functional realities.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}