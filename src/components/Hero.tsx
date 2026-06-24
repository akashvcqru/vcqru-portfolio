'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Track mouse movements for interactive parallax background
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 50;
      const y = (clientY / window.innerHeight - 0.5) * 50;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // GSAP ScrollTrigger to fade out Hero text as user scrolls down
    const ctx = gsap.context(() => {
      gsap.to(titleContainerRef.current, {
        y: -100,
        opacity: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom 40%',
          scrub: true,
        },
      });
    }, containerRef);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  const name = "PAWAN SINGH";
  const subtitle = "Transforming Enterprises Through Technology, Strategy & Leadership";
  const details = "20+ Years Driving Enterprise Scale Digital Transformation.";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden px-6 md:px-12 pt-20"
    >
      {/* Premium Background Grid & Architect Lines */}
      <div className="absolute inset-0 grid-bg-lines opacity-75 pointer-events-none z-0 animate-grid-reveal" />
      <div className="absolute inset-0 grid-bg-dots opacity-80 pointer-events-none z-0" />

      {/* 1. Mouse Reactive Parallax Background */}
      <div
        ref={backgroundRef}
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        {/* Soft abstract vectors */}
        <div className="absolute top-1/4 left-[15%] w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-[15%] w-[500px] h-[500px] bg-accent/6 rounded-full filter blur-3xl" />
        
        {/* Floating Abstract Line Paths */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="30%" r="120" stroke="#EFBF04" strokeWidth="0.5" fill="none" />
          <circle cx="85%" cy="65%" r="180" stroke="#EFBF04" strokeWidth="0.5" fill="none" />
          <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#EFBF04" strokeWidth="0.3" strokeDasharray="5,5" />
          <line x1="5%" y1="15%" x2="95%" y2="85%" stroke="#EFBF04" strokeWidth="0.3" />
        </svg>
      </div>

      {/* 2. Editorial Text layout */}
      <div 
        ref={titleContainerRef}
        className="max-w-6xl w-full text-center relative z-10 flex flex-col items-center space-y-8"
      >
        <div className="flex flex-col space-y-4 items-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="font-sans text-xs tracking-[0.3em] text-accent font-bold uppercase"
          >
            Chief Information Officer & Digital Strategy Leader
          </motion.span>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-accent" 
          />
        </div>

        {/* Massive Typography: Pawan Singh Character reveal */}
        <h1 className="font-display text-5xl sm:text-8xl md:text-9xl font-bold tracking-tight text-primary-text leading-none select-none flex flex-wrap justify-center gap-x-4 md:gap-x-6">
          <span className="inline-block whitespace-nowrap">
            {"PAWAN".split("").map((char, index) => (
              <motion.span
                key={`pawan-${index}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="inline-block whitespace-nowrap">
            {"SINGH".split("").map((char, index) => (
              <motion.span
                key={`singh-${index}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: (index + 6) * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subheadline reveal */}
        <div className="max-w-3xl overflow-hidden py-1">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-primary-text leading-snug"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Additional profile details reveal */}
        <div className="max-w-xl overflow-hidden">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base text-secondary-text leading-relaxed font-normal"
          >
            {details}
          </motion.p>
        </div>
      </div>

      {/* 3. Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none z-10">
        <span className="font-sans text-[9px] tracking-[0.3em] text-secondary-text font-bold uppercase">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-accent/40 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-accent"
          />
        </div>
      </div>
    </section>
  );
}
