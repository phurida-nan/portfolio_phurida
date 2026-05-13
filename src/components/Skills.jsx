// src/components/Skills.jsx
// Skills section with animated progress bars and parallax
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { skills } from '../data/portfolioData';

function SkillBar({ name, level, icon, index, color = '#0284c7' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-bio-100 font-medium text-sm">{name}</span>
        </div>
        <span className="text-xs font-mono font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-bio-600/40 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: index * 0.08 + 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      {/* Bg parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #10b981, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)' }} />
      </motion.div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cyan-700 text-sm font-mono tracking-widest uppercase mb-3">03. Skills</p>
          <h2 className="section-title">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            className="glass-card p-8 col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-bio-50 font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-cyan-700">⚙️</span> Technical Skills
            </h3>
            <div className="space-y-5">
              {skills.technical.map((s, i) => (
                <SkillBar key={s.name} {...s} index={i} color="#0284c7" />
              ))}
            </div>
          </motion.div>

          {/* Lab Skills */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-bio-50 font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-emerald-600">🔬</span> Lab Skills
            </h3>
            <div className="space-y-5">
              {skills.lab.map((s, i) => (
                <SkillBar key={s.name} {...s} index={i} color="#059669" />
              ))}
            </div>

            {/* Soft Skills */}
            <div className="mt-8 pt-6 border-t border-bio-600/30">
              <h4 className="text-bio-200 font-semibold text-sm mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s, i) => (
                  <motion.span
                    key={s}
                    className="tag-teal text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.06 + 0.4 }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tool Badges Row */}
        <motion.div
          className="mt-10 glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-bio-300 text-sm font-medium mb-4">Tools & Technologies I Work With</p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'MATLAB',     emoji: '📊' },
              { name: 'Python',     emoji: '🐍' },
              { name: 'Arduino',    emoji: '⚡' },
              { name: 'TensorFlow', emoji: '🤖' },
              { name: 'SolidWorks', emoji: '⚙️' },
              { name: 'FIJI/ImageJ', emoji: '🖼️' },
              { name: 'R Studio',   emoji: '📈' },
              { name: 'LabVIEW',    emoji: '🔌' },
              { name: 'LaTeX',      emoji: '📄' },
              { name: 'Git',        emoji: '🌿' },
            ].map((tool, i) => (
              <motion.div
                key={tool.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-bio-200 hover:text-bio-50 transition-all duration-200 cursor-default"
                style={{ background: 'rgba(255,255,255,0.74)', border: '1px solid rgba(14,116,144,0.14)' }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(14,165,233,0.32)', color: '#0369a1' }}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 + 0.5 }}
              >
                <span>{tool.emoji}</span>
                <span>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
