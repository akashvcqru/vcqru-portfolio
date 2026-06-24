'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, 
  RefreshCw, 
  Truck, 
  Network, 
  Users, 
  MapPin, 
  Award, 
  ChevronRight, 
  TrendingUp, 
  Shield, 
  Layers 
} from 'lucide-react';

interface ProjectStory {
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  challenge: string;
  implementation: string;
  outcome: string;
  businessOutcome: string;
  governanceScale: string;
  leadershipScope: string;
}

const projectsData: ProjectStory[] = [
  {
    title: 'SAP Enterprise Transformation',
    category: 'ERP Architecture & Consolidation',
    icon: Landmark,
    challenge: 'Isolated database nodes across 15+ plants led to latency, inventory synchronization gaps, and manual journal checks in Patanjali Group ledger reporting.',
    implementation: 'Centralized the data core under clustered SAP ERP instances. Built robust ABAP modules, coordinated landscape consolidations, and standardized material categorization matrices.',
    outcome: 'Unified ledger networks under a single source of truth, reducing month-end close-outs from 12 days to 3 days and saving ₹800+ Cr in operational values.',
    businessOutcome: 'Month-end close-outs reduced from 12 days to 3 days. Estimated operational savings of ₹800+ Cr.',
    governanceScale: '15+ large-scale manufacturing plants, ₹1,000+ Cr annual operations volume.',
    leadershipScope: 'Central ERP landscape consolidation, custom ABAP module standardization, database cluster replication.'
  },
  {
    title: 'Oracle ERP Rollouts',
    category: 'Financials & Supply Chain',
    icon: RefreshCw,
    challenge: 'Fragmented ledger entries and manual tracking of supply chain operations across 5 state-level operations nodes at Paayas Milk.',
    implementation: 'Designed and deployed unified Oracle Financials and SCM modules. Configured database routing nodes and integrated third-party shipping APIs with internal databases.',
    outcome: 'Unified transaction records across states, decreasing freight settlement delays by 35% and inventory overheads by 15%.',
    businessOutcome: 'Decreased freight settlement delays by 35% and reduced inventory overheads by 15%.',
    governanceScale: '5 state-level operational hubs, regional dairy logistics pipelines.',
    leadershipScope: 'Multi-state SCM & Financials module architecture, database route configuration, external APIs integration.'
  },
  {
    title: 'Supply Chain Digitization',
    category: 'Logistics Optimization',
    icon: Truck,
    challenge: 'Lack of real-time coordinate tracking and warehouse counts, leading to cargo delivery delays and stock shrinkage at depots.',
    implementation: 'Built a web-based vendor dashboard and deployed telemetry GPS units inside fleet vehicles to audit coordinates and stock levels automatically.',
    outcome: 'Optimized transit routes, resulting in a 22% reduction in delivery delay occurrences and zero cargo shrinkage.',
    businessOutcome: '22% reduction in delivery delays and eliminated stock shrinkage in transit.',
    governanceScale: 'Multi-region supply chain depots, national transport fleet logistics.',
    leadershipScope: 'Telemetry GPS core integration, custom vendor dashboard architecture, real-time inventory reconciliation.'
  },
  {
    title: 'Digital Distribution Network',
    category: 'Channel Management',
    icon: Network,
    challenge: 'Distributors had zero visibility into real-time stock levels at manufacturing hubs, causing order backlogs and distributor credit bottlenecks.',
    implementation: 'Integrated custom web APIs with internal database nodes, creating a Distribution Management System (DMS) for direct dealer inventory checkouts.',
    outcome: 'Eliminated approval bottlenecks, reducing order-to-dispatch latency by 18%.',
    businessOutcome: '18% reduction in order-to-dispatch latency, automated credit checks.',
    governanceScale: 'Pan-regional distributor network, central production hubs.',
    leadershipScope: 'DMS API gateway development, database endpoint integration, real-time transaction tracking.'
  },
  {
    title: 'Dairy Procurement Platform',
    category: 'Telemetry Agritech Integration',
    icon: Users,
    challenge: 'Manual collection logs and telemetry reading methods at rural dairy nodes generated payment delays and trust gaps among 100,000+ milk farmers.',
    implementation: 'Connected telemetry collection terminals to remote weights, sending data over high-bandwidth links directly to central database nodes.',
    outcome: 'Digitized milk collection weights and payments for 100,000+ rural farmers, securing 100% database transparency.',
    businessOutcome: '100% database transparency. Eliminated payment delays and weight discrepancies.',
    governanceScale: '100,000+ milk producers, hundreds of rural procurement weigh-centers.',
    leadershipScope: 'Edge telemetry hardware integration, database routing, rural high-bandwidth configurations.'
  },
  {
    title: 'Vehicle Tracking Systems',
    category: 'IoT Fleet Safety',
    icon: MapPin,
    challenge: 'Refrigerated milk tankers experienced undetected temperature spikes and route deviations, compromising dairy inventory quality.',
    implementation: 'Deployed GPS telemetry trackers and active temperature sensors inside cargo tankers, building real-time alert triggers using Node.js and Redis.',
    outcome: 'Zero temperature spoilage incidents recorded, route deviation incidents reduced by 85%.',
    businessOutcome: 'Zero cold-chain spoilage events, 85% drop in unauthorized route deviations.',
    governanceScale: 'Fleet-wide active telemetry deployments, real-time sensor streams.',
    leadershipScope: 'IoT hardware integration, low-latency alert microservices in Node.js and Redis.'
  },
  {
    title: 'HRMS Development',
    category: 'Enterprise Workforce Scaling',
    icon: Award,
    challenge: 'Auditing paper attendance sheets and salary disbursements for a workforce of 10,000+ was slow and prone to payroll leakage.',
    implementation: 'Designed database structures and automated biometric APIs to calculate attendance, leave logs, and salary payments.',
    outcome: 'Cut wage processing turnaround time by 45% and reduced payroll auditing leakage by 15%.',
    businessOutcome: '45% acceleration in wage processing, 15% reduction in payroll leakages.',
    governanceScale: '10,000+ corporate and industrial plant employees.',
    leadershipScope: 'Biometric API synchronization, relational database schema optimizations, custom payroll rule engines.'
  }
];

