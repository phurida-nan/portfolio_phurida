// src/components/Contact.jsx
// Contact section with form and social links
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { Linkedin, Github } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — connect to EmailJS or Formspree in real use
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const contacts = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#0369a1' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: personalInfo.linkedin, color: '#0f766e' },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', value: 'github.com/yourusername', href: personalInfo.github, color: '#334155' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Pathum Thani, Thailand 🇹🇭', href: null, color: '#047857' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* bg */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #0ea5e9, transparent 70%)' }} />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-cyan-700 text-sm font-mono tracking-widest uppercase mb-3">05. Contact</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle text-bio-200 mt-3 mx-auto">
            สนใจร่วมงาน วิจัย หรือพูดคุย — ติดต่อได้เลยครับ!
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 mt-4 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-bio-50 font-bold text-xl mb-6">ข้อมูลการติดต่อ</h3>
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              >
                {c.href ? (
                  <motion.a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-card-hover rounded-2xl group"
                    whileHover={{ x: 6 }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color }}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs text-bio-300 font-medium">{c.label}</p>
                      <p className="text-bio-100 text-sm font-medium group-hover:text-bio-50">{c.value}</p>
                    </div>
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color }}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs text-bio-300 font-medium">{c.label}</p>
                      <p className="text-bio-100 text-sm font-medium">{c.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-bio-50 font-bold text-xl mb-6">ส่งข้อความถึงฉัน</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name',    label: 'ชื่อ (Name)',     type: 'text',  placeholder: 'Your name' },
                { name: 'email',   label: 'อีเมล (Email)',   type: 'email', placeholder: 'your@email.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-bio-200 text-sm font-medium mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl text-bio-100 text-sm outline-none transition-all duration-300 placeholder-bio-400"
                    style={{
                      background: 'rgba(255,255,255,0.8)',
                      border: '1px solid rgba(14,116,144,0.16)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(14,165,233,0.46)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(14,116,144,0.16)'}
                  />
                </div>
              ))}
              <div>
                <label className="block text-bio-200 text-sm font-medium mb-2">ข้อความ (Message)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello! I'd like to..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl text-bio-100 text-sm outline-none transition-all duration-300 placeholder-bio-400 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(14,116,144,0.16)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(14,165,233,0.46)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(14,116,144,0.16)'}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-solid py-3.5 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? (
                  <>✅ Sent Successfully!</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
