import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { DotBackgroundDemo } from "@/components/ui/dot-background";

export default function Home() {
  return (
    <DotBackgroundDemo>
      {/* Desktop Header - EXACTLY SAME */}
      <div className="fixed top-10 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-24">
          <Navbar />

          <a
            href="/resume.pdf"
            download
            className="flex h-[60px] w-[160px] items-center justify-center rounded-3xl border border-white/10 bg-zinc-900/70 text-base font-medium text-white backdrop-blur-xl transition hover:bg-zinc-800"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4 md:hidden">
        <div className="flex items-center justify-between">
          <Navbar />

          <a
            href="/resume.pdf"
            download
            className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/70 px-4 text-sm font-medium text-white backdrop-blur-xl"
          >
            Download CV
          </a>
        </div>
      </div>

      <Hero />

      <Skills />

      <Projects />

      <Contact />

      <footer className="pb-10 text-center text-sm text-zinc-500">
        © 2026 Aston Monteiro
      </footer>
    </DotBackgroundDemo>
  );
}