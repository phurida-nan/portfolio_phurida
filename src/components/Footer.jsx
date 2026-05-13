// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { Dna, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-bio-600/20">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-600 to-emerald-600 flex items-center justify-center">
            <Dna className="w-4 h-4 text-white" />
          </div>
          <span className="text-bio-300 text-sm font-medium">
            <span className="gradient-text font-semibold">{personalInfo.nameEn}</span> · Portfolio
          </span>
        </div>

        {/* Credit */}
        <p className="text-bio-400 text-xs flex items-center gap-1.5">
          Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using React + Tailwind + Three.js
        </p>

        {/* Year */}
        <p className="text-bio-400 text-xs">
          © {new Date().getFullYear()} {personalInfo.nameEn}
        </p>
      </div>
    </footer>
  );
}
