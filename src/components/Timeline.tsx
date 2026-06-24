'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ExperienceBlock {
  company: string;
  role: string;
  period: string;
  motto: string;
  desc: string;
}

const experienceData: ExperienceBlock[] = [
  {
    company: 'Patanjali Group',
    role: 'Head - IT & Enterprise Architecture',
    period: '2017 - Present',
    motto: 'Scaling Enterprise Ecosystems',
    desc: 'Centralized core databases across 15+ plants. Led the migration to clustered SAP platforms, overseeing unified distribution networks and SCM channels.'
  },
  {
    company: 'Paayas Milk Producer Co.',
    role: 'Chief Information Officer (CIO) / GM (IT)',
    period: '2013 - 2017',
    motto: 'Digitizing Rural Economies',
    desc: 'Deployed agritech telemetry terminals and remote weights connected directly to Oracle databases, automating disbursements and transparency.'
  },
  {
    company: 'Jay Ushin Ltd.',
    role: 'Head - IT & Systems',
    period: '2009 - 2013',
    motto: 'Optimizing Supply Chain Flow',
    desc: 'Consolidated local server structures into centralized virtualized data centers. Deployed distribution pipelines to reduce warehouse overheads.'
  },
  {
    company: 'CEBBCO',
    role: 'Manager - IT & Systems',
    period: '2005 - 2009',
    motto: 'Enforcing Business Continuity',
    desc: 'Designed secondary hot-failover disaster recovery hubs. Built custom biometric attendance logs and internal payroll calculators.'
  },
  {
    company: 'M&M Machine Craft',
    role: 'Assistant Manager - IT',
    period: '2001 - 2005',
    motto: 'Automating Inventory Logs',
    desc: 'Supervised client-server configurations and custom SQL server billing structures, replacing paper audits with automated workflows.'
  },
  {
    company: 'MAS Callnet India',
    role: 'Systems Engineer / Team Lead',
    period: '1999 - 2001',
    motto: 'Securing High-Uptime Cores',
    desc: 'Engineered physical servers, local router configurations, and database query security rules for 24/7 client operations.'
  }
];

