"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-background transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-4xl font-extrabold text-foreground tracking-tight md:text-5xl lg:text-6xl">
              Connect with <span className="text-gradient-cyan">Excellence.</span>
            </h3>
            <p className="text-body/60 mt-4 text-lg font-light max-w-2xl mx-auto">
              Available for elite consulting and selective clinical partnerships. Experience the future of Ayurvedic medicine.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center">
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-6 px-8 py-4 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 transition-all hover:border-cyan-500/50"
            >
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 text-foreground group-hover:text-cyan-400 transition-colors shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-body/40 font-bold">Call Now</p>
                <p className="text-lg font-bold text-foreground">+1 (234) 567-890</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:contact@himanshi.med"
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-6 px-8 py-4 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 transition-all hover:border-cyan-500/50"
            >
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 text-foreground group-hover:text-cyan-400 transition-colors shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-body/40 font-bold">Email Us</p>
                <p className="text-lg font-bold text-foreground">contact@himanshi.med</p>
              </div>
            </motion.a>
          </div>

          <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 dark:border-white/5 gap-8">
            <Link href="/" className="text-2xl font-heading font-black tracking-tighter text-foreground">
              HIMANSHI<span className="text-cyan-500">.MED</span>
            </Link>
            
            <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-body/40">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
            </div>

            <p className="text-[10px] text-body/20 font-bold uppercase tracking-[0.4em]">
              © 2026 HIMANSHI GUPTA • ELITE CARE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
