'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function Counter({ value, prefix = "", suffix = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] as const, // Custom premium easeOutExpo
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toLocaleString('en-IN') + suffix;
      }
    });
  }, [rounded, prefix, suffix]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl md:text-4xl text-slate-dark tabular-nums">
      {prefix}0{suffix}
    </span>
  );
}
