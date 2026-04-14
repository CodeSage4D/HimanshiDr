"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background py-24 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-cyan-500 font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journey
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <section>
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-8">
              PRIVACY <span className="text-gradient-cyan">POLICY.</span>
            </h1>
            <p className="text-body/60 text-lg font-light leading-relaxed">
              Last updated: April 14, 2026
            </p>
          </section>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-body/80 font-light leading-loose">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">1. Information Collection</h2>
              <p>
                We collect information that you provide directly to us through this portfolio, including your name, email address, and any messages sent via our selective inquiry forms. This data is collected solely to facilitate professional clinical partnerships and elite consultations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">2. Use of Information</h2>
              <p>
                As an elite Ayurvedic physician's practice, data privacy is paramount. Your information is used only to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to consultation inquiries.</li>
                <li>Coordinate clinical case reviews or partnerships.</li>
                <li>Ensure a personalized healing experience.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">3. Data Security & Storage</h2>
              <p>
                We implement state-of-the-art security measures to protect your personal data. We do not sell, trade, or otherwise transfer your information to outside parties. Your clinical interests are protected with the same precision as our medical treatments.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">4. Digital Analytics</h2>
              <p>
                We use minimal, privacy-focused analytics to understand how patients and partners interact with our "Healing Aura" engine. This help us refine the storytelling experience without compromising your individual privacy.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
