// src/components/Footer.jsx
import { Dna } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-bio-600/20">
      <div className="section-container flex flex-col items-center justify-between gap-3 sm:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-600 to-emerald-600 flex items-center justify-center">
            <Dna className="w-4 h-4 text-white" />
          </div>
          <span className="text-bio-300 text-sm font-medium">
            <span className="gradient-text font-semibold">{personalInfo.nameEn}</span> · Portfolio
          </span>
        </div>
        {/* Year */}
        <p className="text-bio-400 text-xs">
          © {new Date().getFullYear()} {personalInfo.nameEn}
        </p>
      </div>
    </footer>
  );
}
