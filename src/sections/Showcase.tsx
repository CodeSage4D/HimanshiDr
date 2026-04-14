"use client";

import { motion } from "framer-motion";
import ChapterHeader from "@/components/ChapterHeader";

const projects = [
  {
    title: "Digestive Restoration",
    category: "Systemic Case",
    desc: "Complete metabolic realignment of a chronic IBS patient through personalized Pitta-balancing nutrition and clinical herbalism.",
  },
  {
    title: "Neurological Calm",
    category: "Autonomic Case",
    desc: "Successful management of anxiety-induced insomnia by restoring the Vata-rhythm using specialized Shirodhara protocols and adaptogenic care.",
  },
  {
    title: "Vascular Clarity",
    category: "Circulatory Case",
    desc: "Refining cardiovascular efficiency in a high-stress executive through traditional lipid-regulators and circadian-aligned lifestyle design.",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 px-6 bg-white dark:bg-background transition-colors duration-500 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <ChapterHeader 
          number="6"
          title="THE CLINICAL LEGACY"
          subtitle="Real healing is evidenced by real results. Explore selected clinical cases where the fusion of tradition and precision created profound impact."
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-[40px] border border-slate-100 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-700 bg-slate-50 dark:bg-white/5"
            >
              <div className="aspect-video bg-white dark:bg-black rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 flex items-center justify-center">
                 <span className="text-body/20 font-black tracking-widest uppercase text-xs">Clinical Archive {index + 1}</span>
              </div>

              <div>
                <span className="text-cyan-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-body/60 text-lg font-light leading-relaxed mb-8">
                  {project.desc}
                </p>
                <div className="w-12 h-1 bg-cyan-500/20 group-hover:w-full transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
