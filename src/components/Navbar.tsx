"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Showcase", href: "#showcase" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Care", href: "#care" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 pointer-events-none"
    >
      <div className="group relative flex items-center gap-6 rounded-full border border-white/20 bg-white/5 px-6 py-3 shadow-[0_8px_32px_0_rgba(0,240,255,0.1)] backdrop-blur-xl transition-all duration-500 pointer-events-auto hover:border-cyan-500/30 hover:bg-white/10 dark:border-white/10 dark:bg-black/20 dark:hover:border-[#00F0FF]/30 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tighter text-navy-deep transition-colors duration-300 hover:text-cyan-600 dark:text-white">
          HIMANSHI<span className="font-extrabold text-cyan-600 group-hover:text-[#00F0FF] transition-colors">.MED</span>
        </Link>
        <div className="hidden h-6 w-[1px] bg-navy-deep/10 dark:bg-white/10 md:block" />
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-deep/80 transition-all duration-200 hover:scale-105 hover:text-cyan-600 lg:text-[11px] dark:text-white/60 dark:hover:text-[#00F0FF] dark:hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]"
            >
              {item.name}
            </Link>
          ))}
          
          <div className="h-6 w-[1px] bg-navy-deep/10 dark:bg-white/10" />

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100/50 text-navy-deep shadow-inner transition-all hover:scale-110 active:scale-95 dark:bg-white/5 dark:text-white dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-5 h-5" />}
          </button>

        </div>
      </div>
    </motion.nav>
  );
}
