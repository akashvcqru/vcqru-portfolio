'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, Milk, Factory, Pill, Shrub, Car, ShoppingCart, Repeat } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface IndustryItem {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  svgGraphic: React.ReactNode;
}

const industries: IndustryItem[] = [
  {
    name: 'FMCG',
    description: 'Automating high-velocity inventory tracking, optimizing distribution center hubs, and unifying regional sales databases.',
    icon: ShoppingBag,
    svgGraphic: (
      <svg className="w-full h-full" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 20 H 200 M 0 40 H 200 M 0 60 H 200 M 0 80 H 200 M 0 100 H 200" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        <path d="M 20 0 V 120 M 40 0 V 120 M 60 0 V 120 M 80 0 V 120 M 100 0 V 120 M 120 0 V 120 M 140 0 V 120 M 160 0 V 120 M 180 0 V 120" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        
        {/* Barcode / Scan Schematic */}
        <g transform="translate(15, 25)">
          {/* Border box */}
          <rect x="0" y="0" width="80" height="55" rx="3" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.4" fill="#FAF9F6" fillOpacity="0.3" />
          
          {/* Barcode lines */}
          <g transform="translate(10, 8)" fill="#0F172A" fillOpacity="0.7">
            <rect x="0" y="0" width="3" height="30" />
            <rect x="5" y="0" width="1" height="30" />
            <rect x="8" y="0" width="4" height="30" />
            <rect x="14" y="0" width="2" height="30" />
            <rect x="18" y="0" width="1" height="30" />
            <rect x="21" y="0" width="5" height="30" />
            <rect x="28" y="0" width="2" height="30" />
            <rect x="32" y="0" width="1" height="30" />
            <rect x="35" y="0" width="3" height="30" />
            <rect x="40" y="0" width="4" height="30" />
            <rect x="46" y="0" width="1" height="30" />
            <rect x="49" y="0" width="2" height="30" />
            <rect x="53" y="0" width="5" height="30" />
            <rect x="60" y="0" width="1" height="30" />
          </g>
          
          {/* Scanning Laser Line */}
          <line x1="5" y1="23" x2="75" y2="23" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="5" cy="23" r="1.5" fill="#D4AF37" />
          <circle cx="75" cy="23" r="1.5" fill="#D4AF37" />
          <path d="M 5 18 L 5 28 M 75 18 L 75 28" stroke="#D4AF37" strokeWidth="0.8" />
          
          {/* Text markers */}
          <text x="10" y="48" fontFamily="monospace" fontSize="6" fill="#0F172A" fillOpacity="0.6">FMCG SYSTEM</text>
          <text x="65" y="48" fontFamily="monospace" fontSize="6" fill="#D4AF37" fontWeight="bold">98.4%</text>
        </g>

        {/* Database Server Columns */}
        <g transform="translate(110, 25)">
          {/* Server 1 */}
          <rect x="0" y="0" width="35" height="22" rx="2" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.4" fill="#FAF9F6" fillOpacity="0.3" />
          <line x1="4" y1="6" x2="20" y2="6" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="4" y1="12" x2="16" y2="12" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="28" cy="6" r="1.5" fill="#D4AF37" />
          <circle cx="28" cy="12" r="1.5" fill="#0F172A" fillOpacity="0.6" />
          <line x1="4" y1="17" x2="31" y2="17" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="1,1" />

          {/* Server 2 */}
          <rect x="0" y="28" width="35" height="22" rx="2" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.4" fill="#FAF9F6" fillOpacity="0.3" />
          <line x1="4" y1="34" x2="20" y2="34" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="4" y1="40" x2="16" y2="40" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="28" cy="34" r="1.5" fill="#0F172A" fillOpacity="0.6" />
          <circle cx="28" cy="40" r="1.5" fill="#D4AF37" />
          <line x1="4" y1="45" x2="31" y2="45" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="1,1" />
        </g>
        
        {/* Sales Chart / Trendline */}
        <g transform="translate(15, 90)">
          <path d="M 0 15 H 170" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.4" />
          <path d="M 0 15 L 25 -5 L 50 5 L 85 -15 L 115 -8 L 140 -25 L 170 -20" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25" cy="-5" r="1.5" fill="#D4AF37" />
          <circle cx="85" cy="-15" r="1.5" fill="#D4AF37" />
          <circle cx="140" cy="-25" r="1.5" fill="#D4AF37" />
          <circle cx="170" cy="-20" r="2" fill="#0F172A" />
          <line x1="140" y1="-25" x2="140" y2="15" stroke="#0F172A" strokeWidth="0.5" strokeDasharray="2,2" strokeOpacity="0.3" />
          <line x1="85" y1="-15" x2="85" y2="15" stroke="#0F172A" strokeWidth="0.5" strokeDasharray="2,2" strokeOpacity="0.3" />
          <text x="145" y="-22" fontFamily="monospace" fontSize="5" fill="#0F172A" fillOpacity="0.6">PEAK: +42%</text>
        </g>

        {/* Global Connection Node */}
        <path d="M 95 52.5 L 110 36 M 95 52.5 L 110 64" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="2,2" />
        <circle cx="95" cy="52.5" r="2" fill="#D4AF37" />
      </svg>
    )
  },
  {
    name: 'Dairy',
    description: 'Developing automated milk procurement logs, remote supplier weighing terminals, and telemetry temperature sensor networks.',
    icon: Milk,
    svgGraphic: (
      <svg className="w-full h-full" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 20 H 200 M 0 40 H 200 M 0 60 H 200 M 0 80 H 200 M 0 100 H 200" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        <path d="M 20 0 V 120 M 40 0 V 120 M 60 0 V 120 M 80 0 V 120 M 100 0 V 120 M 120 0 V 120 M 140 0 V 120 M 160 0 V 120 M 180 0 V 120" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        
        {/* Large Milk Can (Left Center) */}
        <g transform="translate(30, 15)">
          {/* Lid handle */}
          <path d="M 18 0 Q 22 -5 26 0" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.7" fill="none" />
          {/* Lid */}
          <rect x="12" y="0" width="20" height="5" rx="1.5" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.7" fill="#FAF9F6" fillOpacity="0.4" />
          {/* Neck */}
          <path d="M 14 5 V 15 Q 14 18 8 20" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" fill="none" />
          <path d="M 30 5 V 15 Q 30 18 36 20" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" fill="none" />
          {/* Body */}
          <path d="M 8 20 V 72 Q 8 78 14 78 H 30 Q 36 78 36 72 V 20" stroke="#0F172A" strokeWidth="1.2" strokeOpacity="0.6" fill="#FAF9F6" fillOpacity="0.3" />
          {/* Bands */}
          <line x1="8" y1="28" x2="36" y2="28" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="8" y1="68" x2="36" y2="68" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" />
          {/* Handle left */}
          <path d="M 8 30 Q 2 35 2 45 Q 2 55 8 58" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
          {/* Handle right */}
          <path d="M 36 30 Q 42 35 42 45 Q 42 55 36 58" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
          
          {/* Milk fill level line */}
          <line x1="9" y1="40" x2="35" y2="40" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="3,1" />
          <text x="10" y="38" fontFamily="monospace" fontSize="4" fill="#D4AF37">FILL: 85%</text>
          
          {/* Dimension line */}
          <path d="M -2 0 H 1 M -2 78 H 1 M -1 0 V 78" stroke="#0F172A" strokeWidth="0.4" strokeOpacity="0.4" />
        </g>
        
        {/* Cow Silhouette (Right Center) */}
        <g transform="translate(105, 30)">
          {/* Body */}
          <path d="M 10 25 Q 5 18 8 10 Q 10 5 15 5 H 50 Q 58 5 60 12 Q 62 18 58 25" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" fill="#FAF9F6" fillOpacity="0.3" />
          {/* Head */}
          <path d="M 58 10 Q 65 6 72 10 Q 75 14 72 18 Q 68 22 62 18" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" fill="#FAF9F6" fillOpacity="0.25" />
          {/* Horns */}
          <path d="M 64 6 Q 62 0 58 2" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />
          <path d="M 70 6 Q 72 0 76 2" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />
          {/* Eye */}
          <circle cx="68" cy="12" r="1" fill="#0F172A" fillOpacity="0.6" />
          {/* Legs */}
          <line x1="15" y1="25" x2="15" y2="38" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="22" y1="25" x2="22" y2="38" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="45" y1="25" x2="45" y2="38" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="52" y1="25" x2="52" y2="38" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          {/* Tail */}
          <path d="M 10 10 Q 4 5 6 0" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />
          {/* Udder */}
          <path d="M 30 25 Q 32 30 34 25" stroke="#D4AF37" strokeWidth="0.6" fill="none" />
          <circle cx="31" cy="29" r="0.8" fill="#D4AF37" />
          <circle cx="33" cy="29" r="0.8" fill="#D4AF37" />
          
          {/* Spots on cow */}
          <ellipse cx="25" cy="14" rx="5" ry="4" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="1,1" fill="none" />
          <ellipse cx="42" cy="12" rx="4" ry="3" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="1,1" fill="none" />
        </g>

        {/* Milk Drops (decorative) */}
        <g fill="#D4AF37" fillOpacity="0.5">
          <path d="M 90 75 Q 92 70 94 75 Q 92 80 90 75 Z" />
          <path d="M 82 80 Q 83.5 76 85 80 Q 83.5 83 82 80 Z" />
          <path d="M 96 82 Q 97.5 78 99 82 Q 97.5 85 96 82 Z" />
        </g>

        {/* Temperature Monitor Panel (Bottom Right) */}
        <g transform="translate(120, 78)">
          <rect x="0" y="0" width="60" height="28" rx="2" fill="#FAF9F6" fillOpacity="0.3" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="5" y="9" fontFamily="monospace" fontSize="4.8" fill="#D4AF37" fontWeight="bold">DAIRY MONITOR</text>
          <text x="5" y="17" fontFamily="monospace" fontSize="4.5" fill="#0F172A" fillOpacity="0.6">TEMP: 3.8 °C</text>
          <text x="5" y="24" fontFamily="monospace" fontSize="4.5" fill="#0F172A" fillOpacity="0.6">VOL: 14.82 T</text>
          <circle cx="53" cy="8" r="1.5" fill="#D4AF37" />
        </g>

        {/* Connection line from can to monitor */}
        <path d="M 66 90 H 120" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="2,2" />
        <circle cx="93" cy="90" r="1.5" fill="#D4AF37" />

        {/* Label */}
        <text x="10" y="115" fontFamily="monospace" fontSize="5.5" fill="#0F172A" fillOpacity="0.6">DAIRY PROCUREMENT</text>
      </svg>
    )
  },
  {
    name: 'Manufacturing',
    description: 'Connecting shop floor machinery, streamlining bill-of-materials in ERPs, and digitizing warehouse inventories.',
    icon: Factory,
    svgGraphic: (
      <svg className="w-full h-full" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 20 H 200 M 0 40 H 200 M 0 60 H 200 M 0 80 H 200 M 0 100 H 200" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        <path d="M 20 0 V 120 M 40 0 V 120 M 60 0 V 120 M 80 0 V 120 M 100 0 V 120 M 120 0 V 120 M 140 0 V 120 M 160 0 V 120 M 180 0 V 120" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        
        {/* Blueprint Diagonal Guide Lines */}
        <line x1="10" y1="10" x2="190" y2="110" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="3,3" strokeOpacity="0.3" />
        <line x1="190" y1="10" x2="10" y2="110" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="3,3" strokeOpacity="0.3" />
        
        {/* Technical Blueprint Ruler (Bottom) */}
        <g transform="translate(15, 105)">
          <line x1="0" y1="0" x2="170" y2="0" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" />
          {/* Ticks */}
          <path d="M 0 0 V -5 M 10 0 V -3 M 20 0 V -3 M 30 0 V -3 M 40 0 V -3 M 50 0 V -5 M 60 0 V -3 M 70 0 V -3 M 80 0 V -3 M 90 0 V -3 M 100 0 V -5 M 110 0 V -3 M 120 0 V -3 M 130 0 V -3 M 140 0 V -3 M 150 0 V -5 M 160 0 V -3 M 170 0 V -5" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.5" />
          <text x="0" y="-8" fontFamily="monospace" fontSize="5" fill="#0F172A" fillOpacity="0.5">0mm</text>
          <text x="50" y="-8" fontFamily="monospace" fontSize="5" fill="#0F172A" fillOpacity="0.5">50mm</text>
          <text x="100" y="-8" fontFamily="monospace" fontSize="5" fill="#0F172A" fillOpacity="0.5">100mm</text>
          <text x="150" y="-8" fontFamily="monospace" fontSize="5" fill="#0F172A" fillOpacity="0.5">150mm</text>
        </g>
        
        {/* Gear A (Large, Gold - Left Center) */}
        <g transform="translate(65, 45)">
          {/* Teeth (Rotated Rectangles) */}
          <g stroke="#D4AF37" strokeWidth="0.8" fill="#FAF9F6">
            <rect x="-4" y="-22" width="8" height="44" rx="1" />
            <rect x="-4" y="-22" width="8" height="44" rx="1" transform="rotate(30)" />
            <rect x="-4" y="-22" width="8" height="44" rx="1" transform="rotate(60)" />
            <rect x="-4" y="-22" width="8" height="44" rx="1" transform="rotate(90)" />
            <rect x="-4" y="-22" width="8" height="44" rx="1" transform="rotate(120)" />
            <rect x="-4" y="-22" width="8" height="44" rx="1" transform="rotate(150)" />
          </g>
          {/* Central discs */}
          <circle cx="0" cy="0" r="18" fill="#FAF9F6" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="0" cy="0" r="10" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="2,2" />
          <circle cx="0" cy="0" r="5" fill="#0F172A" fillOpacity="0.8" />
          {/* Spoke markers */}
          <line x1="-15" y1="0" x2="15" y2="0" stroke="#D4AF37" strokeWidth="0.4" strokeDasharray="1,1" />
          <line x1="0" y1="-15" x2="0" y2="15" stroke="#D4AF37" strokeWidth="0.4" strokeDasharray="1,1" />
          <text x="-25" y="-26" fontFamily="monospace" fontSize="5" fill="#D4AF37" fontWeight="bold">RPM: 120</text>
        </g>
        
        {/* Gear B (Medium, Slate - Right Top) */}
        <g transform="translate(107, 30)">
          {/* Teeth */}
          <g stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" fill="#FAF9F6">
            <rect x="-3" y="-15" width="6" height="30" rx="1" />
            <rect x="-3" y="-15" width="6" height="30" rx="1" transform="rotate(30)" />
            <rect x="-3" y="-15" width="6" height="30" rx="1" transform="rotate(60)" />
            <rect x="-3" y="-15" width="6" height="30" rx="1" transform="rotate(90)" />
            <rect x="-3" y="-15" width="6" height="30" rx="1" transform="rotate(120)" />
            <rect x="-3" y="-15" width="6" height="30" rx="1" transform="rotate(150)" />
          </g>
          <circle cx="0" cy="0" r="12" fill="#FAF9F6" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="0" cy="0" r="3" fill="#0F172A" fillOpacity="0.6" />
        </g>
        
        {/* Cargo Crate / Conveyor System (Bottom Right) */}
        <g transform="translate(120, 50)">
          {/* Conveyor belt rollers */}
          <line x1="0" y1="36" x2="60" y2="36" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="10" cy="39" r="2.5" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="25" cy="39" r="2.5" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="40" cy="39" r="2.5" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="55" cy="39" r="2.5" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          
          {/* Cargo Crate */}
          <rect x="8" y="6" width="34" height="30" rx="1.5" fill="#FAF9F6" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" />
          {/* Cross wood reinforcement */}
          <line x1="8" y1="6" x2="42" y2="36" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" />
          <line x1="42" y1="6" x2="8" y2="36" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" />
          <rect x="13" y="11" width="24" height="20" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2,2" />
          
          <text x="-5" y="0" fontFamily="monospace" fontSize="5" fill="#0F172A" fillOpacity="0.6">MANUFACTURING CORE</text>
          <text x="12" y="23" fontFamily="monospace" fontSize="6.5" fill="#D4AF37" fontWeight="bold">PASS</text>
        </g>
        
        {/* Core Calibration Line */}
        <path d="M 65 45 L 120 56" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2,2" />
        <circle cx="92.5" cy="50.5" r="2" fill="#D4AF37" />
      </svg>
    )
  },
  {
    name: 'Pharma',
    description: 'Configuring audit-ready databases, securing clinical logging, and enforcing regulatory IT standards.',
    icon: Pill,
    svgGraphic: (
      <svg className="w-full h-full" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 20 H 200 M 0 40 H 200 M 0 60 H 200 M 0 80 H 200 M 0 100 H 200" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        <path d="M 20 0 V 120 M 40 0 V 120 M 60 0 V 120 M 80 0 V 120 M 100 0 V 120 M 120 0 V 120 M 140 0 V 120 M 160 0 V 120 M 180 0 V 120" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        
        {/* DNA Double Helix (Top) */}
        <g transform="translate(10, 30)">
          {/* Outer sine waves */}
          <path d="M 10 0 Q 30 -20 50 0 T 90 0 T 130 0 T 170 0" stroke="#0F172A" strokeWidth="1.2" strokeOpacity="0.6" strokeLinecap="round" />
          <path d="M 10 0 Q 30 20 50 0 T 90 0 T 130 0 T 170 0" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Vertical Rungs */}
          <g strokeWidth="0.8">
            <line x1="20" y1="-8" x2="20" y2="8" stroke="#0F172A" strokeOpacity="0.5" />
            <line x1="30" y1="-10" x2="30" y2="10" stroke="#D4AF37" />
            <line x1="40" y1="-8" x2="40" y2="8" stroke="#0F172A" strokeOpacity="0.5" />
            
            <line x1="60" y1="-8" x2="60" y2="8" stroke="#D4AF37" />
            <line x1="70" y1="-10" x2="70" y2="10" stroke="#0F172A" strokeOpacity="0.5" />
            <line x1="80" y1="-8" x2="80" y2="8" stroke="#D4AF37" />
            
            <line x1="100" y1="-8" x2="100" y2="8" stroke="#0F172A" strokeOpacity="0.5" />
            <line x1="110" y1="-10" x2="110" y2="10" stroke="#D4AF37" />
            <line x1="120" y1="-8" x2="120" y2="8" stroke="#0F172A" strokeOpacity="0.5" />
            
            <line x1="140" y1="-8" x2="140" y2="8" stroke="#D4AF37" />
            <line x1="150" y1="-10" x2="150" y2="10" stroke="#0F172A" strokeOpacity="0.5" />
            <line x1="160" y1="-8" x2="160" y2="8" stroke="#D4AF37" />
          </g>
          
          {/* Nodes */}
          <circle cx="30" cy="-10" r="1.5" fill="#D4AF37" />
          <circle cx="30" cy="10" r="1.5" fill="#0F172A" />
          <circle cx="70" cy="-10" r="1.5" fill="#0F172A" />
          <circle cx="70" cy="10" r="1.5" fill="#D4AF37" />
          <circle cx="110" cy="-10" r="1.5" fill="#D4AF37" />
          <circle cx="110" cy="10" r="1.5" fill="#0F172A" />
          <circle cx="150" cy="-10" r="1.5" fill="#0F172A" />
          <circle cx="150" cy="10" r="1.5" fill="#D4AF37" />
          
          <text x="15" y="-16" fontFamily="monospace" fontSize="5" fill="#0F172A" fillOpacity="0.6">PHARMA DATABASE</text>
        </g>
        
        {/* Secure Regulatory Audit Database (Bottom Center) */}
        <g transform="translate(55, 68)">
          {/* Border shield / lock container */}
          <rect x="0" y="0" width="90" height="38" rx="4" fill="#FAF9F6" fillOpacity="0.3" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" />
          
          {/* Internal elements - server rack drawers */}
          <rect x="6" y="6" width="48" height="11" rx="1" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" />
          <line x1="10" y1="11" x2="34" y2="11" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="48" cy="11" r="1.2" fill="#D4AF37" />
          
          <rect x="6" y="21" width="48" height="11" rx="1" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" />
          <line x1="10" y1="26" x2="40" y2="26" stroke="#D4AF37" strokeWidth="0.8" />
          <circle cx="48" cy="26" r="1.2" fill="#0F172A" fillOpacity="0.6" />
          
          {/* Security Validation Seal (Checkmark in Shield) */}
          <g transform="translate(68, 19)">
            <polygon points="0,-10 8,-6 8,2 0,9 -8,2 -8,-6" stroke="#D4AF37" strokeWidth="1" fill="#FAF9F6" />
            <path d="M-3,0 L-1,2 L4,-3" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
          
          <text x="6" y="-4" fontFamily="monospace" fontSize="5.5" fill="#D4AF37" fontWeight="bold">SECURE AUDIT DATABASE</text>
          <text x="61" y="34" fontFamily="monospace" fontSize="4.5" fill="#0F172A" fillOpacity="0.6">FDA Part 11</text>
        </g>
        
        {/* Sync paths */}
        <path d="M 80 40 L 80 68 M 120 40 L 120 68" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2,2" />
        <circle cx="80" cy="54" r="1.5" fill="#D4AF37" />
        <circle cx="120" cy="54" r="1.5" fill="#D4AF37" />
      </svg>
    )
  },
  {
    name: 'Agriculture',
    description: 'Enabling rural collection telemetry networks and secure transaction ledgers for extensive farming communities.',
    icon: Shrub,
    svgGraphic: (
      <svg className="w-full h-full" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 20 H 200 M 0 40 H 200 M 0 60 H 200 M 0 80 H 200 M 0 100 H 200" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        <path d="M 20 0 V 120 M 40 0 V 120 M 60 0 V 120 M 80 0 V 120 M 100 0 V 120 M 120 0 V 120 M 140 0 V 120 M 160 0 V 120 M 180 0 V 120" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        
        {/* Sun (Top Right) */}
        <g transform="translate(165, 18)">
          <circle cx="0" cy="0" r="8" fill="#FAF9F6" stroke="#D4AF37" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="4" fill="#D4AF37" fillOpacity="0.15" />
          {/* Sun rays */}
          <line x1="0" y1="-11" x2="0" y2="-14" stroke="#D4AF37" strokeWidth="0.6" />
          <line x1="8" y1="-8" x2="10" y2="-10" stroke="#D4AF37" strokeWidth="0.6" />
          <line x1="11" y1="0" x2="14" y2="0" stroke="#D4AF37" strokeWidth="0.6" />
          <line x1="8" y1="8" x2="10" y2="10" stroke="#D4AF37" strokeWidth="0.6" />
          <line x1="-8" y1="-8" x2="-10" y2="-10" stroke="#D4AF37" strokeWidth="0.6" />
          <line x1="-11" y1="0" x2="-14" y2="0" stroke="#D4AF37" strokeWidth="0.6" />
        </g>
        
        {/* Ground / Soil Line */}
        <line x1="5" y1="85" x2="195" y2="85" stroke="#0F172A" strokeWidth="1.2" strokeOpacity="0.5" />
        
        {/* Soil Layers (hatching below ground) */}
        <g strokeOpacity="0.15" stroke="#0F172A" strokeWidth="0.5">
          <line x1="10" y1="90" x2="190" y2="90" />
          <line x1="10" y1="95" x2="190" y2="95" />
          <line x1="10" y1="100" x2="190" y2="100" />
          <path d="M 20 85 L 15 105 M 50 85 L 45 105 M 80 85 L 75 105 M 110 85 L 105 105 M 140 85 L 135 105 M 170 85 L 165 105" />
        </g>
        
        {/* Crop Rows — Wheat Stalks */}
        {/* Row 1 */}
        <g transform="translate(25, 85)" stroke="#D4AF37" strokeWidth="0.8">
          <line x1="0" y1="0" x2="0" y2="-22" />
          <path d="M 0 -22 Q 4 -26 0 -30" fill="none" />
          <path d="M 0 -18 Q -3 -21 0 -24" fill="none" strokeWidth="0.6" />
          <path d="M 0 -14 Q 3 -17 0 -20" fill="none" strokeWidth="0.6" />
        </g>
        <g transform="translate(40, 85)" stroke="#D4AF37" strokeWidth="0.8">
          <line x1="0" y1="0" x2="0" y2="-26" />
          <path d="M 0 -26 Q 4 -30 0 -34" fill="none" />
          <path d="M 0 -22 Q -3 -25 0 -28" fill="none" strokeWidth="0.6" />
          <path d="M 0 -18 Q 3 -21 0 -24" fill="none" strokeWidth="0.6" />
        </g>
        <g transform="translate(55, 85)" stroke="#D4AF37" strokeWidth="0.8">
          <line x1="0" y1="0" x2="0" y2="-20" />
          <path d="M 0 -20 Q 4 -24 0 -28" fill="none" />
          <path d="M 0 -16 Q -3 -19 0 -22" fill="none" strokeWidth="0.6" />
        </g>
        {/* Row 2 */}
        <g transform="translate(70, 85)" stroke="#D4AF37" strokeWidth="0.8">
          <line x1="0" y1="0" x2="0" y2="-24" />
          <path d="M 0 -24 Q 4 -28 0 -32" fill="none" />
          <path d="M 0 -20 Q -3 -23 0 -26" fill="none" strokeWidth="0.6" />
          <path d="M 0 -16 Q 3 -19 0 -22" fill="none" strokeWidth="0.6" />
        </g>
        <g transform="translate(85, 85)" stroke="#D4AF37" strokeWidth="0.8">
          <line x1="0" y1="0" x2="0" y2="-18" />
          <path d="M 0 -18 Q 4 -22 0 -26" fill="none" />
          <path d="M 0 -14 Q -3 -17 0 -20" fill="none" strokeWidth="0.6" />
        </g>

        {/* Tractor Blueprint (Right Side) */}
        <g transform="translate(110, 52)">
          {/* Tractor body */}
          <rect x="0" y="5" width="40" height="20" rx="2" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" fill="#FAF9F6" fillOpacity="0.3" />
          {/* Cabin */}
          <path d="M 5 5 V -8 H 22 V 5" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" fill="#FAF9F6" fillOpacity="0.2" />
          {/* Window */}
          <rect x="8" y="-5" width="11" height="8" rx="1" stroke="#D4AF37" strokeWidth="0.6" fill="#FAF9F6" fillOpacity="0.15" />
          {/* Exhaust pipe */}
          <line x1="35" y1="5" x2="35" y2="-4" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="35" cy="-5" r="1.5" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />
          
          {/* Back wheel (large) */}
          <circle cx="10" cy="30" r="9" fill="#FAF9F6" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="10" cy="30" r="5" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="1,1" />
          <circle cx="10" cy="30" r="2" fill="#0F172A" fillOpacity="0.5" />
          {/* Tread lines */}
          <line x1="1" y1="30" x2="19" y2="30" stroke="#D4AF37" strokeWidth="0.3" />
          <line x1="10" y1="21" x2="10" y2="39" stroke="#D4AF37" strokeWidth="0.3" />
          
          {/* Front wheel (small) */}
          <circle cx="35" cy="30" r="5.5" fill="#FAF9F6" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" />
          <circle cx="35" cy="30" r="2" fill="#0F172A" fillOpacity="0.5" />
          
          {/* Hitch attachment */}
          <line x1="40" y1="18" x2="50" y2="18" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" />
          <circle cx="50" cy="18" r="1.5" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />
        </g>

        {/* Telemetry Data Panel (Top Left) */}
        <g transform="translate(10, 8)">
          <rect x="0" y="0" width="55" height="28" rx="2" fill="#FAF9F6" fillOpacity="0.3" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="5" y="9" fontFamily="monospace" fontSize="4.8" fill="#D4AF37" fontWeight="bold">CROP YIELD</text>
          <text x="5" y="17" fontFamily="monospace" fontSize="4.5" fill="#0F172A" fillOpacity="0.6">SOIL PH: 6.8</text>
          <text x="5" y="24" fontFamily="monospace" fontSize="4.5" fill="#0F172A" fillOpacity="0.6">MOIST: 64%</text>
          <circle cx="48" cy="8" r="1.5" fill="#D4AF37" />
        </g>

        {/* Label */}
        <text x="10" y="115" fontFamily="monospace" fontSize="5.5" fill="#0F172A" fillOpacity="0.6">AGRICULTURE FIELD</text>
      </svg>
    )
  },
  {
    name: 'Automobile',
    description: 'Deploying assembly lines geofencing, tracking component inventories, and integrating delivery networks.',
    icon: Car,
    svgGraphic: (
      <svg className="w-full h-full" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 20 H 200 M 0 40 H 200 M 0 60 H 200 M 0 80 H 200 M 0 100 H 200" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        <path d="M 20 0 V 120 M 40 0 V 120 M 60 0 V 120 M 80 0 V 120 M 100 0 V 120 M 120 0 V 120 M 140 0 V 120 M 160 0 V 120 M 180 0 V 120" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        
        {/* Geofencing Crosshair Grid */}
        <circle cx="100" cy="60" r="50" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="3,3" strokeOpacity="0.5" />
        <circle cx="100" cy="60" r="30" stroke="#0F172A" strokeWidth="0.4" strokeDasharray="2,2" strokeOpacity="0.3" />
        <line x1="100" y1="5" x2="100" y2="115" stroke="#0F172A" strokeWidth="0.3" strokeOpacity="0.3" />
        <line x1="15" y1="60" x2="185" y2="60" stroke="#0F172A" strokeWidth="0.3" strokeOpacity="0.3" />
        
        {/* Crosshair ticks */}
        <path d="M 100 10 H 105 M 100 110 H 105 M 50 60 V 65 M 150 60 V 65" stroke="#D4AF37" strokeWidth="0.8" />
        
        {/* Car Blueprint Contour (Side View) */}
        <g transform="translate(25, 38)">
          {/* Chassis contour line */}
          <path d="M 5 35 L 20 35 Q 26 23 38 23 L 53 23 Q 58 35 73 35 L 107 35 Q 112 23 124 23 L 138 23 Q 144 35 148 35 H 152 V 30 L 140 22 Q 132 8 112 8 H 70 Q 55 8 40 18 L 18 22 Q 5 22 5 35 Z" fill="#F4F1EB" fillOpacity="0.3" stroke="#0F172A" strokeWidth="1.2" strokeOpacity="0.75" />
          
          {/* Door & Window lines */}
          <path d="M 68 8 H 100 L 115 22 H 68 Z" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" />
          <path d="M 68 8 L 48 18 H 68 Z" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1="68" y1="8" x2="68" y2="35" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.5" />
          
          {/* Wheel Arch & Wheels (Gold) */}
          <g transform="translate(38, 35)">
            <circle cx="0" cy="0" r="10.5" fill="#FAF9F6" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="5" stroke="#D4AF37" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="2" fill="#0F172A" />
            <line x1="-10.5" y1="0" x2="10.5" y2="0" stroke="#D4AF37" strokeWidth="0.4" />
            <line x1="0" y1="-10.5" x2="0" y2="10.5" stroke="#D4AF37" strokeWidth="0.4" />
          </g>
          <g transform="translate(124, 35)">
            <circle cx="0" cy="0" r="10.5" fill="#FAF9F6" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="5" stroke="#D4AF37" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="2" fill="#0F172A" />
            <line x1="-10.5" y1="0" x2="10.5" y2="0" stroke="#D4AF37" strokeWidth="0.4" />
            <line x1="0" y1="-10.5" x2="0" y2="10.5" stroke="#D4AF37" strokeWidth="0.4" />
          </g>
          
          {/* Dimension indicator lines */}
          <line x1="5" y1="44" x2="152" y2="44" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2,2" />
          <path d="M 5 41 V 47 M 152 41 V 47" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" />
          <text x="60" y="49" fontFamily="monospace" fontSize="5" fill="#0F172A" fillOpacity="0.5">L: 4620mm</text>
          
          {/* GPS Tracking Node overlay */}
          <g transform="translate(85, 20)">
            <circle cx="0" cy="0" r="3" fill="#D4AF37" />
            <rect x="-6" y="-6" width="12" height="12" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="1,1" />
            <line x1="-10" y1="-10" x2="-6" y2="-6" stroke="#D4AF37" strokeWidth="0.6" />
            <text x="8" y="2" fontFamily="monospace" fontSize="5.5" fill="#D4AF37" fontWeight="bold">GPS: LKD</text>
          </g>
        </g>
        
        {/* Diagnostics Box (Top Right) */}
        <g transform="translate(130, 15)">
          <rect x="0" y="0" width="50" height="25" rx="2" fill="#FAF9F6" fillOpacity="0.3" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <text x="4" y="8" fontFamily="monospace" fontSize="4.8" fill="#0F172A" fillOpacity="0.6">AUTOMOBILE SYSTEM</text>
          <text x="4" y="15" fontFamily="monospace" fontSize="5" fill="#D4AF37" fontWeight="bold">GEOFENCE: OK</text>
          <text x="4" y="21" fontFamily="monospace" fontSize="4.5" fill="#0F172A" fillOpacity="0.6">OBD_LAT: 12ms</text>
        </g>
      </svg>
    )
  },
  {
    name: 'E-Commerce',
    description: 'Deploying robust transactional billing APIs, dispatch portals, and customer relations databases.',
    icon: ShoppingCart,
    svgGraphic: (
      <svg className="w-full h-full" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 20 H 200 M 0 40 H 200 M 0 60 H 200 M 0 80 H 200 M 0 100 H 200" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        <path d="M 20 0 V 120 M 40 0 V 120 M 60 0 V 120 M 80 0 V 120 M 100 0 V 120 M 120 0 V 120 M 140 0 V 120 M 160 0 V 120 M 180 0 V 120" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        
        {/* Server Rack (Left) */}
        <g transform="translate(15, 20)">
          <rect x="0" y="0" width="55" height="75" rx="3" stroke="#0F172A" strokeWidth="1.2" strokeOpacity="0.6" fill="#FAF9F6" fillOpacity="0.3" />
          <line x1="0" y1="25" x2="55" y2="25" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="0" y1="50" x2="55" y2="50" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />
          
          {/* Server Blade 1 */}
          <g transform="translate(5, 4)">
            <rect x="0" y="0" width="45" height="17" rx="1.5" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" />
            <line x1="4" y1="8" x2="25" y2="8" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="34" cy="8" r="1.5" fill="#D4AF37" />
            <circle cx="40" cy="8" r="1.5" fill="#0F172A" fillOpacity="0.6" />
            <path d="M 4 13 H 8 M 12 13 H 16 M 20 13 H 24 M 28 13 H 32" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.4" />
          </g>

          {/* Server Blade 2 */}
          <g transform="translate(5, 29)">
            <rect x="0" y="0" width="45" height="17" rx="1.5" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" />
            <line x1="4" y1="8" x2="25" y2="8" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" />
            <circle cx="34" cy="8" r="1.5" fill="#0F172A" fillOpacity="0.6" />
            <circle cx="40" cy="8" r="1.5" fill="#D4AF37" />
            <path d="M 4 13 H 8 M 12 13 H 16 M 20 13 H 24 M 28 13 H 32" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.4" />
          </g>

          {/* Server Blade 3 */}
          <g transform="translate(5, 54)">
            <rect x="0" y="0" width="45" height="17" rx="1.5" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.5" />
            <line x1="4" y1="8" x2="25" y2="8" stroke="#D4AF37" strokeWidth="1" />
            <circle cx="34" cy="8" r="1.5" fill="#D4AF37" />
            <circle cx="40" cy="8" r="1.5" fill="#D4AF37" />
            <path d="M 4 13 H 8 M 12 13 H 16 M 20 13 H 24 M 28 13 H 32" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.4" />
          </g>
          <text x="0" y="84" fontFamily="monospace" fontSize="5.5" fill="#0F172A" fillOpacity="0.6">E-COMMERCE SYSTEM</text>
        </g>
        
        {/* Shopping Cart Schematic (Right) */}
        <g transform="translate(115, 30)">
          {/* Cart Basket */}
          <polygon points="5,5 45,5 38,30 12,30" fill="#FAF9F6" fillOpacity="0.3" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.7" />
          {/* Cart Wheel mount */}
          <path d="M 12 30 L 10 38 H 36 L 38 30" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.7" fill="none" />
          <path d="M 5 5 L 0 0 H -5" stroke="#0F172A" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
          
          {/* Wheels */}
          <circle cx="10" cy="42" r="4.5" fill="#FAF9F6" stroke="#D4AF37" strokeWidth="1.2" />
          <circle cx="10" cy="42" r="1.5" fill="#0F172A" />
          
          <circle cx="36" cy="42" r="4.5" fill="#FAF9F6" stroke="#D4AF37" strokeWidth="1.2" />
          <circle cx="36" cy="42" r="1.5" fill="#0F172A" />
          
          {/* Grid lines inside cart basket */}
          <line x1="15" y1="10" x2="42" y2="10" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="17" y1="17" x2="40" y2="17" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="20" y1="24" x2="38" y2="24" stroke="#0F172A" strokeWidth="0.6" strokeOpacity="0.4" />
          
          <text x="0" y="53" fontFamily="monospace" fontSize="5.5" fill="#0F172A" fillOpacity="0.6">DEV_ID: EC_CART_66</text>
        </g>
        
        {/* Sync Routes / API Transactions */}
        <g strokeWidth="0.8">
          <path d="M 70 35 H 115" stroke="#D4AF37" strokeLinecap="round" />
          <path d="M 115 55 H 70" stroke="#0F172A" strokeOpacity="0.5" strokeDasharray="3,3" />
          
          {/* Arrowheads */}
          <path d="M 111 32 L 115 35 L 111 38" stroke="#D4AF37" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 74 52 L 70 55 L 74 58" stroke="#0F172A" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          
          {/* Status node */}
          <circle cx="92.5" cy="35" r="2.5" fill="#D4AF37" />
          <text x="73" y="31" fontFamily="monospace" fontSize="4.8" fill="#D4AF37" fontWeight="bold">POST /checkout</text>
          <text x="73" y="64" fontFamily="monospace" fontSize="4.8" fill="#0F172A" fillOpacity="0.6">HTTP 200 OK</text>
        </g>
      </svg>
    )
  },
  {
    name: 'Supply Chain',
    description: 'Connecting regional hubs with WAN connections, backup satellite systems, and predictive logistics routing.',
    icon: Repeat,
    svgGraphic: (
      <svg className="w-full h-full" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 20 H 200 M 0 40 H 200 M 0 60 H 200 M 0 80 H 200 M 0 100 H 200" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        <path d="M 20 0 V 120 M 40 0 V 120 M 60 0 V 120 M 80 0 V 120 M 100 0 V 120 M 120 0 V 120 M 140 0 V 120 M 160 0 V 120 M 180 0 V 120" stroke="#0F172A" strokeWidth="0.25" strokeOpacity="0.08" />
        
        {/* Globe Grid (Bottom Left) */}
        <g transform="translate(25, 45)">
          {/* Globe Boundary */}
          <circle cx="35" cy="35" r="32" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.6" fill="#F4F1EB" fillOpacity="0.3" />
          
          {/* Longitude lines */}
          <path d="M 35 3 A 32 32 0 0 1 35 67" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
          <path d="M 35 3 A 18 32 0 0 1 35 67" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
          <path d="M 35 3 A 18 32 0 0 0 35 67" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
          
          {/* Latitude lines */}
          <line x1="3" y1="35" x2="67" y2="35" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.4" />
          <path d="M 7 20 Q 35 25 63 20" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
          <path d="M 7 50 Q 35 45 63 50" stroke="#0F172A" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
          
          {/* Logistics Network Nodes */}
          <circle cx="15" cy="22" r="2" fill="#0F172A" />
          <circle cx="35" cy="35" r="2.5" fill="#D4AF37" />
          <circle cx="58" cy="42" r="2" fill="#0F172A" />
          <circle cx="48" cy="15" r="1.5" fill="#0F172A" />
          
          {/* Shipping Route Arcs (Gold) */}
          <path d="M 15 22 Q 22 25 35 35" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
          <path d="M 35 35 Q 48 38 58 42" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />
          <path d="M 48 15 Q 38 25 35 35" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2,1" strokeLinecap="round" />
          
          <text x="-15" y="76" fontFamily="monospace" fontSize="5.5" fill="#0F172A" fillOpacity="0.6">SUPPLY CHAIN ROUTE</text>
        </g>
        
        {/* Satellite Rig (Top Right Space) */}
        <g transform="translate(135, 20)">
          {/* Main Body */}
          <rect x="-6" y="-8" width="12" height="16" rx="1.5" fill="#FAF9F6" stroke="#0F172A" strokeWidth="1.2" />
          
          {/* Solar Panel Wings */}
          <g transform="translate(-22, -4)">
            <rect x="0" y="0" width="16" height="8" rx="0.5" fill="#FAF9F6" stroke="#D4AF37" strokeWidth="0.8" />
            <line x1="4" y1="0" x2="4" y2="8" stroke="#D4AF37" strokeWidth="0.6" />
            <line x1="8" y1="0" x2="8" y2="8" stroke="#D4AF37" strokeWidth="0.6" />
            <line x1="12" y1="0" x2="12" y2="8" stroke="#D4AF37" strokeWidth="0.6" />
            <line x1="0" y1="4" x2="16" y2="4" stroke="#D4AF37" strokeWidth="0.5" />
          </g>
          <line x1="-6" y1="0" x2="-2" y2="0" stroke="#0F172A" strokeWidth="1" />
          
          <g transform="translate(6, -4)">
            <rect x="0" y="0" width="16" height="8" rx="0.5" fill="#FAF9F6" stroke="#D4AF37" strokeWidth="0.8" />
            <line x1="4" y1="0" x2="4" y2="8" stroke="#D4AF37" strokeWidth="0.6" />
            <line x1="8" y1="0" x2="8" y2="8" stroke="#D4AF37" strokeWidth="0.6" />
            <line x1="12" y1="0" x2="12" y2="8" stroke="#D4AF37" strokeWidth="0.6" />
            <line x1="0" y1="4" x2="16" y2="4" stroke="#D4AF37" strokeWidth="0.5" />
          </g>
          <line x1="6" y1="0" x2="10" y2="0" stroke="#0F172A" strokeWidth="1" />
          
          {/* Satellite Dish Antenna */}
          <path d="M -5 8 Q 0 14 5 8" fill="#D4AF37" stroke="#D4AF37" strokeWidth="0.8" />
          <line x1="0" y1="11" x2="0" y2="15" stroke="#D4AF37" strokeWidth="0.8" />
          <circle cx="0" cy="15" r="1" fill="#D4AF37" />
          
          <text x="-25" y="-12" fontFamily="monospace" fontSize="5" fill="#0F172A" fillOpacity="0.6">SATELLITE LINK</text>
        </g>
        
        {/* WAN Satellite Transmission Beam */}
        <g strokeWidth="0.8">
          <line x1="135" y1="35" x2="60" y2="80" stroke="#D4AF37" strokeDasharray="3,3" />
          <circle cx="97.5" cy="57.5" r="2" fill="#D4AF37" />
          <text x="103" y="55" fontFamily="monospace" fontSize="5" fill="#D4AF37" fontWeight="bold">WAN: 24ms</text>
        </g>
      </svg>
    )
  }
];

