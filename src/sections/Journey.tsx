"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Stethoscope, Sparkles } from "lucide-react";

const milestones = [
  {
    icon: <GraduationCap />,
    year: "2021",
    title: "The Genesis",
    desc: "Commenced BAMS journey, exploring the depth of Ayurvedic sciences.",
  },
  {
    icon: <Award />,
    year: "2023",
    title: "Academic Excellence",
    desc: "Top performer in Samhita and Basic Principles of Ayurveda.",
  },
  {
    icon: <Stethoscope />,
    year: "2025",
    title: "Clinical Exposure",
    desc: "Intensive clinical rotations, focusing on patient-centric holistic healing.",
  },
  {
    icon: <Sparkles />,
    year: "2026",
    title: "The Future",
    desc: "Final Year BAMS Scholar – Preparing to heal the world.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-32 px-6 bg-background transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Evolution</span>
          <motion.h2 className="text-5xl font-black text-foreground md:text-7xl tracking-tighter">
            A PATH OF <br />
            <span className="text-gradient-cyan">PRECISION.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 dark:bg-white/5 md:-translate-x-1/2" />

          <div className="space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="text-6xl font-black text-cyan-500/10 mb-4">{item.year}</span>
                    <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{item.title}</h3>
                    <p className={`text-body/60 font-light leading-relaxed max-w-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right text-center'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-background -translate-x-[7.5px] md:-translate-x-2 z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />

                <div className="flex-1 md:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
