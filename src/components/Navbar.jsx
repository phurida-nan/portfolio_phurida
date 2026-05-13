// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dna, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sec);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/82 backdrop-blur-xl border-b border-cyan-700/10 shadow-lg shadow-slate-900/5'
            : 'py-5'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-600 to-emerald-600 flex items-center justify-center shadow-lg shadow-cyan-900/10 group-hover:glow-cyan transition-all duration-300">
              <Dna className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="gradient-text">Bio</span>
              <span className="text-bio-100">Med</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <motion.button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-cyan-700' : 'text-bio-200 hover:text-bio-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)' }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href={personalInfo.resumeUrl}
              download
              className="hidden md:flex items-center gap-2 btn-neon text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </motion.a>

            <motion.button
              className="md:hidden p-2 rounded-lg text-bio-200 hover:text-cyan-700 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 glass-card p-4 rounded-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === link.href.slice(1)
                      ? 'bg-cyan-600/10 text-cyan-700 border border-cyan-600/20'
                      : 'text-bio-200 hover:bg-cyan-50 hover:text-bio-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a href={personalInfo.resumeUrl} download className="mt-2 btn-solid text-sm flex items-center justify-center gap-2 py-3">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
