import OrganicAura from "@/components/OrganicAura";
import Navbar from "@/components/Navbar";
import StoryHUD from "@/components/StoryHUD";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Showcase from "@/sections/Showcase";
import Journey from "@/sections/Journey";
import Philosophy from "@/sections/Philosophy";
import Care from "@/sections/Care";
import Testimonials from "@/sections/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      <Navbar />
      <OrganicAura />
      <div className="relative z-10">
        <Hero />
        <About />
        <Philosophy />
        <Journey />
        <Services />
        <Care />
        <Showcase />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
