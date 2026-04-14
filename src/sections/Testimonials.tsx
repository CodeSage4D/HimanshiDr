"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Alok Verma",
    role: "Senior Consultant, AIIMS",
    content: "Dr. Himanshi's approach to clinical diagnostics bridges traditional symptomatic analysis with modern precision in a way rarely seen in the new generation of BAMS scholars.",
  },
  {
    name: "Sanjay Singhania",
    role: "Clinical Partner",
    content: "The level of empathy and data-driven rigor Dr. Himanshi brings to her practice has redefined our collaborative clinical outcomes.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-background transition-colors duration-500 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The Legacy</span>
            <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-tight mb-8">
              VOICES OF <br />
              <span className="text-gradient-cyan">TRUST.</span>
            </h2>
            <p className="text-body/60 text-lg font-light leading-relaxed max-w-md">
              The true testament to elite care is the trust of fellow clinicians and the transformations of those we heal.
            </p>
          </div>

          <div className="space-y-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-12 rounded-[40px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-cyan-500/10" />
                <p className="text-xl text-foreground font-medium italic leading-relaxed mb-8 relative z-10">
                  "{t.content}"
                </p>
                <div>
                  <p className="text-lg font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-body/40 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
