"use client";

import { motion } from "framer-motion";
import { Code2, Monitor, Terminal, Zap } from "lucide-react";

export default function BentoGrid() {
  const cards = [
    { 
      title: "Full-Stack System Architecture", 
      icon: <Terminal className="w-5 h-5 text-studio-cobalt" />, 
      size: "md:col-span-2",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      alt: "Complex architectural ceiling lines representing system architecture"
    },
    { 
      title: "60fps Interaction", 
      icon: <Zap className="w-5 h-5 text-studio-cobalt" />, 
      size: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      alt: "Linear geometric slats catching light to represent kinetic motion"
    },
    { 
      title: "Responsive Fluid Viewports", 
      icon: <Monitor className="w-5 h-5 text-studio-cobalt" />, 
      size: "md:col-span-1",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      alt: "Repeating geometric windows shifting in perspective"
    },
    { 
      title: "Clean Semantic Implementations", 
      icon: <Code2 className="w-5 h-5 text-studio-cobalt" />, 
      size: "md:col-span-2",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      alt: "Perfect, ultra-clean raw concrete intersecting lines"
    },
  ];

  return (
    <section id="works-section" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`group relative bg-white/[0.01] border border-white/10 rounded-[24px] p-6 backdrop-blur-md min-h-[220px] flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all duration-500 ${card.size}`}
          >
            {/* Architectural Background Image Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[24px]">
              <img 
                src={card.image} 
                alt={card.alt} 
                className="w-full h-full object-cover opacity-15 mix-blend-luminosity group-hover:opacity-25 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              {/* Radial Vignette to keep text readable against images */}
              <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/70 to-transparent" />
            </div>

            {/* Icon Block */}
            <div className="relative z-10 p-3 bg-studio-bg/80 border border-white/5 rounded-xl w-fit backdrop-blur-md shadow-sm">
              {card.icon}
            </div>

            {/* Title Block */}
            <h4 className="relative z-10 text-lg font-light text-studio-ice tracking-tight mt-12 group-hover:text-white transition-colors duration-300">
              {card.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}