// src/components/Experience.jsx
// Evidence-first experience dashboard
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, BriefcaseMedical, Coins, Trophy } from 'lucide-react';
import { experience, stats } from '../data/portfolioData';

const experienceGroups = [
  {
    title: 'Awards & Funding',
    summary: 'National competitions, grants, and innovation awards.',
    icon: <Trophy className="h-5 w-5" />,
    color: '#0369a1',
    bg: 'rgba(14,165,233,0.1)',
    border: 'rgba(14,165,233,0.24)',
    image: '/assets/images/award_tedfund2024.jpg',
    items: experience.filter((item) =>
      item.type === 'award' && /Award|Fund|Boost|JIP|STL/i.test(item.title)
    ),
  },
  {
    title: 'Hospital Experience',
    summary: 'Calibration service and medical equipment record work.',
    icon: <BriefcaseMedical className="h-5 w-5" />,
    color: '#047857',
    bg: 'rgba(16,185,129,0.1)',
    border: 'rgba(16,185,129,0.24)',
    image: '/assets/images/award_calib_samkoke.jpg',
    items: experience.filter((item) => item.type === 'work'),
  },
  {
    title: 'Selected Recognition',
    summary: 'Scholarship and conference recognition from the medical device field.',
    icon: <Award className="h-5 w-5" />,
    color: '#0f766e',
    bg: 'rgba(20,184,166,0.1)',
    border: 'rgba(20,184,166,0.24)',
    image: '/assets/images/award_scholarship2025.jpg',
    items: experience.filter((item) => /Scholarship|Conference|qualified/i.test(`${item.title} ${item.desc}`)),
  },
];

const statIcons = [<Trophy className="h-5 w-5" />, <Award className="h-5 w-5" />, <BriefcaseMedical className="h-5 w-5" />];

function StatCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="glass-card p-5"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-600/10 text-cyan-700">
        {statIcons[index] || <Coins className="h-5 w-5" />}
      </div>
      <div className="text-3xl font-black text-bio-50">
        {item.value}
        {item.suffix}
      </div>
      <div className="mt-1 text-sm font-medium text-bio-300">{item.label}</div>
    </motion.div>
  );
}

function ExperienceGroup({ group, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.12, duration: 0.55 }}
      className={`glass-card overflow-hidden ${index === 0 ? 'lg:col-span-2' : ''}`}
    >
      <div className={`grid h-full ${index === 0 ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''}`}>
        <div className={`${index === 0 ? 'h-60 sm:h-72 lg:h-full' : 'h-56 sm:h-64'} overflow-hidden bg-bio-700/20`}>
          <img src={group.image} alt={group.title} className="h-full w-full object-cover" />
        </div>

        <div className="flex h-full flex-col p-5 sm:p-6">
          <div className="mb-5 flex items-start gap-3 sm:gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{ background: group.bg, color: group.color, border: `1px solid ${group.border}` }}
            >
              {group.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-bio-50">{group.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-bio-300">{group.summary}</p>
            </div>
          </div>

          <div className="space-y-3">
            {group.items.slice(0, index === 0 ? 4 : 3).map((item) => (
              <div key={`${group.title}-${item.year}-${item.title}`} className="border-l-2 pl-4" style={{ borderColor: group.color }}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold" style={{ color: group.color }}>
                    {item.year}
                  </span>
                  {item.badge && <span className="text-xs font-semibold text-bio-300">{item.badge}</span>}
                </div>
                <p className="mt-1 text-sm font-bold text-bio-50">{item.title}</p>
                <p className="text-xs font-medium text-bio-300">{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const keyStats = stats.slice(0, 3);

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden py-20 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #14b8a6, transparent)' }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-cyan-700">02. Experience</p>
          <h2 className="section-title">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600" />
        </motion.div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keyStats.map((item, index) => (
            <StatCard key={item.label} item={item} index={index} />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experienceGroups.map((group, index) => (
            <ExperienceGroup key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
