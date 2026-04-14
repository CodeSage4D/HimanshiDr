"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neuro-Link Interface",
    category: "Neurology",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    color: "#00F0FF",
  },
  {
    title: "Eco-Gen Therapeutics",
    category: "Biotech",
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?q=80&w=800&auto=format&fit=crop",
    color: "#00D1FF",
  },
  {
    title: "Hemo-Sync Analytics",
    category: "Diagnostics",
    image: "https://images.unsplash.com/photo-1579154273801-e91e35495566?q=80&w=800&auto=format&fit=crop",
    color: "#00A0FF",
  },
  {
    title: "Vital-Watch 2.0",
    category: "Consumer Tech",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop",
    color: "#00F0FF",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 px-6 bg-background overflow-hidden transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-extrabold text-foreground md:text-6xl tracking-tight"
            >
              Curated <span className="text-gradient-cyan">Innovations.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-body/60 text-lg font-light max-w-sm"
          >
            A showcase of elite medical technology integrations and groundbreaking clinical research.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neon-hover group relative cursor-pointer overflow-hidden rounded-[40px] bg-white dark:bg-black border border-slate-100 dark:border-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[0.5] dark:grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-40"
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-10 left-10 right-10 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>

                <div className="absolute top-10 right-10 w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              
              <div className="mt-8 mb-4 flex items-center justify-between px-10">
                <div>
                  <h3 className="text-xl font-bold text-foreground transition-colors uppercase tracking-tight">{project.title}</h3>
                  <p className="text-body/40 text-sm font-medium mt-1 uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="h-[1px] flex-grow mx-10 bg-black/5 dark:bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <span className="text-foreground/20 font-bold text-sm tracking-tighter">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
