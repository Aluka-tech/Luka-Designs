"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  { 
    id: "01", 
    title: "The Obsidian Pavilion", 
    location: "Tokyo, JP", 
    year: "2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
  },
  { 
    id: "02", 
    title: "Kinetic Glass Atrium", 
    location: "Copenhagen, DK", 
    year: "2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
  },
  { 
    id: "03", 
    title: "Cobalt Monolith II", 
    location: "Reykjavík, IS", 
    year: "2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
  },
  { 
    id: "04", 
    title: "The Helix Residence", 
    location: "Malibu, US", 
    year: "2026",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80"
  },
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1px)", () => {
      const pin = gsap.to(sectionRef.current, {
        x: () => -(sectionRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${sectionRef.current!.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={triggerRef} className="overflow-hidden bg-studio-bg w-full relative clear-both">
      <div 
        ref={sectionRef} 
        className="h-screen flex w-[400vw] relative flex-nowrap select-none"
      >
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="w-screen h-full flex flex-col justify-between p-8 md:p-24 relative border-r border-white/5 overflow-hidden group flex-shrink-0"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-[1.02] transition-all duration-1000 ease-out mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/60 to-transparent" />
            </div>

            <div className="absolute right-10 bottom-10 text-[22vw] font-bold text-white/[0.015] select-none font-mono leading-none z-0 pointer-events-none">
              {project.id}
            </div>

            <div className="z-10 w-full flex justify-between items-start pt-12 md:pt-0">
              <span className="text-xs tracking-[0.3em] text-studio-cobalt font-mono font-semibold uppercase">
                CASE STUDY // {project.id}
              </span>
            </div>

            <div className="z-10 max-w-4xl w-full mt-auto">
              <h2 className="text-4xl md:text-7xl font-light tracking-tight text-studio-ice mb-8 leading-tight">
                {project.title}
              </h2>
              
              <div className="flex flex-wrap gap-6 items-center border-t border-white/10 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-studio-muted font-mono">Location</p>
                  <p className="text-sm text-studio-ice font-medium mt-1">{project.location}</p>
                </div>
                <div className="ml-6">
                  <p className="text-[10px] uppercase tracking-widest text-studio-muted font-mono">Year</p>
                  <p className="text-sm text-studio-ice font-medium mt-1">{project.year}</p>
                </div>
                <button className="ml-auto flex items-center gap-2 text-xs uppercase tracking-widest bg-studio-cobalt/10 hover:bg-studio-cobalt border border-studio-cobalt/20 hover:border-studio-cobalt text-studio-ice px-5 py-3 rounded-full transition-all group">
                  Explore Architecture 
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}