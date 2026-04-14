"use client";

import { useState, useEffect } from "react";

export const chapters = [
  { id: "hero", title: "The Vision", number: "0" },
  { id: "about", title: "The Origin", number: "1" },
  { id: "philosophy", title: "The Wisdom", number: "2" },
  { id: "journey", title: "The Evolution", number: "3" },
  { id: "services", title: "The Skill", number: "4" },
  { id: "care", title: "The Impact", number: "5" },
  { id: "showcase", title: "The Evidence", number: "6" },
  { id: "testimonials", title: "The Legacy", number: "7" },
];

export function useStory() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isJourneyActive, setIsJourneyActive] = useState(false);

  const startJourney = () => {
    setIsJourneyActive(true);
    goToChapter(1);
  };

  const goToChapter = (index: number) => {
    if (index >= 0 && index < chapters.length) {
      const element = document.getElementById(chapters[index].id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveChapter(index);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      chapters.forEach((chapter, index) => {
        const element = document.getElementById(chapter.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveChapter(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { activeChapter, startJourney, goToChapter, isJourneyActive };
}
