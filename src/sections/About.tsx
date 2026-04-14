"use client";

import { motion } from "framer-motion";
import ChapterHeader from "@/components/ChapterHeader";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white dark:bg-background transition-colors duration-500 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <ChapterHeader 
          number="1"
          title="THE SPIRIT OF HEALING"
          subtitle="Beyond the stethoscope and the prescription lies a soul dedicated to the profound dance of biological equilibrium. This is the origin of our clinical excellence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-slate-100 dark:border-white/5 shadow-2xl">
              <div className="aspect-[4/5] bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                 <span className="text-body/20 font-black tracking-widest uppercase text-2xl">Visual Archive 01</span>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-foreground tracking-tight uppercase">Dr. Himanshi Gupta</h3>
              <p className="text-body/60 text-lg leading-loose font-light">
                As a BAMS scholar with a focus on evidence-based Ayurveda, I categorize healthcare not just as a service, but as an elevated art form. My journey began with a simple question: How can ancient wisdom be refined through the lens of modern scientific precision?
              </p>
              <p className="text-body/60 text-lg leading-loose font-light">
                Today, I bridge the gap between thousands of years of traditional healing and the rapid evolution of contemporary medicine. My practice is built on the pillars of diagnostic accuracy, biological harmony, and deep patient empathy.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                <span className="text-4xl font-black text-cyan-500 block mb-2">98%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-body/40">Clinical Precision</span>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                <span className="text-4xl font-black text-cyan-500 block mb-2">BAMS</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-body/40">Medicine Scholar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
