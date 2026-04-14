"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Care() {
  return (
    <section id="care" className="py-32 px-6 relative bg-background overflow-hidden transition-colors duration-500">
      {/* Background Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
      />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", damping: 12 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-4 rounded-full bg-cyan-500/10 mb-10 border border-cyan-500/20"
        >
          <Heart className="h-10 w-10 text-cyan-400 fill-cyan-400/20" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-7xl font-bold text-white mb-12 leading-tight"
        >
          She doesn't just treat… <br />
          <span className="text-cyan-400 text-glow">she cares.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-2xl text-white/80 font-light italic">
            "Every heartbeat tells a story, and every story deserves a listener."
          </p>
          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  height: [20, 40, 20],
                  backgroundColor: ["#06B6D4", "#22D3EE", "#06B6D4"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-1.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
