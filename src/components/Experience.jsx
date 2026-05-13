// src/components/Experience.jsx
// Experience / Education Timeline with scroll-triggered animations
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, FlaskConical, Users } from 'lucide-react';
import { experience } from '../data/portfolioData';

const typeConfig = {
  research:  { icon: <FlaskConical className="w-4 h-4" />, color: '#0369a1', bg: 'rgba(14,165,233,0.1)',  border: 'rgba(14,165,233,0.24)' },
  work:      { icon: <Briefcase className="w-4 h-4" />,    color: '#0f766e', bg: 'rgba(20,184,166,0.1)',  border: 'rgba(20,184,166,0.24)' },
  activity:  { icon: <Users className="w-4 h-4" />,        color: '#047857', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.24)' },
  education: { icon: <GraduationCap className="w-4 h-4" />, color: '#0e7490', bg: 'rgba(6,182,212,0.1)',   border: 'rgba(6,182,212,0.24)' },
};

function TimelineItem({ item, index, isLeft }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const cfg = typeConfig[item.type] || typeConfig.work;

  return (
    <motion.div
      ref={ref}
      className={`flex items-start gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'} w-full md:w-1/2 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dot connector (hidden on mobile) */}
      <div
        className={`hidden md:flex shrink-0 w-10 h-10 rounded-xl items-center justify-center`}
        style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color }}
      >
        {cfg.icon}
      </div>

      {/* Card */}
      <motion.div
        className="flex-1 glass-card p-5"
        whileHover={{ scale: 1.02, boxShadow: `0 0 20px ${cfg.color}22` }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 md:hidden">
            <span style={{ color: cfg.color }}>{cfg.icon}</span>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded-md"
            style={{ background: cfg.bg, color: cfg.color }}>
            {item.year}
          </span>
        </div>
        <h4 className="text-bio-50 font-bold text-base mb-1">{item.title}</h4>
        <p className="font-medium text-sm mb-2" style={{ color: cfg.color }}>{item.org}</p>
        <p className="text-bio-300 text-sm leading-relaxed">{item.desc}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineH = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5 blur-3xl pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, #14b8a6, transparent)' }} />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyan-700 text-sm font-mono tracking-widest uppercase mb-3">04. Experience</p>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle text-bio-200 mt-3">ประสบการณ์และเส้นทางในสายชีวการแพทย์</p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-bio-600/30">
            <motion.div
              className="w-full rounded-full"
              style={{
                height: lineH,
                background: 'linear-gradient(180deg, #0284c7, #059669)',
              }}
            />
          </div>

          <div className="flex flex-col gap-8">
            {experience.map((item, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <TimelineItem item={item} index={i} isLeft={i % 2 === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