export default function IndustryExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const leftTrackRef = useRef<HTMLDivElement>(null);
  const rightTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!leftTrackRef.current || !rightTrackRef.current || !containerRef.current || !pinRef.current) return;

      const mm = gsap.matchMedia();

      // Only run Split Vertical Counter-Scroll on desktop (lg and up)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: pinRef.current,
            scrub: true,
            start: 'top top',
            end: 'bottom bottom',
            invalidateOnRefresh: true,
          }
        });

        // Left Column: text details slides down (translates from -800vh to 0)
        tl.fromTo(leftTrackRef.current,
          { y: "-800vh" },
          {
            y: 0,
            ease: 'none',
          },
          0
        );

        // Right Column: graphics slides up (translates from 0 to -800vh)
        tl.fromTo(rightTrackRef.current,
          { y: 0 },
          {
            y: "-800vh",
            ease: 'none',
          },
          0
        );
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // For the reverse-order counter scroll track on the left
  const reversedIndustries = [...industries].reverse();

  return (
    <div 
      ref={containerRef} 
      className="relative lg:min-h-[600vh] bg-background z-10"
    >
      {/* Viewport Frame */}
      <div 
        ref={pinRef}
        className="lg:h-screen lg:w-full lg:relative lg:overflow-hidden flex flex-col lg:flex-row bg-background"
      >
        
        {/* Desktop Layout (Split-Screen Vertical Counter-Scroll) */}
        <div className="hidden lg:flex flex-row w-full h-full relative">
          
          {/* Left Column (Sliding Downwards) */}
          <div className="w-[50vw] h-full overflow-hidden bg-background relative border-r border-accent/10">
            <div 
              ref={leftTrackRef}
              className="flex flex-col w-full h-[900vh]"
            >
              {/* Left Track slides: Reverse order + Intro slide at the bottom */}
              {reversedIndustries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div 
                    key={index}
                    className="h-screen w-full flex flex-col justify-center px-10 lg:px-12 xl:px-16 2xl:px-24"
                  >
                    <div className="max-w-xs xl:max-w-md space-y-4 xl:space-y-6">
                      <div className="flex items-center space-x-4">
                        <span className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center text-accent">
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="font-sans text-xs tracking-[0.25em] text-accent font-bold uppercase">
                          Industry Showcase 0{industries.length - index}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-primary-text uppercase leading-none">
                        {industry.name}
                      </h3>
                      
                      <div className="w-12 h-0.5 bg-accent" />
                      
                      <p className="font-sans text-xs sm:text-sm xl:text-base text-secondary-text leading-relaxed font-normal">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Slide 0 Intro (At the bottom of the left track) */}
              <div className="h-screen w-full flex flex-col justify-center px-10 lg:px-12 xl:px-16 2xl:px-24">
                <div className="max-w-xs xl:max-w-md space-y-4 xl:space-y-6">
                  <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase block">
                    Section 04 — Industries Transformed
                  </span>
                  <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold tracking-tight text-primary-text uppercase leading-[0.95]">
                    Transforming Multi-Sector Ecosystems
                  </h2>
                  <div className="w-16 h-0.5 bg-accent" />
                  <p className="font-sans text-xs sm:text-sm xl:text-base text-secondary-text leading-relaxed font-normal">
                    Driving large-scale technology configurations across FMCG, Dairy, Manufacturing, Pharma, Agriculture, Automobile, E-Commerce, and Supply Chain structures.
                  </p>
                  <div className="pt-4 flex items-center space-x-2 text-xs font-sans font-bold uppercase tracking-wider text-accent animate-pulse">
                    <span>Scroll down to explore</span>
                    <span>↓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sliding Upwards) */}
          <div className="w-[50vw] h-full overflow-hidden bg-surface relative">
            <div 
              ref={rightTrackRef}
              className="flex flex-col w-full h-[900vh]"
            >
              {/* Slide 0 Intro graphic (At the top of the right track) */}
              <div className="h-screen w-full flex items-center justify-center bg-surface relative">
                <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                  <div className="absolute inset-0 border border-dashed border-accent/20 rounded-full animate-[spin_40s_linear_infinite]" />
                  <div className="absolute inset-[15%] border border-dashed border-accent/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
                  <div className="w-[60%] h-[60%] border border-accent/15 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-accent/5 rounded-full filter blur-xl animate-pulse-slow" />
                    <svg className="w-full h-full text-accent/35" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1,2" />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.15" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Track slides: Industry Graphics in normal order */}
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="h-screen w-full flex items-center justify-center bg-surface relative"
                >
                  <span className="absolute right-[5%] bottom-[5%] font-display text-[15rem] lg:text-[20rem] font-black text-accent/[0.02] leading-none pointer-events-none select-none">
                    0{index + 1}
                  </span>
                  
                  <div className="w-full max-w-[420px] aspect-video bg-background/50 backdrop-blur rounded-2xl border border-accent/30 flex items-center justify-center p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_50%,rgba(244,241,235,0.4)_100%]" />
                    <div className="w-full h-full max-w-[180px] max-h-[180px]">
                      {industry.svgGraphic}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile/Tablet Layout (Regular vertical scroll list) */}
        <div className="flex lg:hidden flex-col w-full max-w-2xl mx-auto px-6 py-16 space-y-12 z-10 bg-background text-primary-text">
          {/* Intro */}
          <div className="space-y-4">
            <span className="font-sans text-xs tracking-[0.2em] text-accent font-bold uppercase block">
              Section 04 — Industries Transformed
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-primary-text uppercase leading-none">
              Transforming Multi-Sector Ecosystems
            </h2>
            <div className="w-12 h-0.5 bg-accent animate-pulse" />
            <p className="font-sans text-sm text-secondary-text leading-relaxed font-normal">
              Driving large-scale technology configurations across FMCG, Dairy, Manufacturing, Pharma, Agriculture, Automobile, E-Commerce, and Supply Chain structures.
            </p>
          </div>

          {/* Industry Cards List */}
          <div className="space-y-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-surface border border-accent/30 space-y-4 shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/30 flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-primary-text">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed font-normal">
                    {industry.description}
                  </p>

                  <div className="w-full aspect-video bg-background/50 rounded-xl border border-accent/5 flex items-center justify-center p-4">
                    <div className="w-full h-full max-w-[120px] max-h-[120px]">
                      {industry.svgGraphic}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
