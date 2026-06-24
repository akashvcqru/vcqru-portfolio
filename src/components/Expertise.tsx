'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, FileText, Server, Activity, Settings, Layout } from 'lucide-react';

interface EcosystemNode {
  label: string;
  angle: number;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const ecosystemNodes: EcosystemNode[] = [
  { label: 'SAP ERP Systems', angle: 0, description: 'Enterprise S/4HANA migrations, custom landscape consolidations, modular ABAP custom solutions.', icon: Database },
  { label: 'Oracle Applications', angle: 51.4, description: 'R12 financials design, database architecture, multi-state supply chain integrations.', icon: Settings },
  { label: 'Cloud Infrastructure', angle: 102.8, description: 'Hybrid private clouds, virtualized hardware setups, datacenter migration strategies.', icon: Server },
  { label: 'Information Security', angle: 154.2, description: 'ISO 27001 standard alignments, disaster recovery hot-failovers, security threat audits.', icon: Shield },
  { label: 'IT Strategy & Governance', angle: 205.6, description: 'Corporate compliance, executive budget alignment, vendor negotiations, IT policy formulation.', icon: FileText },
  { label: 'Enterprise Architecture', angle: 257, description: 'High-availability cluster database layouts, scalable systems orchestration, core network structures.', icon: Layout },
  { label: 'Process Automation', angle: 308.4, description: 'RPA scripts, automated ledger integrations, edge agritech telemetry database APIs.', icon: Activity },
];

export default function LeadershipEcosystem() {
  const [hoveredNode, setHoveredNode] = useState<EcosystemNode | null>(null);
  const [windowWidth, setWindowWidth] = useState(1200);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWindowWidth(containerRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const centerX = 350;
  const centerY = 300;
  const radius = windowWidth < 768 ? 160 : 220;

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="py-20 md:py-28 bg-ivory relative overflow-hidden"
    >
      {/* Background soft grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col space-y-3 mb-16 text-center items-center">
          <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase">
            Section 07
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-text tracking-tight leading-none">
            Leadership Ecosystem
          </h2>
          <div className="w-16 h-0.5 bg-accent mt-4" />
          <p className="font-sans text-xs uppercase tracking-wider text-secondary-text max-w-md mt-6 font-bold">
            Hover over nodes in the digital infrastructure network to inspect domain competencies.
          </p>
        </div>

        {/* Desktop Layout (Interactive Network SVG) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Details panel */}
          <div className="col-span-4 space-y-6">
            <div className="glass-panel rounded-2xl border border-accent/30 p-8 min-h-[320px] flex flex-col justify-between relative overflow-hidden bg-surface">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
              
              <div>
                <span className="font-sans text-[10px] tracking-widest text-accent font-bold uppercase">
                  Selected Domain
                </span>
                <h3 className="font-display text-2xl font-bold text-primary-text mt-3 transition-all duration-300">
                  {hoveredNode ? hoveredNode.label : 'Technology Leadership'}
                </h3>
                <p className="font-sans text-sm text-secondary-text leading-relaxed font-normal mt-4 min-h-[100px] transition-all duration-300">
                  {hoveredNode 
                    ? hoveredNode.description 
                    : 'A holistic mapping of strategic technology directives, governance frameworks, and modular implementations refined over 20+ years of leading enterprise scale systems transformations.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Network SVG */}
          <div className="col-span-8 flex justify-center items-center relative select-none">
            <div className="w-full max-w-[700px] aspect-[700/600] relative">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 700 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Draw connection lines */}
                {ecosystemNodes.map((node, index) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const nodeX = centerX + radius * Math.cos(rad);
                  const nodeY = centerY + radius * Math.sin(rad);
                  const isHovered = hoveredNode?.label === node.label;

                  return (
                    <g key={`line-${index}`}>
                      <motion.line
                        x1={centerX}
                        y1={centerY}
                        x2={nodeX}
                        y2={nodeY}
                        stroke={isHovered ? '#D4AF37' : '#EFBF04'}
                        strokeWidth={isHovered ? 2.5 : 1.2}
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        animate={isHovered ? { strokeDashoffset: [0, -10] } : { strokeDashoffset: 0 }}
                        transition={{
                          pathLength: { duration: 1.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] },
                          strokeDashoffset: { repeat: Infinity, duration: 0.8, ease: "linear" }
                        }}
                        className="opacity-70"
                      />
                      {isHovered && (
                        <circle 
                          cx={nodeX} 
                          cy={nodeY} 
                          r="30" 
                          fill="none" 
                          stroke="#D4AF37" 
                          strokeWidth="0.5" 
                          strokeOpacity="0.4" 
                          className="animate-[ping_2s_linear_infinite]" 
                        />
                      )}
                    </g>
                  );
                })}

                {/* 2. Central Core Node */}
                <g 
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredNode(null)}
                  onClick={() => setHoveredNode(null)}
                >
                  <circle 
                    cx={centerX} 
                    cy={centerY} 
                    r="45" 
                    fill="#F7F5F0" 
                    stroke="#D4AF37" 
                    strokeWidth="2" 
                  />
                  <circle 
                    cx={centerX} 
                    cy={centerY} 
                    r="38" 
                    fill="#0F172A" 
                  />
                  <text 
                    x={centerX} 
                    y={centerY - 5} 
                    textAnchor="middle" 
                    fill="#FAF9F6" 
                    fontSize="10" 
                    fontWeight="bold" 
                    fontFamily="var(--font-sora)"
                    letterSpacing="0.05em"
                  >
                    IT CORE
                  </text>
                  <text 
                    x={centerX} 
                    y={centerY + 9} 
                    textAnchor="middle" 
                    fill="#D4AF37" 
                    fontSize="8" 
                    fontWeight="bold" 
                    fontFamily="var(--font-sora)"
                    letterSpacing="0.1em"
                  >
                    STRATEGY
                  </text>
                </g>

                {/* 3. Surrounding Connected Nodes */}
                {ecosystemNodes.map((node, index) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const nodeX = centerX + radius * Math.cos(rad);
                  const nodeY = centerY + radius * Math.sin(rad);
                  const Icon = node.icon;
                  const isHovered = hoveredNode?.label === node.label;

                  return (
                    <g 
                      key={`node-${index}`}
                      className="cursor-pointer group"
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setHoveredNode(hoveredNode?.label === node.label ? null : node)}
                    >
                      <circle
                        cx={nodeX}
                        cy={nodeY}
                        r="20"
                        fill={isHovered ? '#0F172A' : '#FFFFFF'}
                        stroke="#EFBF04"
                        strokeWidth={isHovered ? 2.5 : 1}
                        className="transition-all duration-300"
                      />
                      
                      {/* Icon overlay */}
                      <g transform={`translate(${nodeX - 10}, ${nodeY - 10})`}>
                        <Icon size={20} className={`${isHovered ? 'text-accent' : 'text-primary-text'} transition-colors duration-300`} />
                      </g>

                      {/* Tag Label */}
                      <text
                        x={nodeX}
                        y={nodeY + 34}
                        textAnchor="middle"
                        fill={isHovered ? '#0F172A' : '#475569'}
                        fontSize="9"
                        fontWeight={isHovered ? 'bold' : 'normal'}
                        fontFamily="var(--font-inter)"
                        letterSpacing="0.05em"
                        className="transition-all duration-300"
                      >
                        {node.label.split(" ")[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout (Modern readable competency grid) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
          {ecosystemNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-surface border border-accent/30 flex flex-col justify-between hover:border-accent/55 shadow-sm transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                <div className="space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <span className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary-text">
                      {node.label}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed font-normal pt-1">
                    {node.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
