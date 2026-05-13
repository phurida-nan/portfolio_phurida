// src/components/ErrorBoundary.jsx
// Error Boundary to prevent Three.js / WebGL crashes from crashing the whole app
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.warn('[ErrorBoundary] Caught:', error.message);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback — animated DNA SVG instead of Three.js
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}
