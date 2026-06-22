"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, DollarSign, Send } from "lucide-react";

interface BookingPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingPanel({ isOpen, onClose }: BookingPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Blurred Backdrop Mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 pointer-events-auto"
          />

          {/* Right Sliding Panel Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-studio-bg/95 border-l border-white/10 backdrop-blur-2xl z-50 p-6 md:p-10 flex flex-col justify-between overflow-y-auto"
          >
            {/* Panel Top Actions Header */}
            <div>
              <div className="flex justify-between items-center mb-10">
                <div>
                  <span className="text-xs tracking-[0.3em] text-studio-cobalt font-mono font-semibold uppercase block">
                    PROJECT DISCOVERY
                  </span>
                  <h3 className="text-xl md:text-2xl font-light text-studio-ice mt-1">Book a Consultation</h3>
                </div>
                <button 
                  onClick={onClose}
                  className="p-3 bg-white/[0.03] hover:bg-studio-cobalt border border-white/10 hover:border-studio-cobalt text-studio-ice rounded-full transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Consultation Input Fields Form */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-studio-muted font-mono mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Aluka Dev"
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-studio-cobalt rounded-xl px-4 py-3.5 text-sm text-studio-ice outline-none transition-colors placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-studio-muted font-mono mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="you@domain.com"
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-studio-cobalt rounded-xl px-4 py-3.5 text-sm text-studio-ice outline-none transition-colors placeholder:text-white/20"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-studio-muted font-mono mb-2">Estimated Budget Range</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-studio-muted" />
                    <select className="w-full bg-white/[0.02] border border-white/10 focus:border-studio-cobalt rounded-xl pl-10 pr-4 py-3.5 text-sm text-studio-ice outline-none transition-colors appearance-none cursor-pointer">
                      <option className="bg-studio-bg" value="basic">Select your range</option>
                      <option className="bg-studio-bg" value="premium">₦5,000,000 - ₦10,000,000</option>
                      <option className="bg-studio-bg" value="elite">₦10,000,000 - ₦25,000,000</option>
                      <option className="bg-studio-bg" value="masterpiece">₦25,000,000+ Corporate Space</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-studio-muted font-mono mb-2">Project Vision Brief</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your architectural form requirements, site context, or digital interaction needs..."
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-studio-cobalt rounded-xl px-4 py-3.5 text-sm text-studio-ice outline-none transition-colors placeholder:text-white/20 resize-none"
                  />
                </div>
              </form>
            </div>

            {/* Panel Submit Actions Button Footer */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button 
                onClick={onClose}
                className="w-full bg-studio-cobalt hover:bg-studio-cobaltDark text-white font-medium text-xs uppercase tracking-widest py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-studio-cobalt/20"
              >
                <Send className="w-4 h-4" />
                Submit Project Brief
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}