export default function ExperienceJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, experienceData.length);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Pin container and perform premium stacked card swap
      mm.add("(min-width: 1024px)", () => {
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=2400', // scroll duration length
            scrub: true,
            pin: pinRef.current,
            pinSpacing: true,
          },
        });

        // Set initial card deck layout with scale and shift offsets
        cards.forEach((card, index) => {
          const content = card.querySelector('.card-content');
          gsap.set(card, {
            y: index * 12,
            scale: 1 - index * 0.04,
            opacity: index === 0 ? 1 : index === 1 ? 0.75 : index === 2 ? 0.45 : 0,
            zIndex: cards.length - index,
            transformOrigin: 'bottom center',
            pointerEvents: index === 0 ? 'auto' : 'none',
          });
          if (content) {
            gsap.set(content, {
              opacity: index === 0 ? 1 : 0,
            });
          }
        });

        // Animate sequential card swipes and deck promotions
        cards.forEach((card, index) => {
          if (index === cards.length - 1) return; // Last card stays centered at the back

          const content = card.querySelector('.card-content');
          const nextCard = cards[index + 1];
          const nextContent = nextCard ? nextCard.querySelector('.card-content') : null;

          // 1. Swiped card flyaway to top with rotation
          tl.to(card, {
            y: -150,
            opacity: 0,
            scale: 0.9,
            rotate: index % 2 === 0 ? -4 : 4,
            duration: 1,
            pointerEvents: 'none',
          });
          if (content) {
            tl.to(content, {
              opacity: 0,
              duration: 0.3,
            }, '-=1');
          }

          // 2. Promote next card to top slot
          if (nextCard) {
            tl.to(nextCard, {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              pointerEvents: 'auto',
            }, '-=0.9');
          }
          if (nextContent) {
            tl.to(nextContent, {
              opacity: 1,
              duration: 0.5,
            }, '-=0.7');
          }

          // 3. Promote second card in deck to visible backup slot
          const afterNextCard = cards[index + 2];
          if (afterNextCard) {
            tl.to(afterNextCard, {
              y: 12,
              scale: 0.96,
              opacity: 0.75,
              duration: 1,
            }, '-=0.9');
          }

          // 4. Reveal third card into peeking backup slot
          const fourthCard = cards[index + 3];
          if (fourthCard) {
            tl.to(fourthCard, {
              y: 24,
              scale: 0.92,
              opacity: 0.45,
              duration: 1,
            }, '-=0.9');
          }
        });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="overview" className="bg-surface relative lg:min-h-[300vh]">
      {/* Visual background guide line */}
      <div className="absolute left-[8%] inset-y-0 w-[1px] bg-accent/10 pointer-events-none" />

      {/* Desktop: Pinned Card Stack Frame */}
      <div 
        ref={pinRef}
        className="hidden lg:flex h-screen w-full items-center justify-center relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Fixed Title Narrative */}
          <div className="col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase block">
              Section 04 — Journey
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-primary-text leading-[1.1] max-w-md uppercase">
              Transformation Journey
            </h2>
            <div className="w-16 h-0.5 bg-accent" />
            <p className="font-sans text-xs uppercase tracking-wider text-secondary-text font-bold">
              Scroll down to swap through the leadership milestones.
            </p>
          </div>

          {/* Right Column: Layered Piled Cards */}
          <div className="col-span-7 h-[480px] relative flex items-center pl-8 border-l border-accent/10 select-none">
            {experienceData.map((block, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="absolute left-8 right-0"
                style={{
                  zIndex: experienceData.length - index,
                }}
              >
                <div
                  className="w-full h-full rounded-2xl border border-accent/30 bg-[#FAF9F6] shadow-lg p-10 md:p-12 flex flex-col justify-between"
                  style={{
                    boxShadow: '0 10px 40px -15px rgba(15, 23, 42, 0.04)'
                  }}
                >
                  <div className="card-content w-full h-full flex flex-col justify-between">
                    {/* Card Counter & Period */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-[10px] tracking-widest text-accent font-bold uppercase">
                        Role {index + 1} of {experienceData.length}
                      </span>
                      <span className="font-display text-lg font-bold text-accent tracking-widest">
                        {block.period}
                      </span>
                    </div>

                    {/* Company, Role & Mandate Stack (Full Width) */}
                    <div className="space-y-3 mb-6">
                      <span className="font-sans text-[10px] tracking-widest text-accent font-bold uppercase block">
                        {block.company}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-primary-text leading-tight uppercase">
                        {block.role}
                      </h3>
                      <div className="inline-block whitespace-nowrap">
                        <div className="px-3 py-1.5 rounded-md bg-accent/5 border border-accent/20">
                          <span className="font-sans text-xs font-bold text-accent uppercase tracking-wider block">
                            Mandate: {block.motto}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-accent/10 mb-6" />

                    {/* Description */}
                    <p className="font-sans text-sm text-secondary-text leading-relaxed font-normal">
                      {block.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Mobile/Tablet: Regular vertical scroll list */}
      <div className="flex lg:hidden flex-col w-full max-w-2xl mx-auto px-6 py-20 space-y-12 bg-surface text-primary-text">
        {/* Intro */}
        <div className="space-y-4">
          <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase block">
            Section 04 — Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-primary-text uppercase leading-none">
            Transformation Journey
          </h2>
          <div className="w-16 h-0.5 bg-accent" />
        </div>

        {/* Timeline list */}
        <div className="relative border-l border-accent/30 ml-3 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((block, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              <div className="space-y-4 rounded-2xl border border-accent/30 bg-[#FAF9F6] shadow-sm p-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] tracking-widest text-accent font-bold uppercase">
                    Role {index + 1} of {experienceData.length}
                  </span>
                  <span className="font-display text-sm font-bold text-accent">
                    {block.period}
                  </span>
                </div>

                <div className="w-8 h-0.5 bg-accent" />

                <h3 className="font-display text-xl font-bold tracking-tight text-primary-text uppercase">
                  {block.role}
                </h3>

                <div className="flex flex-col space-y-2">
                  <p className="font-sans text-xs font-bold text-accent uppercase tracking-wider">
                    {block.company}
                  </p>
                  <div className="px-3 py-1.5 rounded-md bg-accent/5 border border-accent/20 inline-block self-start text-[9px] sm:text-xs font-sans font-bold text-accent uppercase tracking-wide whitespace-nowrap max-w-full overflow-x-auto">
                    Mandate: {block.motto}
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed font-normal">
                  {block.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
