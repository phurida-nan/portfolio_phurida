// src/components/Projects.jsx
// Projects section with filter tabs and 3D tilt cards
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Tag } from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';

const categories = ['All', 'Hardware', 'AI/ML', 'Research', 'Software'];

const colorMap = {
  cyan:    { gradient: 'from-cyan-600/20 to-cyan-700/5', border: 'rgba(14,165,233,0.22)', text: '#0369a1', glow: '0 18px 40px rgba(14,165,233,0.14)' },
  teal:    { gradient: 'from-teal-600/20 to-teal-700/5', border: 'rgba(20,184,166,0.22)', text: '#0f766e', glow: '0 18px 40px rgba(20,184,166,0.14)' },
  emerald: { gradient: 'from-emerald-600/20 to-emerald-700/5', border: 'rgba(16,185,129,0.22)', text: '#047857', glow: '0 18px 40px rgba(16,185,129,0.14)' },
};

function ProjectCard({ project, index }) {
  const c = colorMap[project.color] || colorMap.cyan;

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={400}
      glareEnable
      glareMaxOpacity={0.08}
      glareColor="#0ea5e9"
      glarePosition="all"
      glareBorderRadius="16px"
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        className="h-full relative rounded-2xl overflow-hidden cursor-default"
        style={{
          background: 'rgba(255,255,255,0.86)',
          backdropFilter: 'blur(16px)',
          border: `1px solid ${c.border}`,
          boxShadow: '0 16px 40px rgba(15,23,42,0.08)',
        }}
        whileHover={{ boxShadow: c.glow }}
      >
        {/* Top gradient stripe */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.gradient.replace('/20', '').replace('/5', '')}`}
          style={{ background: `linear-gradient(90deg, ${c.text}, transparent)` }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-semibold"
            style={{ background: `${c.text}22`, border: `1px solid ${c.border}`, color: c.text }}>
            ⭐ Featured
          </div>
        )}

        <div className="p-6">
          {/* Icon + year */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${c.text}15`, border: `1px solid ${c.border}` }}>
              {project.icon}
            </div>
            <span className="text-xs text-bio-300 font-mono">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-bio-50 font-bold text-lg mb-1">{project.title}</h3>
          <p className="text-sm font-medium mb-3" style={{ color: c.text }}>{project.titleTh}</p>

          {/* Description */}
          <p className="text-bio-300 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium"
                style={{ background: `${c.text}10`, border: `1px solid ${c.border}`, color: c.text }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-bio-600/30">
            <motion.button
              className="flex items-center gap-1.5 text-xs font-medium text-bio-300 hover:text-bio-50 transition-colors"
              whileHover={{ x: 3 }}
            >
              <Github className="w-3.5 h-3.5" /> Source
            </motion.button>
            <motion.button
              className="flex items-center gap-1.5 text-xs font-medium transition-colors"
              style={{ color: c.text }}
              whileHover={{ x: 3 }}
            >
              <ExternalLink className="w-3.5 h-3.5" /> View Project
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #14b8a6, transparent 70%)' }} />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-cyan-700 text-sm font-mono tracking-widest uppercase mb-3">02. Projects</p>
          <h2 className="section-title">
            My <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle text-bio-200 mt-3">
            โปรเจกต์และผลงานด้านวิศวกรรมชีวการแพทย์ที่ผ่านมา
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 mt-4" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'text-white font-semibold'
                  : 'text-bio-200 hover:text-bio-50'
              }`}
              style={activeFilter === cat
                ? { background: 'linear-gradient(135deg, #0284c7, #059669)', boxShadow: '0 12px 26px rgba(14,165,233,0.18)' }
                : { background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(14,116,144,0.14)' }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
