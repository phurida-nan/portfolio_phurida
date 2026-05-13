// src/components/Projects.jsx
// Category-first case study layout
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, ArrowUpRight, Cpu, Database, Star } from 'lucide-react';
import { projects } from '../data/portfolioData';

const colorMap = {
  cyan: { border: 'rgba(14,165,233,0.22)', text: '#0369a1', glow: '0 18px 40px rgba(14,165,233,0.14)' },
  teal: { border: 'rgba(20,184,166,0.22)', text: '#0f766e', glow: '0 18px 40px rgba(20,184,166,0.14)' },
  emerald: { border: 'rgba(16,185,129,0.22)', text: '#047857', glow: '0 18px 40px rgba(16,185,129,0.14)' },
  indigo: { border: 'rgba(20,184,166,0.22)', text: '#0f766e', glow: '0 18px 40px rgba(20,184,166,0.14)' },
  rose: { border: 'rgba(16,185,129,0.22)', text: '#047857', glow: '0 18px 40px rgba(16,185,129,0.14)' },
  sky: { border: 'rgba(14,165,233,0.22)', text: '#0369a1', glow: '0 18px 40px rgba(14,165,233,0.14)' },
  amber: { border: 'rgba(16,185,129,0.22)', text: '#047857', glow: '0 18px 40px rgba(16,185,129,0.14)' },
};

const workGroups = [
  {
    title: 'Medical Devices',
    summary: 'Wearable and therapeutic devices built around clinical needs.',
    match: 'Device',
    icon: <Cpu className="h-5 w-5" />,
    color: '#0369a1',
    bg: 'rgba(14,165,233,0.1)',
    border: 'rgba(14,165,233,0.24)',
  },
  {
    title: 'Clinical Analytics',
    summary: 'Signal processing and prediction systems for health decision support.',
    match: 'Analytics',
    icon: <Activity className="h-5 w-5" />,
    color: '#0f766e',
    bg: 'rgba(20,184,166,0.1)',
    border: 'rgba(20,184,166,0.24)',
  },
  {
    title: 'Hospital Systems',
    summary: 'Operational tools for equipment tracking, calibration, and accountability.',
    match: 'System',
    icon: <Database className="h-5 w-5" />,
    color: '#047857',
    bg: 'rgba(16,185,129,0.1)',
    border: 'rgba(16,185,129,0.24)',
  },
];

function ProjectCard({ project, featured = false, index }) {
  const c = colorMap[project.color] || colorMap.cyan;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`glass-card group/card overflow-hidden ${featured ? 'lg:col-span-2' : ''}`}
      whileHover={{ y: -4, boxShadow: c.glow }}
    >
      <div className={`grid h-full ${featured ? 'lg:grid-cols-[1.12fr_0.88fr]' : ''}`}>
        {project.image && (
          <div className={`${featured ? 'h-60 sm:h-72 lg:h-full' : 'h-52 sm:h-60'} overflow-hidden bg-bio-700/20`}>
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
            />
          </div>
        )}

        <div className="flex h-full flex-col p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs font-semibold" style={{ color: c.text }}>
              {project.category}
            </span>
            {project.featured && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: `${c.text}12`, color: c.text, border: `1px solid ${c.border}` }}
              >
                <Star className="h-3.5 w-3.5" />
                Featured
              </span>
            )}
          </div>

          <h3 className={`${featured ? 'text-xl sm:text-2xl' : 'text-lg'} font-bold leading-tight text-bio-50`}>
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-bio-300">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
              <span
                key={tag}
                className="rounded-lg px-2.5 py-1 text-xs font-semibold"
                style={{ background: `${c.text}10`, border: `1px solid ${c.border}`, color: c.text }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <button className="inline-flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: c.text }}>
              View Case Study
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function WorkGroup({ group, index }) {
  const items = projects.filter((project) => project.category.includes(group.match));

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="space-y-5"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{ background: group.bg, color: group.color, border: `1px solid ${group.border}` }}
        >
          {group.icon}
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-bio-50 sm:text-2xl">{group.title}</h3>
            <span
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{ background: group.bg, color: group.color }}
            >
              {items.length} projects
            </span>
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-bio-300">{group.summary}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((project, projectIndex) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={projectIndex === 0}
            index={projectIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden py-20 lg:py-32">
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #14b8a6, transparent 70%)' }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-cyan-700">03. Projects</p>
          <h2 className="section-title">
            My <span className="gradient-text">Work</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600" />
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          {workGroups.map((group, index) => (
            <WorkGroup key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
