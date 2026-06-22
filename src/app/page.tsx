"use client";

import { useState } from "react";
import { LayoutGrid, Mail, Phone } from "lucide-react";

import HeroSection from "../components/HeroSection";
import BentoGrid from "../components/BentoGrid";
import DesignPhilosophy from "../components/DesignPhilosophy";
import AboutCreative from "../components/AboutCreative";
import HorizontalGallery from "../components/HorizontalGallery";
import BookingPanel from "../components/BookingPanel";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-studio-bg relative overflow-x-hidden">
      
      {/* Responsive Padded Wrapper:
        - Mobile/Tablet: smaller spacing (p-4 to p-6) and vertical layout gaps (gap-12)
        - Desktop (md and up): returns to your luxury layout style (p-8, gap-24)
      */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center p-4 sm:p-6 md:p-8 gap-12 md:gap-24">
        {/* 1. Structural Hero & Header Component */}
        <HeroSection />

        {/* 2. Portfolio Showcase Bento Grid Framework */}
        <BentoGrid />

        {/* 3. Core Philosophy: Precision Mapping & Materiality Sections */}
        <DesignPhilosophy />

        {/* 4. Architectural Director Profile Block */}
        <AboutCreative />
      </div>

      {/* 5. Smooth GSAP Pinning Horizontal Case Studies Gallery */}
      <HorizontalGallery />

      {/* SLIDING DESIGN CONSULTATION BOOKING DISCOVERY MODAL */}
      <BookingPanel isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* ==========================================
          FLOATING BOTTOM ACTIONS NAV DOCK (Responsive)
         ========================================== */}
      <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto max-w-md sm:max-w-none bg-studio-bg/60 border border-white/10 backdrop-blur-xl px-4 sm:px-6 py-3 rounded-full flex justify-around sm:justify-start items-center gap-4 sm:gap-6 shadow-2xl transition-all duration-300 hover:border-white/20">
        
        {/* Scroll action */}
        <button 
          onClick={() => {
            window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
          }}
          className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-studio-ice font-medium hover:text-studio-cobalt transition-colors group"
        >
          <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-studio-cobalt group-hover:scale-110 transition-transform" />
          Works
        </button>
        
        <div className="w-[1px] h-4 bg-white/20" />
        
        {/* Email Brief Trigger */}
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-studio-muted hover:text-studio-ice transition-colors group"
        >
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-studio-muted group-hover:text-studio-cobalt transition-colors" />
          Email
        </button>
        
        <div className="w-[1px] h-4 bg-white/20" />
        
        {/* Call Action */}
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-studio-muted hover:text-studio-ice transition-colors group"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-studio-muted group-hover:text-studio-cobalt transition-colors" />
          Call
        </button>
      </nav>

    </main>
  );
}