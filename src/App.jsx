// src/App.jsx
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load heavy sections
const About      = lazy(() => import('./components/About'));
const Projects   = lazy(() => import('./components/Projects'));
const Skills     = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact    = lazy(() => import('./components/Contact'));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-32">
    <div className="w-8 h-8 rounded-full border-2 border-cyan-600 border-t-transparent animate-spin" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
