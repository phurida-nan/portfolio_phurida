// src/components/BioBackground.jsx
// Lightweight parallax backgrounds shared by portfolio sections.
import { motion, useScroll, useTransform } from 'framer-motion';

const variants = {
  about: {
    y: [-86, 86],
    yNear: [64, -64],
    xNear: [-20, 28],
    accent: '#0ea5e9',
    secondary: '#10b981',
    opacity: 0.58,
  },
  experience: {
    y: [-72, 78],
    yNear: [54, -70],
    xNear: [24, -22],
    accent: '#0284c7',
    secondary: '#14b8a6',
    opacity: 0.48,
  },
  work: {
    y: [-66, 74],
    yNear: [58, -62],
    xNear: [-28, 22],
    accent: '#0f766e',
    secondary: '#0ea5e9',
    opacity: 0.5,
  },
};

function AboutPattern({ accent, secondary }) {
  return (
    <svg className="absolute right-[-9rem] top-8 hidden h-[560px] w-[720px] sm:block" viewBox="0 0 720 560" fill="none">
      <path d="M92 40 C260 128 188 236 360 302 C538 370 454 482 642 532" stroke={accent} strokeWidth="2" strokeOpacity="0.28" />
      <path d="M202 28 C372 118 300 230 468 292 C642 356 562 464 704 516" stroke={secondary} strokeWidth="2" strokeOpacity="0.25" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <g key={i} opacity="0.42">
          <line x1={118 + i * 76} y1={70 + i * 68} x2={214 + i * 72} y2={55 + i * 66} stroke={i % 2 ? secondary : accent} strokeWidth="2" />
          <circle cx={118 + i * 76} cy={70 + i * 68} r="5" fill={accent} fillOpacity="0.32" />
          <circle cx={214 + i * 72} cy={55 + i * 66} r="5" fill={secondary} fillOpacity="0.32" />
        </g>
      ))}
      <path d="M24 420 H164 M58 386 H214 M96 454 H284" stroke={accent} strokeWidth="1.5" strokeOpacity="0.18" />
    </svg>
  );
}

function ExperiencePattern({ accent, secondary }) {
  return (
    <svg className="absolute inset-x-0 top-8 hidden h-[680px] w-full sm:block" viewBox="0 0 1200 680" fill="none" preserveAspectRatio="none">
      <path d="M0 172 H1200 M0 342 H1200 M0 512 H1200" stroke={accent} strokeOpacity="0.1" />
      <path d="M190 0 V680 M462 0 V680 M728 0 V680 M1016 0 V680" stroke={secondary} strokeOpacity="0.08" />
      {[120, 360, 620, 890].map((x, i) => (
        <g key={x} opacity="0.44">
          <rect x={x} y={94 + (i % 2) * 58} width="180" height="86" rx="16" stroke={i % 2 ? secondary : accent} strokeOpacity="0.28" />
          <path d={`M${x + 26} ${126 + (i % 2) * 58} H${x + 112}`} stroke={accent} strokeOpacity="0.28" strokeWidth="2" />
          <path d={`M${x + 26} ${150 + (i % 2) * 58} H${x + 142}`} stroke={secondary} strokeOpacity="0.22" strokeWidth="2" />
        </g>
      ))}
      <path d="M84 580 C246 486 382 620 540 514 C682 418 824 530 1032 412" stroke={secondary} strokeWidth="2" strokeOpacity="0.22" />
    </svg>
  );
}

function WorkPattern({ accent, secondary }) {
  return (
    <svg className="absolute left-[-7rem] top-0 hidden h-[760px] w-[820px] sm:block" viewBox="0 0 820 760" fill="none">
      <path d="M94 108 H268 V206 H420 V318 H610" stroke={accent} strokeWidth="2" strokeOpacity="0.22" />
      <path d="M40 396 H168 V312 H314 V468 H540 V604 H742" stroke={secondary} strokeWidth="2" strokeOpacity="0.2" />
      <path d="M92 602 C142 602 142 552 192 552 C242 552 242 652 292 652 C342 652 342 552 392 552 C442 552 442 602 492 602 H700" stroke={accent} strokeWidth="2" strokeOpacity="0.24" />
      {[94, 268, 420, 610, 168, 314, 540, 742].map((x, i) => (
        <circle key={`${x}-${i}`} cx={x} cy={i < 4 ? [108, 206, 318, 318][i] : [396, 312, 468, 604][i - 4]} r="7" fill={i % 2 ? secondary : accent} fillOpacity="0.28" />
      ))}
      <rect x="536" y="84" width="190" height="110" rx="18" stroke={secondary} strokeOpacity="0.22" />
      <path d="M574 126 H680 M574 154 H650" stroke={secondary} strokeWidth="2" strokeOpacity="0.2" />
    </svg>
  );
}

export default function BioBackground({ variant = 'about', targetRef }) {
  const config = variants[variant] || variants.about;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], config.y);
  const yNear = useTransform(scrollYProgress, [0, 1], config.yNear);
  const xNear = useTransform(scrollYProgress, [0, 1], config.xNear);
  const scaleNear = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.08, 0.98]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'linear-gradient(120deg, rgba(255,255,255,0.55), transparent 44%), linear-gradient(180deg, rgba(14,165,233,0.04), rgba(16,185,129,0.05))',
        }}
      />
      <motion.div style={{ y: yNear }} className="absolute inset-0 bg-grid opacity-35 will-change-transform" />
      <motion.div style={{ y, opacity: config.opacity }} className="absolute inset-0 will-change-transform">
        {variant === 'about' && <AboutPattern accent={config.accent} secondary={config.secondary} />}
        {variant === 'experience' && <ExperiencePattern accent={config.accent} secondary={config.secondary} />}
        {variant === 'work' && <WorkPattern accent={config.accent} secondary={config.secondary} />}
      </motion.div>
      <motion.div
        style={{ x: xNear, y: yNear, scale: scaleNear }}
        className="absolute bottom-10 right-[-7rem] hidden h-52 w-52 rounded-full border border-cyan-600/15 bg-white/20 shadow-[0_24px_80px_rgba(14,165,233,0.12)] backdrop-blur-sm will-change-transform md:block"
      />
      <motion.div
        style={{ x: xNear, y }}
        className="absolute left-[-5rem] top-28 hidden h-32 w-32 rounded-3xl border border-emerald-600/15 bg-white/20 backdrop-blur-sm will-change-transform lg:block"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/20" />
    </div>
  );
}