export default function EnterpriseProjects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projectsData[activeProjectIndex];

  return (
    <section 
      id="projects" 
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Subtle abstract background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase">
            Section 06
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-text tracking-tight leading-none">
            Enterprise Projects
          </h2>
          <div className="w-16 h-0.5 bg-accent mt-4" />
        </div>

        {/* Narrative Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start min-h-[500px]">
          
          {/* Left Column: Horizontal scroll tabs on mobile, Vertical Project Selector on desktop */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2.5 scrollbar-none select-none">
            {projectsData.map((project, index) => {
              const Icon = project.icon;
              const isActive = index === activeProjectIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveProjectIndex(index)}
                  className={`flex items-center justify-between p-3.5 lg:p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-surface border-accent/20 text-primary-text shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-surface/50 text-secondary-text'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-accent/10 text-accent' : 'bg-surface/80 text-secondary-text'}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-display text-xs font-bold uppercase tracking-wider">
                      {project.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-accent transition-transform duration-300 hidden lg:block ${isActive ? 'translate-x-1' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Case Details Panel */}
          <div className="lg:col-span-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProjectIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel rounded-2xl border border-accent/30 p-8 md:p-10 bg-surface flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-accent/20 pb-4 mb-6">
                    <span className="font-sans text-[10px] tracking-widest text-accent font-bold uppercase">
                      {activeProject.category}
                    </span>
                    <span className="font-display text-[10px] font-bold uppercase tracking-wider text-secondary-text">
                      Project {activeProjectIndex + 1} of 7
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-text mb-6">
                    {activeProject.title}
                  </h3>

                  {/* Challenge & Implementation split grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Challenge */}
                    <div className="space-y-2">
                      <h4 className="font-display text-[11px] font-bold uppercase tracking-widest text-accent flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>Executive Challenge</span>
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed font-normal">
                        {activeProject.challenge}
                      </p>
                    </div>

                    {/* Implementation */}
                    <div className="space-y-2">
                      <h4 className="font-display text-[11px] font-bold uppercase tracking-widest text-accent flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>Leadership Solution</span>
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed font-normal">
                        {activeProject.implementation}
                      </p>
                    </div>
                  </div>

                  {/* Executive Metric Cards (Outcome / Governance / Leadership) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-accent/20 pt-6">
                    {/* Business Outcome */}
                    <div className="p-4 rounded-xl bg-background border border-accent/20 flex flex-col justify-between">
                      <div className="flex items-center space-x-2 text-accent mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-sans text-[9px] font-bold uppercase tracking-wider">Business Outcome</span>
                      </div>
                      <p className="font-sans text-xs text-primary-text font-bold leading-normal">
                        {activeProject.businessOutcome}
                      </p>
                    </div>

                    {/* Governance Scale */}
                    <div className="p-4 rounded-xl bg-background border border-accent/20 flex flex-col justify-between">
                      <div className="flex items-center space-x-2 text-accent mb-2">
                        <Shield className="w-4 h-4" />
                        <span className="font-sans text-[9px] font-bold uppercase tracking-wider">Governance Scale</span>
                      </div>
                      <p className="font-sans text-xs text-primary-text font-bold leading-normal">
                        {activeProject.governanceScale}
                      </p>
                    </div>

                    {/* Leadership Scope */}
                    <div className="p-4 rounded-xl bg-background border border-accent/20 flex flex-col justify-between">
                      <div className="flex items-center space-x-2 text-accent mb-2">
                        <Layers className="w-4 h-4" />
                        <span className="font-sans text-[9px] font-bold uppercase tracking-wider">Leadership Scope</span>
                      </div>
                      <p className="font-sans text-xs text-secondary-text leading-normal">
                        {activeProject.leadershipScope}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-accent/10 mt-6 flex justify-between items-center text-[9px] font-sans font-bold uppercase tracking-wider text-secondary-text">
                  <span>Executive Governance Portfolio</span>
                  <span>•</span>
                  <span>Board Level Audited</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
