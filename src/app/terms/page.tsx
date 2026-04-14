"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
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
              TERMS & <span className="text-gradient-cyan">CONDITIONS.</span>
            </h1>
            <p className="text-body/60 text-lg font-light leading-relaxed">
              Effective Date: April 14, 2026
            </p>
          </section>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-body/80 font-light leading-loose">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">1. Elite Professional Services</h2>
              <p>
                The information provided on this portfolio is for professional showcasing and preliminary consultation inquiries. It does not constitute immediate medical advice. Dr. Himanshi Gupta provides elite clinical services under specific partnership agreements and clinical protocols.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">2. Use of Digital Imagery</h2>
              <p>
                All designs, animations (including the "Healing Aura" engine), and clinical showcase images are the intellectual property of Dr. Himanshi Gupta and the creative agency AURXON. Unauthorized reproduction of these assets is prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">3. Consultation Protocol</h2>
              <p>
                Sending an inquiry via the portfolio does not establish a doctor-patient relationship. Professional relationships are only formalized through signed clinical consent and initial assessment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">4. Limitation of Liability</h2>
              <p>
                While we strive for precision in all mathematical and clinical data presented, "Project Himanshi" serves as a narrative portfolio. We are not liable for decisions made based on exploratory digital content without direct clinical consultation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">5. Ethical Standards</h2>
              <p>
                Our practice adheres to the highest ethical standards of the BAMS (Bachelor of Ayurvedic Medicine and Surgery) fraternity, ensuring patient dignity and diagnostic integrity across all digital and physical interactions.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
