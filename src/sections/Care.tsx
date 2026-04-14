"use client";

import { motion } from "framer-motion";
import ChapterHeader from "@/components/ChapterHeader";

const carePrinciples = [
  {
    title: "Deep Empathy",
    subtitle: "Emotional Architecture",
    desc: "We understand that healing begins with feeling heard. Every clinical history is treated as a narrative of a life seeking balance.",
  },
  {
    title: "Clinical Rigor",
    subtitle: "Scientific Precision",
    desc: "Data-driven diagnostics meet ancient symptomatic analysis. We apply the most rigorous standards to every therapeutic intervention.",
  },
  {
    title: "Holistic Loop",
    subtitle: "Continuous Healing",
    desc: "Care doesn't end with a prescription. We create a continuous feedback loop between physician and patient for sustained wellness.",
  },
];

export default function Care() {
  return (
    <section id="care" className="py-32 px-6 bg-background transition-colors duration-500 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <ChapterHeader 
          number="5"
          title="THE CLINICAL IMPACT"
          subtitle="Our success is measured in the profound biological transformations of our patients. Experience healthcare that treats you as a whole, not a symptom."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {carePrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] rounded-[40px] overflow-hidden border border-slate-100 dark:border-white/5"
            >
              <div className="absolute inset-0 bg-slate-100 dark:bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-700" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <span className="text-cyan-500 font-bold uppercase tracking-widest text-xs mb-4">{principle.subtitle}</span>
                <h3 className="text-3xl font-black text-foreground mb-6 uppercase leading-tight">{principle.title}</h3>
                <p className="text-body/60 font-light leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  {principle.desc}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 p-8 transform group-hover:rotate-45 transition-transform duration-700">
                <div className="w-12 h-12 border-t-2 border-r-2 border-cyan-500/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
