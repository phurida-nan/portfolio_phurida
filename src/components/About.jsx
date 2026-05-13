// src/components/About.jsx
// About section with parallax scroll, profile card, education timeline
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, MapPin, Mail } from 'lucide-react';
import BioBackground from './BioBackground';
import { personalInfo } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const cardX = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const cardY = useTransform(scrollYProgress, [0, 1], [42, -42]);
  const textY = useTransform(scrollYProgress, [0, 1], [24, -30]);
  const cardScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.97, 1.02, 0.99]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-20 lg:py-32">
      <BioBackground variant="about" targetRef={ref} />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-8 lg:mb-12"
        >
          <p className="text-cyan-700 text-sm font-mono tracking-widest uppercase mb-3">01. About</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 mt-4" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
          {/* Left — Profile Card with Mouse Tilt */}
          <motion.div
            style={{ x: cardX, y: cardY, scale: cardScale }}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            custom={0}
          >
            <motion.div
              className="relative glass-card p-5 text-center"
              whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-5 h-[320px] w-full max-w-[360px] sm:h-[380px] lg:h-[400px]">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-white overflow-hidden flex items-center justify-center">
                    <img src={personalInfo.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <h3 className="mb-1 text-lg font-bold text-bio-50 sm:text-xl">{personalInfo.name}</h3>
              <p className="gradient-text font-semibold mb-1">{personalInfo.titleEn}</p>
              <p className="text-bio-300 text-sm mb-4">{personalInfo.year}</p>

              {/* Info rows */}
              <div className="space-y-2.5 text-sm text-bio-200">
                <div className="flex items-center gap-3 justify-center">
                  <GraduationCap className="w-4 h-4 text-cyan-700 shrink-0" />
                  <span>{personalInfo.universityEn}</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pathum Thani, Thailand 🇹🇭</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Bio + Highlights */}
          <motion.div style={{ y: textY }} className="grid gap-6 lg:min-h-[560px] lg:grid-rows-[auto_1fr]">
            {/* Bio text */}
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={1}>
              <h3 className="mb-4 text-2xl font-bold leading-tight text-bio-50 sm:mb-5 sm:text-3xl">Medical devices, clinical evidence, hospital use.</h3>
              <div className="max-w-2xl space-y-3 text-bio-200 leading-relaxed">
                <p>{personalInfo.aboutText1}</p>
                <p>{personalInfo.aboutText2}</p>
                <p className="font-semibold text-bio-100">{personalInfo.aboutText3}</p>
              </div>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div
              className="grid gap-3"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              custom={2}
            >
              {[
                { icon: '📋', label: 'Clinical Study', desc: 'Protocol & IRB' },
                { icon: '💡', label: 'Device Value', desc: 'Pitch & market fit' },
                { icon: '⚡', label: 'Prototype', desc: 'Hardware control' },
                { icon: '🏥', label: 'Hospital Use', desc: 'Deployment work' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass-card-hover grid grid-cols-[3rem_1fr] items-center gap-4 p-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/10 text-2xl">{item.icon}</div>
                  <div>
                    <div className="text-bio-50 font-semibold text-sm">{item.label}</div>
                    <div className="text-bio-300 text-xs mt-1">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
