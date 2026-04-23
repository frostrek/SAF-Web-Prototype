import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Products } from "@/components/Products";
import { About } from "@/components/About";

import { Story } from "@/components/Story";
import { Plant } from "@/components/Plant";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Aqua/Feed — Specialised Aquatic Feeds | Hermanus, ZA";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Level 3 B-BBEE certified manufacturer of high-quality aquatic feeds and contract pet foods for tilapia, trout, catfish, abalone and more."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <About />

      <Story />
      <Plant />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
