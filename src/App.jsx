import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 font-inter text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">dev.portfolio</span>
          </a>
          <div className="hidden gap-6 sm:flex">
            <a href="#about" className="text-sm text-slate-300 hover:text-white">About</a>
            <a href="#projects" className="text-sm text-slate-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
