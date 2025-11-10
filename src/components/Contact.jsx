import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Let’s work together
          </motion.h2>
          <p className="mt-4 text-slate-300">
            Have an idea or a role in mind? I’d love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-cyan-500/30 backdrop-blur focus:ring"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-cyan-500/30 backdrop-blur focus:ring"
                placeholder="jane@email.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-cyan-500/30 backdrop-blur focus:ring"
              placeholder="Tell me about your project or role..."
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">I respond within 1–2 business days.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px] hover:bg-cyan-400"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </div>
          {status && (
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-200">
              <Mail className="mr-2 inline h-4 w-4" /> {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
