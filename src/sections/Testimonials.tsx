"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Adrian Thorne",
    role: "Chief of Surgery, St. Jude Medical",
    text: "The integration of these diagnostic systems has revolutionized our patient intake process, reducing turnaround time by 40% while increasing precision.",
    avatar: "AT",
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, Bio-Logic Systems",
    text: "Working with this team has been a masterclass in elite medical design. Every interface feels intuitive, futuristic, and deeply reliable.",
    avatar: "SJ",
  },
  {
    name: "Prof. Michael Chen",
    role: "Healthcare Innovation Lead",
    text: "Truly redefining what healthcare experiences should look like in the 21st century. Elite, transparent, and undeniably powerful.",
    avatar: "MC",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6 bg-background overflow-hidden transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 dark:bg-cyan-600/10 blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 blur-[150px] translate-y-1/2" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Client Voices
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold text-foreground md:text-6xl"
          >
            Elite <span className="text-gradient-cyan">Endorsements.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="neon-hover relative p-10 rounded-[40px] bg-white dark:bg-black border border-slate-100 dark:border-white/5 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all group"
            >
              <div className="absolute top-10 right-10 text-slate-100 dark:text-white/5 group-hover:text-cyan-500/10 transition-colors">
                <Quote className="w-16 h-16" strokeWidth={3} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-cyan-500/20">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-lg tracking-tight">{testimonial.name}</h4>
                    <p className="text-cyan-600 dark:text-cyan-400/80 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-slate-500 dark:text-white/80 leading-relaxed font-light italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Hover Glow Edge */}
              <div className="absolute inset-0 rounded-[40px] border border-cyan-500/0 group-hover:border-cyan-500/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
