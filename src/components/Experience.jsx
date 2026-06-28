// src/components/Experience.jsx
// Full chronological timeline with photos + gallery section
import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Trophy, BriefcaseMedical, Award, X, ChevronLeft, ChevronRight } from 'lucide-react';
import BioBackground from './BioBackground';
import { experience, gallery, stats } from '../data/portfolioData';

const badgeStyles = {
  gold:    { bg: 'rgba(202,138,4,0.12)',  border: 'rgba(202,138,4,0.3)',  color: '#92400e' },
  silver:  { bg: 'rgba(148,163,184,0.15)',border: 'rgba(148,163,184,0.3)',color: '#475569' },
  fund:    { bg: 'rgba(22,163,74,0.1)',   border: 'rgba(22,163,74,0.28)', color: '#15803d' },
  pass:    { bg: 'rgba(14,165,233,0.1)',  border: 'rgba(14,165,233,0.28)',color: '#0369a1' },
  scholar: { bg: 'rgba(109,40,217,0.1)', border: 'rgba(109,40,217,0.28)',color: '#6d28d9' },
  service: { bg: 'rgba(234,88,12,0.1)',  border: 'rgba(234,88,12,0.28)', color: '#c2410c' },
  award:   { bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.28)',color: '#0369a1' },
};

function StatCard({ item, index }) {
  const icons = [
    <Trophy className="h-5 w-5" />,
    <Award className="h-5 w-5" />,
    <BriefcaseMedical className="h-5 w-5" />,
    <Trophy className="h-5 w-5" />,
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="glass-card p-5"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-600/10 text-cyan-700">
        {icons[index] || <Award className="h-5 w-5" />}
      </div>
      <div className="text-3xl font-black text-bio-50">{item.value}{item.suffix}</div>
      <div className="mt-1 text-sm font-medium text-bio-300">{item.label}</div>
    </motion.div>
  );
}

function TimelineItem({ item, index }) {
  const bs = badgeStyles[item.badgeType] || badgeStyles.pass;
  const isWork = item.type === 'work';
  const dotColor = isWork ? '#047857' : (item.badgeType === 'gold' ? '#b45309' : '#0369a1');

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="relative flex gap-4 sm:gap-6"
    >
      {/* Dot */}
      <div className="flex flex-col items-center">
        <div
          className="relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-sm"
          style={{ borderColor: dotColor }}
        >
          <div className="h-3 w-3 rounded-full" style={{ background: dotColor }} />
        </div>
        <div className="mt-1 w-0.5 flex-1 bg-slate-200" />
      </div>

      {/* Card */}
      <motion.div
        className="glass-card-hover mb-5 flex flex-1 flex-col gap-3 overflow-hidden p-0 sm:flex-row"
        whileHover={{ y: -2 }}
      >
        {/* Image */}
        <div className="h-40 w-full shrink-0 overflow-hidden rounded-t-2xl bg-slate-100 sm:h-auto sm:w-36 sm:rounded-l-2xl sm:rounded-tr-none">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.parentElement.innerHTML =
                `<div class="flex h-full w-full items-center justify-center text-slate-300 text-xs p-2 text-center">${item.image.split('/').pop()}</div>`;
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center gap-1.5 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="font-mono text-xs font-bold"
              style={{ color: dotColor }}
            >
              {item.year}
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ background: bs.bg, border: `1px solid ${bs.border}`, color: bs.color }}
            >
              {item.badge}
            </span>
          </div>
          <p className="text-sm font-bold leading-snug text-bio-50 sm:text-base">{item.title}</p>
          <p className="text-xs font-semibold text-bio-300">{item.org}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-bio-400">{item.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GalleryModal({ items, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative mx-4 max-h-[90vh] max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-7 w-7" />
        </button>
        <img
          src={items[current].img}
          alt={items[current].caption}
          className="max-h-[75vh] w-full rounded-2xl object-contain"
        />
        <div className="mt-3 flex items-center justify-between gap-4">
          <button onClick={prev} className="glass-card p-2 text-bio-50 hover:text-cyan-700 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <p className="flex-1 text-center text-sm font-medium text-white/80">{items[current].caption}</p>
          <button onClick={next} className="glass-card p-2 text-bio-50 hover:text-cyan-700 transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-white/40">{current + 1} / {items.length}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const statsY = useTransform(scrollYProgress, [0, 1], [34, -28]);
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden py-20 lg:py-32">
      <BioBackground variant="experience" targetRef={ref} />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-cyan-700">02. Experience</p>
          <h2 className="section-title">
            Awards &amp; <span className="gradient-text">Activities</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600" />
        </motion.div>

        {/* Stats */}
        <motion.div style={{ y: statsY }} className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={item.label} item={item} index={index} />
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experience.map((item, index) => (
            <TimelineItem key={`${item.year}-${item.title}`} item={item} index={index} />
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-cyan-700">Gallery</p>
          <h3 className="mb-2 text-2xl font-bold text-bio-50 sm:text-3xl">
            Activity <span className="gradient-text">Photos</span>
          </h3>
          <div className="mt-4 mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600" />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {gallery.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100"
                onClick={() => setModalIndex(index)}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.parentElement.innerHTML =
                      `<div class="flex h-full w-full items-center justify-center bg-slate-100 text-slate-300 text-xs p-2 text-center">${item.img.split('/').pop()}</div>`;
                  }}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-2.5 text-left text-xs font-medium leading-tight text-white">
                    {item.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalIndex !== null && (
          <GalleryModal
            items={gallery}
            startIndex={modalIndex}
            onClose={() => setModalIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
