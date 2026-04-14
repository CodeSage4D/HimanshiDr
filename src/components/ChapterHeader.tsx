"use client";

import { motion } from "framer-motion";

interface ChapterHeaderProps {
  number: string;
  title: string;
  subtitle: string;
}

export default function ChapterHeader({ number, title, subtitle }: ChapterHeaderProps) {
  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-6"
      >
        <span className="w-12 h-[1px] bg-cyan-500/50" />
        <span className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-[10px]">
          Chapter {number}
        </span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-8xl font-black text-foreground tracking-tighter leading-[0.9] mb-8"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-[0.2em] last:mr-0">
            {word === "EYES" || word === "PRECISION" || word === "IMPACT" || word === "WISDOM" ? (
              <span className="text-gradient-cyan">{word}</span>
            ) : word}
          </span>
        ))}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-body/60 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
