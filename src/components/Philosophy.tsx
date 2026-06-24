'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const statements = [
  "Technology Should Enable Growth.",
  "Innovation Requires Vision.",
  "Transformation Starts With People.",
  "Operational Excellence Creates Scale."
];

export default function LeadershipPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const statementRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    statementRefs.current = statementRefs.current.slice(0, statements.length);

    const ctx = gsap.context(() => {
      // Build scroll-pinned timeline for statements
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: pinRef.current,
          pinSpacing: false,
        },
      });

      statements.forEach((_, index) => {
        if (index === 0) return; // The first statement is visible initially
        
        const previousText = statementRefs.current[index - 1];
        const currentText = statementRefs.current[index];

        if (previousText && currentText) {
          tl.to(previousText, {
            opacity: 0,
            scale: 0.95,
            y: -50,
            duration: 1,
            pointerEvents: 'none',
          })
          .fromTo(currentText,
            { opacity: 0, scale: 1.05, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 1 },
            '-=0.2'
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-background z-10">
      {/* Pinned statement frame */}
      <div 
        ref={pinRef}
        className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-6 md:px-12"
      >
        {/* Abstract lines representing philosophy */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

        <div className="max-w-6xl w-full text-center relative z-10">
          <span className="font-sans text-xs tracking-[0.3em] text-accent font-bold uppercase block mb-8">
            Section 10 — Leadership Philosophy
          </span>

          <div className="relative h-[250px] sm:h-[300px] flex items-center justify-center">
            {statements.map((statement, index) => (
              <h3
                key={index}
                ref={(el) => { statementRefs.current[index] = el; }}
                className={`absolute font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary-text leading-none select-none max-w-5xl transition-all duration-300 ${
                  index === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {statement}
              </h3>
            ))}
          </div>

          <div className="w-16 h-0.5 bg-accent mx-auto mt-8" />
        </div>
      </div>
    </div>
  );
}
