import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Training from "@/components/Training";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212] overflow-x-hidden">
      {/* 
        The scrollytelling section. 
        It defines a 500vh container.
      */}
      <div className="relative w-full">
        <Overlay />
        <ScrollyCanvas />
      </div>

      {/* 
        The content that appears after the 500vh scroll.
      */}
      <About />
      <Skills />
      <Training />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
