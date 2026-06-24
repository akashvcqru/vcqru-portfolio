'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Database, 
  Layers, 
  GitMerge, 
  ShieldCheck, 
  Truck, 
  Compass, 
  Users 
} from 'lucide-react';

interface SnapshotDomain {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const snapshotDomains: SnapshotDomain[] = [
  {
    title: "Digital Transformation",
    desc: "Unifying operational core networks, deploying agritech telemetry systems, and replacing manual legacy overheads to accelerate business scaling.",
    icon: Zap
  },
  {
    title: "SAP & Oracle ERP",
    desc: "Architecting core landscape consolidations, directing 15+ multi-plant rollouts, and standardizing master data ledgers for unified financials.",
    icon: Database
  },
  {
    title: "Enterprise Architecture",
    desc: "Engineering active-active clustered database infrastructures, hybrid cloud hostings, and hot-failover disaster recovery protocols.",
    icon: Layers
  },
  {
    title: "Business Process Excellence",
    desc: "Designing custom billing automations, auditing logistics workflows, and accelerating corporate financial reconciliation schedules.",
    icon: GitMerge
  },
  {
    title: "IT Governance",
    desc: "Enforcing info-sec protocols, aligning operations to ISO 27001 standards, and establishing enterprise risk compliance strategies.",
    icon: ShieldCheck
  },
  {
    title: "Supply Chain Digitization",
    desc: "Deploying tanker fleet telemetry sensors, route tracking dashboards, and distribution management systems to eliminate shrinkage.",
    icon: Truck
  },
  {
    title: "Technology Strategy",
    desc: "Aligning multi-million rupee IT investments with corporate growth milestones, digital change management, and technology roadmaps.",
    icon: Compass
  },
  {
    title: "Operational Leadership",
    desc: "Directing 100+ technology professionals, managing board-level stakeholder mandates, and managing vendors at scale.",
    icon: Users
  }
];

export default function LeadershipSnapshot() {
  return (
    <section 
      id="snapshot" 
      className="py-20 md:py-28 bg-surface relative overflow-hidden"
    >
      {/* Background design accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 text-center items-center">
          <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase">
            Section 03
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-text tracking-tight leading-none">
            Leadership Snapshot
          </h2>
          <div className="w-16 h-0.5 bg-accent mt-4" />
          <p className="font-sans text-xs uppercase tracking-wider text-secondary-text max-w-md mt-6 font-bold">
            Core domains of technology governance, systems design, and business alignment.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {snapshotDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl bg-background border border-accent/30 flex flex-col justify-between hover:border-accent/55 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual side accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-accent/20 group-hover:bg-accent transition-colors duration-300" />
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <span className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary-text leading-tight">
                      {domain.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed font-normal pt-1">
                    {domain.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
