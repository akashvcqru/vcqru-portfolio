'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface AcademicDegree {
  degree: string;
  field: string;
  focus: string;
}

const educationData: AcademicDegree[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Enterprise Software & Database Architectures',
    focus: 'Specialized in relational database designs, system workflows, and network distribution logic.'
  },
  {
    degree: 'PGDCA',
    field: 'Post Graduate Diploma in Computer Applications',
    focus: 'Focused on algorithms, memory management, and structured systems analysis.'
  },
  {
    degree: 'Bachelor of Science (B.Sc.)',
    field: 'Physics, Mathematics & Logical Computing',
    focus: 'Gained solid academic foundations in calculus, scientific logic, and statistical analysis.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col space-y-3 mb-16">
          <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase">
            Section 09
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-text tracking-tight leading-none">
            Education
          </h2>
          <div className="w-16 h-0.5 bg-accent mt-4" />
        </div>

        {/* Minimal Row-based Layout */}
        <div className="flex flex-col border-t border-accent/30">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 md:py-10 border-b border-accent/30 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              {/* Degree Name & Icon */}
              <div className="flex items-start space-x-6 md:col-span-6 max-w-xl">
                <span className="w-10 h-10 rounded-lg bg-background border border-accent/30 flex items-center justify-center text-accent shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div className="space-y-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-primary-text uppercase tracking-wide">
                    {item.degree}
                  </h3>
                  <p className="font-sans text-xs text-accent font-bold tracking-wider uppercase">
                    {item.field}
                  </p>
                </div>
              </div>

              {/* Description/Focus */}
              <div className="md:col-span-6 max-w-xl md:text-left">
                <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed font-normal pt-1">
                  {item.focus}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
