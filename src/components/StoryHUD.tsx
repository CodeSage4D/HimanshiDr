"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStory, chapters } from "@/hooks/useStory";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export default function StoryHUD() {
  const { activeChapter, goToChapter, activeChapter: index } = useStory();

  return (
    <AnimatePresence>
      {activeChapter > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-[150] hidden xl:flex flex-col items-center gap-8"
        >
          <div className="flex flex-col gap-4">
            {chapters.map((chapter, i) => (
              <button
                key={chapter.id}
                onClick={() => goToChapter(i)}
                className="group relative flex items-center justify-end gap-4"
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-500 opacity-0 group-hover:opacity-100 ${i === activeChapter ? 'text-cyan-500' : 'text-body/40'}`}>
                  {chapter.title}
                </span>
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${i === activeChapter ? 'bg-cyan-500 scale-150 shadow-[0_0_10px_rgba(0,240,255,0.8)]' : 'bg-body/20 hover:bg-body/40'}`} />
              </button>
            ))}
          </div>

          <div className="h-20 w-[1px] bg-gradient-to-b from-cyan-500/50 to-transparent" />

          <div className="flex flex-col gap-2">
            <button 
              onClick={() => goToChapter(activeChapter - 1)}
              className="p-3 rounded-full bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 text-body/40 hover:text-cyan-500 transition-all active:scale-95"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button 
              onClick={() => goToChapter(activeChapter + 1)}
              className="p-3 rounded-full bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 text-body/40 hover:text-cyan-500 transition-all active:scale-95"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating Active Chapter Indicator (Mobile/Global) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] pointer-events-none"
      >
        <div className="glass px-6 py-3 rounded-full flex items-center gap-4 border border-white/20 shadow-2xl backdrop-blur-xl bg-white/5">
          <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/80">
            {chapters[activeChapter].title}
          </span>
          <div className="text-[10px] text-body/20 font-bold">
            {activeChapter + 1} / {chapters.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
