'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface JourneyRole {
  title: string;
  period: string;
  focus: string;
  summary: string;
}

const roles: JourneyRole[] = [
  {
    title: "Software Engineer",
    period: "1999 - 2001",
    focus: "Client-Server Network Operations & Configurations",
    summary: "Initiated professional trajectory at MAS Callnet India. Managed physical server hubs, network routing tables, and client-server configurations to maintain 99.8% customer service uptime."
  },
  {
    title: "Assistant Manager IT",
    period: "2001 - 2005",
    focus: "Relational Database Design & Billing Automation",
    summary: "Led inventory database migrations and software query development at M&M Machine Craft, replacing manual paper records with SQL Server billing systems, accelerating audits by 40%."
  },
  {
    title: "AGM IT",
    period: "2005 - 2009",
    focus: "Disaster Recovery Planning & Custom HRMS Modules",
    summary: "Promoted to Assistant General Manager (IT) at CEBBCO. Engineered hot-failover secondary recovery centers, geofenced chassis barcodes, and built custom employee audit platforms."
  },
  {
    title: "Senior Manager IT",
    period: "2009 - 2013",
    focus: "Infrastructure Consolidation & DMS Integration",
    summary: "Directed IT systems and hardware virtualizations at Jay Ushin. Mapped dealer distribution pipelines and consolidated isolated databases into a virtualized central data center."
  },
  {
    title: "Head IT",
    period: "2013 - 2017",
    focus: "CIO Directive & Telemetry Milk Procurement Systems",
    summary: "Appointed CIO / GM IT at Paayas Milk Producer Company. Structured telemetry collection weigh-nodes and implemented Oracle ERP ledger modules, linking 100,000+ farmers."
  },
  {
    title: "Digital Transformation Leader",
    period: "2017 - Present",
    focus: "Hyper-Scale ERP Consolidation & Enterprise Architectures",
    summary: "Serving as Head IT & Enterprise Architect for Patanjali Group. Overseeing S/4HANA migrations across 15+ plants, directing database replication clusters for ₹1000+ Cr business operations."
  }
];

export default function TheStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const roleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    roleRefs.current = roleRefs.current.slice(0, roles.length);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Only run pinned fade transition on desktop (lg and up)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            pin: pinRef.current,
            pinSpacing: true,
          },
        });

        // Initialize first dot
        gsap.set('.timeline-dot-0', { backgroundColor: '#EFBF04', scale: 1.25 });

        // Animate role states sequentially with a pure, smooth opacity fade
        roles.forEach((_, index) => {
          if (index === 0) return; // Keep first role visible initially
          
          const previousRole = roleRefs.current[index - 1];
          const currentRole = roleRefs.current[index];

          if (previousRole && currentRole) {
            tl.to(previousRole, {
              opacity: 0,
              duration: 1,
              pointerEvents: 'none',
            })
            .to(`.timeline-dot-${index - 1}`, { backgroundColor: '#FFFFFF', scale: 1, duration: 0.3 }, '-=0.8')
            .to(`.timeline-dot-${index}`, { backgroundColor: '#EFBF04', scale: 1.25, duration: 0.3 }, '-=0.8')
            .fromTo(currentRole,
              { opacity: 0 },
              { opacity: 1, duration: 1, pointerEvents: 'auto' },
              '-=0.2'
            );
          }
        });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative lg:min-h-[450vh] bg-surface z-10">
      
      {/* Desktop Layout (Pinned Scroll Container) */}
      <div 
        ref={pinRef}
        className="hidden lg:flex h-screen w-full items-center justify-center relative overflow-hidden"
      >
        {/* Soft abstract lighting */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Fixed Title Narrative */}
          <div className="col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase block animate-pulse">
              Section 03 — The Story
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tight text-primary-text leading-[1.1] max-w-md">
              From Code to Enterprise Scale.
            </h2>
            <div className="w-16 h-0.5 bg-accent" />
            <p className="font-sans text-xs uppercase tracking-wider text-secondary-text font-bold">
              Scroll down to discover the leadership trajectory.
            </p>
          </div>

          {/* Center Column: Pinned Timeline Tracker */}
          <div className="col-span-1 h-[320px] relative flex justify-center items-center">
            <div className="absolute top-0 bottom-0 w-[1px] bg-accent/15" />
            <div className="flex flex-col justify-between items-center h-full relative z-10 py-1">
              {roles.map((_, rIndex) => (
                <div 
                  key={`dot-${rIndex}`} 
                  className={`timeline-dot-${rIndex} w-3.5 h-3.5 rounded-full border border-accent/30 bg-white transition-all duration-500 flex items-center justify-center`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/20" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Animated Layered Roles */}
          <div className="col-span-6 h-[400px] relative flex items-center pl-8 border-l border-accent/10">
            {roles.map((role, index) => (
              <div
                key={index}
                ref={(el) => { roleRefs.current[index] = el; }}
                className="absolute inset-x-0 flex flex-col justify-center space-y-4 pr-6"
                style={{ opacity: index === 0 ? 1 : 0, pointerEvents: index === 0 ? 'auto' : 'none' }}
              >
                <div className="flex items-baseline justify-between border-b border-accent/15 pb-4">
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                    Role {index + 1} of {roles.length}
                  </span>
                  <span className="font-sans text-xs font-bold text-secondary-text tracking-wider">
                    {role.period}
                  </span>
                </div>
                
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-primary-text leading-tight">
                  {role.title}
                </h3>
                
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                  {role.focus}
                </h4>
                
                <p className="font-sans text-sm sm:text-base text-secondary-text leading-relaxed font-normal">
                  {role.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Mobile/Tablet Layout (Regular vertical scroll timeline) */}
      <div className="flex lg:hidden flex-col w-full max-w-2xl mx-auto px-6 py-20 space-y-12 z-10 bg-surface text-primary-text">
        {/* Intro */}
        <div className="space-y-4">
          <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase block">
            Section 03 — The Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-primary-text uppercase leading-none">
            From Code to Enterprise Scale.
          </h2>
          <div className="w-12 h-0.5 bg-accent" />
        </div>

        {/* Timeline Cards */}
        <div className="relative border-l border-accent/15 ml-3 pl-6 sm:pl-8 space-y-12">
          {roles.map((role, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-accent">
                    Role {index + 1} of {roles.length}
                  </span>
                  <span className="font-sans text-xs font-bold text-secondary-text tracking-wider">
                    {role.period}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-text uppercase tracking-wide">
                  {role.title}
                </h3>
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-accent">
                  {role.focus}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed font-normal pt-1">
                  {role.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
