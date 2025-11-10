import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Sparkles } from 'lucide-react';

const skills = [
  { icon: <Code2 className="h-5 w-5" />, label: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: <Database className="h-5 w-5" />, label: 'Backend', items: ['FastAPI', 'MongoDB', 'REST', 'Auth/JWT'] },
  { icon: <Sparkles className="h-5 w-5" />, label: 'DX', items: ['Testing', 'CI/CD', 'Perf', 'A11y'] },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-slate-300"
          >
            I’m a full stack web developer who enjoys bridging elegant interfaces with solid backend
            architecture. I specialize in creating interactive products that feel alive, with an eye for
            performance and accessibility.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-200">
                {s.icon}
                <span>{s.label}</span>
              </div>
              <ul className="mt-2 space-y-1 text-slate-300">
                {s.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
