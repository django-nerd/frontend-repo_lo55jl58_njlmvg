import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat Platform',
    description:
      'WebSocket-powered chat with rooms, typing indicators, and message history; built with FastAPI and React.',
    tags: ['FastAPI', 'React', 'WebSocket', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    title: 'E-commerce Dashboard',
    description:
      'Admin dashboard with sales analytics, product management, and secure auth with JWT.',
    tags: ['FastAPI', 'React', 'Tailwind', 'Charts'],
    link: '#',
    github: '#',
  },
  {
    title: '3D Product Showcase',
    description:
      'Interactive 3D viewer with Spline and smooth scroll-based animations to highlight features.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 text-slate-400">A few highlights that show my range across frontend, backend, and 3D.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur transition hover:border-white/20 hover:from-white/10"
            >
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.github} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
