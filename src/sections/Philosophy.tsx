"use client";

import { motion } from "framer-motion";
import { Leaf, Wind, Flame, Droplets } from "lucide-react";

const principles = [
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Nature's Rhythm",
    desc: "Aligning the body with natural cycles and seasonal shifts.",
    color: "bg-emerald-500",
  },
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Vata (Space & Air)",
    desc: "Restoring movement, creativity, and nervous system balance.",
    color: "bg-blue-400",
  },
  {
    icon: <Flame className="h-6 w-6" />,
    title: "Pitta (Fire & Water)",
    desc: "Managing metabolism, digestion, and systemic clarity.",
    color: "bg-orange-500",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Kapha (Earth & Water)",
    desc: "Building stability, immunity, and structural integrity.",
    color: "bg-teal-500",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-foreground md:text-7xl tracking-tighter"
          >
            OUR <span className="text-gradient-cyan text-glow">PHILOSOPHY.</span>
          </motion.h2>
          <p className="mt-8 text-xl text-body/60 max-w-2xl font-light">
            Beyond treatment, we facilitate a biological renaissance through the synergy of nature and science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[40px] bg-white dark:bg-black border border-slate-100 dark:border-white/5 neon-hover group"
            >
              <div className="mb-8 w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shadow-[0_0_20px_rgba(0,240,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                <div className="text-cyan-400">
                  {p.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-foreground mb-4">{p.title}</h3>
              <p className="text-body/60 font-light leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Structural Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -rotate-12 pointer-events-none" />
    </section>
  );
}
