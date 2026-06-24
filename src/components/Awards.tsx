'use client';

import { useRef, useEffect } from 'react';
import { Trophy, Award, ShieldCheck } from 'lucide-react';

interface AwardItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const awardsData: AwardItem[] = [
  {
    title: 'SAP ACE Award',
    issuer: 'SAP India Corporate Panel',
    year: '2016',
    description: 'Awarded for "Best Enterprise ERP Implementation & IT Transformation Journey" across agro-industrial scale manufacturing nodes.',
    icon: Trophy
  },
  {
    title: 'Leadership Recognition',
    issuer: 'IT Executive Roundtable',
    year: '2021',
    description: 'Honored for digital change management, aligning 100+ cross-functional team members, engineers, and consultants under centralized IT frameworks.',
    icon: Award
  },
  {
    title: 'Enterprise Contributions',
    issuer: 'Corporate Security Roundtable',
    year: '2024',
    description: 'Conferred for deployment of disaster recovery standards and virtualized cloud server nodes, saving 18% in baseline operational overheads.',
    icon: ShieldCheck
  }
];

export default function Recognition() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, awardsData.length);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section 
      id="awards" 
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/4 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col space-y-3 mb-16">
          <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase">
            Section 08
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-text tracking-tight leading-none">
            Recognition
          </h2>
          <div className="w-16 h-0.5 bg-accent mt-4" />
        </div>

        {/* Luxury Certificate Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {awardsData.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                className="spotlight-row relative p-8 rounded-2xl bg-surface border border-accent/30 shadow-sm hover:shadow-md hover:border-accent/45 transition-all duration-300 flex flex-col justify-between overflow-hidden group select-none min-h-[300px]"
              >
                {/* Spotlight background glow layer */}
                <div 
                  className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle 180px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(197, 168, 128, 0.08) 0%, transparent 80%)'
                  }}
                />

                {/* Inner dashed certificate boundary border */}
                <div className="absolute inset-2 border border-dashed border-accent/10 rounded-xl pointer-events-none group-hover:border-accent/25 transition-colors duration-500" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-start justify-between">
                    <span className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[9px] font-sans font-bold text-accent tracking-widest uppercase bg-accent/5 px-2.5 py-1 rounded-full border border-accent/10">
                      {award.year}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] font-sans font-bold text-secondary-text tracking-widest uppercase block">
                      {award.issuer}
                    </span>
                    <h3 className="font-display text-lg font-bold text-primary-text leading-tight uppercase tracking-wide">
                      {award.title}
                    </h3>
                    <p className="font-sans text-xs text-secondary-text leading-relaxed font-normal pt-2">
                      {award.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-accent/10 mt-6 relative z-10 flex items-center justify-between text-[8px] font-sans font-bold uppercase tracking-widest text-accent/70">
                  <span>Certificate Validated</span>
                  <span>•</span>
                  <span>Honor Roll</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
