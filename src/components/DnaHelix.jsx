// src/components/DnaHelix.jsx
// Animated DNA Helix — uses Three.js/WebGL with CSS fallback if WebGL fails
import { useRef, useMemo, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

// ─── CSS Fallback DNA (no WebGL needed) ──────────────────────────────────────
function DnaFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated glowing orbs as fallback */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-xl opacity-30"
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            left: `${20 + (i % 3) * 30}%`,
            top: `${10 + i * 10}%`,
            background: i % 2 === 0
              ? 'radial-gradient(circle, #0ea5e9, transparent)'
              : 'radial-gradient(circle, #10b981, transparent)',
            animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
      {/* DNA strand SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {[...Array(15)].map((_, i) => {
          const y = i * 40;
          const phase = (i / 15) * Math.PI * 4;
          const x1 = 200 + Math.cos(phase) * 80;
          const x2 = 200 + Math.cos(phase + Math.PI) * 80;
          return (
            <g key={i}>
              <line
                x1={x1} y1={y} x2={x2} y2={y}
                stroke={i % 3 === 0 ? '#0ea5e9' : '#10b981'}
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              <circle cx={x1} cy={y} r="4" fill="#0ea5e9" fillOpacity="0.8" />
              <circle cx={x2} cy={y} r="4" fill="#10b981" fillOpacity="0.8" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ─── Three.js DNA (WebGL) ─────────────────────────────────────────────────────
let ThreeDNA = null;

function ThreeDNALoader() {
  // Dynamically import Three.js to avoid SSR issues
  return null;
}

// ─── Lazy Three.js Implementation ─────────────────────────────────────────────
import { lazy } from 'react';
const ThreeDNACanvas = lazy(() =>
  import('./DnaCanvas').catch(() => ({ default: DnaFallback }))
);

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function DnaHelix() {
  return (
    <ErrorBoundary fallback={<DnaFallback />}>
      <Suspense fallback={<DnaFallback />}>
        <ThreeDNACanvas />
      </Suspense>
    </ErrorBoundary>
  );
}
