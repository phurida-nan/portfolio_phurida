// src/components/Hero.jsx
// Hero section with 3D DNA Helix, Parallax mouse tracking, animated text
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Microscope, Cpu, Heart, FlaskConical } from 'lucide-react';
import DnaHelix from './DnaHelix';
import { personalInfo, stats } from '../data/portfolioData';

const floatingIcons = [
  { icon: <Microscope className="w-6 h-6" />, x: '10%', y: '25%', delay: 0,    color: 'cyan' },
  { icon: <Cpu className="w-5 h-5" />,        x: '85%', y: '20%', delay: 0.5,  color: 'teal' },
  { icon: <Heart className="w-6 h-6" />,      x: '8%',  y: '70%', delay: 1.0,  color: 'emerald' },
  { icon: <FlaskConical className="w-5 h-5" />, x: '88%', y: '65%', delay: 1.5, color: 'cyan' },
];

const colorMap = {
  cyan:    { border: 'rgba(14,165,233,0.22)', bg: 'rgba(14,165,233,0.1)', text: '#0369a1' },
  teal:    { border: 'rgba(20,184,166,0.22)', bg: 'rgba(20,184,166,0.1)', text: '#0f766e' },
  emerald: { border: 'rgba(16,185,129,0.22)', bg: 'rgba(16,185,129,0.1)', text: '#047857' },
};

export default function Hero() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax layers driven by scroll
  const y1 = useTransform(scrollY, [0, 600], [0, -120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  const y3 = useTransform(scrollY, [0, 600], [0, -30]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse parallax
  useEffect(() => {
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-transparent"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(14,165,233,0.12) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Deep glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #14b8a6 0%, transparent 70%)' }}
      />

      {/* === PARALLAX LAYER 1 — DNA (deepest) === */}
      <motion.div
        style={{ 
          y: y1, 
          rotateX: mouse.y * -3, 
          rotateY: mouse.x * 3,
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
        }}
        className="pointer-events-none absolute right-[-42%] top-14 h-[52%] w-[105%] opacity-25 md:right-[-20%] md:top-0 md:h-full md:w-[80%] md:opacity-35 lg:right-10 lg:w-1/2 lg:opacity-70"
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <DnaHelix />
      </motion.div>

      {/* === PARALLAX LAYER 2 — Floating Icons === */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-2xl"
          style={{
            left: item.x,
            top: item.y,
            y: y2,
            background: colorMap[item.color].bg,
            border: `1px solid ${colorMap[item.color].border}`,
            color: colorMap[item.color].text,
            translateX: `${mouse.x * -15 * (i % 2 === 0 ? 1 : -1)}px`,
            translateY: `${mouse.y * -10 * (i % 2 === 0 ? 1 : -1)}px`,
          }}
          initial={{ opacity: 0, scale: 0, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: item.delay + 0.8, type: 'spring', stiffness: 200 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            {item.icon}
          </motion.div>
        </motion.div>
      ))}

      {/* === PARALLAX LAYER 3 — Main Content (closest) === */}
      <motion.div
        style={{ y: y3, opacity }}
        className="relative z-10 section-container w-full pb-14 pt-24 sm:pb-16 lg:pt-28"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full px-3 py-2 text-xs font-medium sm:mb-6 sm:px-4"
            style={{
              background: 'rgba(14,165,233,0.1)',
              border: '1px solid rgba(14,165,233,0.22)',
              color: '#0369a1',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {personalInfo.university} · {personalInfo.faculty}
          </motion.div>

          {/* Name */}
          <motion.h1
            className="mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-bio-50">{personalInfo.name}</span>
          </motion.h1>

          {/* Title with typing effect */}
          <motion.div
            className="mb-5 text-xl font-semibold sm:mb-6 sm:text-2xl lg:text-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="gradient-text">{personalInfo.titleEn}</span>
            <br />
            <span className="text-base text-bio-200 sm:text-xl">{personalInfo.title}</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="mb-7 max-w-xl text-base leading-relaxed text-bio-200 sm:mb-8 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              className="btn-solid w-full px-8 py-3.5 text-sm sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              className="btn-neon inline-flex w-full items-center justify-center px-8 py-3.5 text-sm sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="mt-10 grid grid-cols-2 gap-5 border-t border-bio-600/30 pt-6 sm:mt-12 sm:flex sm:flex-wrap sm:gap-8 sm:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {stats.slice(0, 4).map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold gradient-text">{s.value}{s.suffix}</div>
                <div className="text-xs text-bio-300 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        style={{ opacity }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-bio-300 transition-colors hover:text-cyan-700 sm:flex lg:bottom-8"
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
