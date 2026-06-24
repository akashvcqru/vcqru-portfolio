'use client';

import { User } from 'lucide-react';

export default function FinalExperienceFooter() {
  return (
    <div className="bg-surface relative z-10">
      
      {/* 1. Final Vision Section */}
      <div 
        className="py-24 w-full flex flex-col justify-center items-center relative overflow-hidden px-6 md:px-12 bg-surface"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.04)_0%,transparent_80%)] pointer-events-none" />

        <div className="max-w-5xl w-full text-center relative z-10 space-y-8">
          <span className="font-sans text-xs tracking-[0.3em] text-accent font-bold uppercase block mb-4">
            Section 11 — Vision
          </span>

          <h3
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-text leading-[1.1] max-w-4xl mx-auto uppercase"
          >
            Building Future-Ready Enterprises Through Technology Leadership
          </h3>

          <p className="font-sans text-sm sm:text-base text-secondary-text leading-relaxed font-normal max-w-2xl mx-auto">
            Combining technology, strategy, operations, and innovation to create scalable business ecosystems that drive sustainable growth.
          </p>

          <div className="w-16 h-0.5 bg-accent mx-auto mt-8" />
        </div>
      </div>

      {/* 2. Minimal Credentials Footer */}
      <footer className="relative bg-background border-t border-accent/30 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Monogram */}
          <div className="flex items-center space-x-2 text-center">
            <span className="w-8 h-8 rounded bg-primary-text/5 border border-accent/40 flex items-center justify-center text-accent shrink-0">
              <User className="w-4 h-4 stroke-[2]" />
            </span>
            <span className="font-sans text-[10px] tracking-widest text-secondary-text font-bold uppercase">
              Pawan Singh • Executive IT Portfolio
            </span>
          </div>

          {/* Right: Copyright */}
          <p className="font-sans text-[10px] text-secondary-text font-semibold uppercase tracking-wider text-center md:text-right">
            &copy; {new Date().getFullYear()} Pawan Singh. All Rights Reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}
