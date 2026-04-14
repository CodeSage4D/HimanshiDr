"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Zap, ShieldCheck } from "lucide-react";
import ChapterHeader from "@/components/ChapterHeader";

const services = [
  {
    icon: <Brain />,
    title: "Neuro-Equilibrium",
    desc: "Advanced protocols for neurological harmony, cognitive clarity, and autonomic resilience through systemic herbal precision.",
  },
  {
    icon: <Heart />,
    title: "Vascular Vitality",
    desc: "Optimizing cardiovascular performance and metabolic circulation using ancient lipid-management wisdom.",
  },
  {
    icon: <Zap />,
    title: "Metabolic Mastery",
    desc: "Refining digestive efficiency and systemic energy through customized clinical nutrition and biochemical balancing.",
  },
  {
    icon: <ShieldCheck />,
    title: "Immuno-Architecture",
    desc: "Building deep biological resilience and structural integrity against modern environmental stressors.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-white dark:bg-background transition-colors duration-500 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <ChapterHeader 
          number="4"
          title="THE CLINICAL SKILL"
          subtitle="True expertise is the synergy of diagnostic depth and therapeutic precision. We don't just treat; we architect biological longevity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[40px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group cursor-pointer transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black flex items-center justify-center text-cyan-500 mb-8 border border-slate-100 dark:border-white/10 shadow-lg group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">{service.title}</h3>
              <p className="text-body/60 text-lg font-light leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="flex items-center gap-4 text-cyan-500 font-bold uppercase tracking-widest text-xs">
                <span>View Protocol</span>
                <div className="h-[1px] w-8 bg-cyan-500/30 group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
