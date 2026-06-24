'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface MetricProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function NumericMetric({ value, prefix = "", suffix = "", label }: MetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toLocaleString('en-IN') + suffix;
      }
    });
  }, [rounded, prefix, suffix]);

  return (
    <div className="relative p-8 rounded-2xl bg-white border border-accent/30 shadow-sm hover:shadow-md hover:border-accent/55 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group select-none min-h-[190px]">
      {/* Decorative architectural background lines in card */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/3 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[9px] font-sans font-bold text-accent tracking-widest uppercase">
            Validated Competency
          </span>
        </div>
        
        <span 
          ref={ref} 
          className="font-display font-bold tracking-tight text-primary-text tabular-nums text-3xl sm:text-4xl lg:text-5xl block leading-none whitespace-nowrap"
        >
          {prefix}0{suffix}
        </span>
      </div>
      
      <span className="font-sans text-xs tracking-wider text-secondary-text font-bold uppercase mt-6 block border-t border-accent/10 pt-4 relative z-10">
        {label}
      </span>
    </div>
  );
}

export default function ImpactInNumbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);

  const metricsData = [
    { value: 20, suffix: "+", label: "Years of Experience" },
    { value: 15, suffix: "", label: "ERP Implementations" },
    { value: 1000, prefix: "₹", suffix: "+ Cr", label: "Business Operations Influenced" },
    { value: 100, suffix: "+", label: "Professionals Led" },
    { value: 100000, suffix: "+", label: "Members Digitized" },
    { value: 13, suffix: "+", label: "Business Divisions Connected" }
  ];

  return (
    <section 
      id="impact" 
      ref={containerRef}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title / Narrative Block */}
        <div 
          ref={sectionTitleRef} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20 items-end"
        >
          <div className="lg:col-span-8 space-y-3">
            <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase">
              Section 02
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-text tracking-tight leading-none">
              Impact in Numbers
            </h2>
            <div className="w-16 h-0.5 bg-accent mt-4" />
          </div>
          <div className="lg:col-span-4">
            <p className="font-sans text-xs tracking-wider text-secondary-text font-bold uppercase leading-relaxed">
              Quantifiable operations scale governed across key manufacturing and industrial operations.
            </p>
          </div>
        </div>

        {/* Dashboard Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {metricsData.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <NumericMetric
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
