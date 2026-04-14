"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useStory } from "@/hooks/useStory";

const steps = [
  { id: 1, text: "Ancient wisdom.", sub: "Preserved for the modern age." },
  { id: 2, text: "Clinical precision.", sub: "Defined by evidence and care." },
  { id: 3, text: "Dr. Himanshi Gupta.", sub: "Elite Ayurvedic Physician" },
];

export default function Hero() {
  const [step, setStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { goToChapter } = useStory();

  useEffect(() => {
    if (step < steps.length) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [step]);

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center overflow-hidden">
      <AnimatePresence mode="wait">
        {step < steps.length ? (
          <motion.div
            key={`step-${step}`}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground/80 lowercase italic font-heading">
              {steps[step].text}
            </h2>
            <p className="text-sm md:text-lg text-body/60 uppercase tracking-[0.4em] font-medium">
              {steps[step].sub}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/5 px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 backdrop-blur-md neon-border">
                BAMS | Healthcare Innovator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-heading text-6xl font-extrabold tracking-tighter text-foreground md:text-8xl lg:text-9xl leading-[0.9]"
            >
              Redefining <br />
              <span className="text-gradient-cyan">Healthcare</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 max-w-2xl text-lg text-body dark:text-soft-blue/80 md:text-2xl font-light leading-relaxed"
            >
              Bridging ancient healing with modern scientific precision. 
              Experience the evolution of Ayurvedic excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-14"
            >
              <button
                onClick={() => goToChapter(1)}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-slate-900 dark:bg-white px-12 py-5 text-white dark:text-black transition-all active:scale-95 neon-hover cursor-pointer"
              >
                <span className="relative z-10 font-bold tracking-wider">Start the Journey</span>
                <div className="absolute inset-0 -z-10 translate-y-full bg-cyan-500 transition-transform duration-500 group-hover:translate-y-0" />
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  →
                </motion.span>
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator - Only show when complete */}
      {isComplete && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-7 rounded-full border-2 border-foreground/10 p-1 flex justify-center"
          >
            <div className="h-3 w-1.5 rounded-full bg-cyan-500/80 mt-1" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
