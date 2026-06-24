'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Landmark, Network, ShieldCheck, MapPin, Users } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PatanjaliTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title scale and reveal animation
      gsap.fromTo(
        titleRef.current,
        { scale: 0.8, opacity: 0, y: 100 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );

      const mm = gsap.matchMedia();

      // Desktop: Clean staggered entrance animation (keeping them aligned in a row)
      mm.add("(min-width: 1024px)", () => {
        const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Mobile/Tablet: Standard slide/fade-in without unequal parallax stacking
      mm.add("(max-width: 1023px)", () => {
        const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
        cards.forEach((card) => {
          if (card) {
            gsap.fromTo(
              card,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="patanjali"
      ref={containerRef}
      className="py-20 md:py-28 bg-surface relative overflow-hidden"
    >
      {/* Background design accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,168,128,0.06),transparent_80%)]" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col space-y-3 mb-16 text-center items-center">
          <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase">
            Section 05
          </span>
          <h2
            ref={titleRef}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-text max-w-5xl tracking-tight leading-none"
          >
            Orchestrating the Patanjali Digital Transformation
          </h2>
          <p className="font-sans text-xs uppercase tracking-wider text-secondary-text font-bold mt-2">
            A Case Study in Scale, Speed, and Governance
          </p>
          <div className="w-16 h-0.5 bg-accent mt-4" />
        </div>
 
        {/* Narrative Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-text leading-snug">
              Unifying a highly diversified business empire with a single source of enterprise truth.
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-sm md:text-base text-secondary-text leading-relaxed font-normal">
              As Head of IT and Enterprise Architecture, my mandate was to design and deploy a unified technology core capable of supporting Patanjali Group’s hyper-scale growth. We replaced fragmented systems with an integrated infrastructure linking offices, distribution hubs, and agricultural nodes.
            </p>
          </div>
        </div>
 
        {/* Three Layered/Parallax Storytelling Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative items-start min-h-[500px]">
          {/* Card 1: Core Scale */}
          <div
            ref={card1Ref}
            className="p-6 xl:p-10 rounded-2xl bg-background border border-accent/30 shadow-sm hover:border-accent/55 hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/30 flex items-center justify-center text-accent mb-8 transition-colors duration-300 group-hover:bg-accent/10">
                <Landmark className="w-6 h-6" />
              </div>
              <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                Operational Magnitude
              </h4>
              <h3 className="font-display text-2xl md:text-3xl lg:text-[clamp(1.1rem,1.7vw,1.75rem)] font-bold text-primary-text mb-4 whitespace-nowrap">
                ₹1,000+ Cr Scale
              </h3>
              <p className="font-sans text-xs text-secondary-text leading-relaxed font-normal">
                Architected enterprise structures supporting business operations valued at over ₹1,000 Cr, ensuring zero database latency and high transaction integrity.
              </p>
            </div>
            <div className="pt-6 border-t border-accent/10 mt-6 flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-text">
              <span>15 ERP Rollouts</span>
              <span>13+ Divisions</span>
            </div>
          </div>
 
          {/* Card 2: Core Platform Stack */}
          <div
            ref={card2Ref}
            className="p-6 xl:p-10 rounded-2xl bg-background border border-accent/30 shadow-sm hover:border-accent/55 hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/30 flex items-center justify-center text-accent mb-8 transition-colors duration-300 group-hover:bg-accent/10">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                Systems & Data Core
              </h4>
              <h3 className="font-display text-2xl md:text-3xl lg:text-[clamp(1.1rem,1.7vw,1.75rem)] font-bold text-primary-text mb-4 whitespace-nowrap">
                SAP + Oracle + Postgres
              </h3>
              <p className="font-sans text-xs text-secondary-text leading-relaxed font-normal">
                Unifying high-volume transactional workloads under robust database clustering. We consolidated massive legacy tables into active-active clusters with high replication failovers.
              </p>
            </div>
            <div className="pt-6 border-t border-accent/10 mt-6 flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-text">
              <span>Relational DBs</span>
              <span>Hybrid Cloud Hosting</span>
            </div>
          </div>
 
          {/* Card 3: Enterprise Modules */}
          <div
            ref={card3Ref}
            className="p-6 xl:p-10 rounded-2xl bg-background border border-accent/30 shadow-sm hover:border-accent/55 hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/30 flex items-center justify-center text-accent mb-8 transition-colors duration-300 group-hover:bg-accent/10">
                <Network className="w-6 h-6" />
              </div>
              <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                Unified Ecosystem
              </h4>
              <h3 className="font-display text-2xl md:text-3xl lg:text-[clamp(1.1rem,1.7vw,1.75rem)] font-bold text-primary-text mb-4 whitespace-nowrap">
                DMS, HRMS & GPS
              </h3>
              <p className="font-sans text-xs text-secondary-text leading-relaxed font-normal">
                Connecting corporate leadership with active distribution pipelines: real-time Distribution Management Systems (DMS), custom Sales Force Automation portals, HRMS, and automated vehicle GPS logistics tracking.
              </p>
            </div>
            <div className="pt-6 border-t border-accent/10 mt-6 flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-text">
              <span>Geo-fenced Fleet</span>
              <span>Change Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
