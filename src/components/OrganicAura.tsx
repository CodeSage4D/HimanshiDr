"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AuraBlob = ({ color, size, duration, delay, x, y }: { 
  color: string; 
  size: string; 
  duration: number; 
  delay: number;
  x: [number, number, number];
  y: [number, number, number];
}) => (
  <motion.div
    className="absolute rounded-full blur-[80px] md:blur-[120px] opacity-20 dark:opacity-30"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
    }}
    animate={{
      x: x,
      y: y,
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

export default function OrganicAura() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      
      {/* Dynamic Blobs */}
      <AuraBlob 
        color="#00F0FF" 
        size="45vw" 
        duration={20} 
        delay={0} 
        x={[-100, 100, -100]} 
        y={[-50, 50, -50]} 
      />
      <AuraBlob 
        color="#0070FF" 
        size="40vw" 
        duration={25} 
        delay={2} 
        x={[100, -100, 100]} 
        y={[50, -50, 50]} 
      />
      <AuraBlob 
        color="#00FF9C" 
        size="50vw" 
        duration={22} 
        delay={5} 
        x={[-50, 150, -50]} 
        y={[100, -100, 100]} 
      />


      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
}
