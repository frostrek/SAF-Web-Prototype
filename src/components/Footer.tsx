"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = ["Products", "About", "Story", "Plant", "Contact"];
const socialLinks = ["LinkedIn", "Instagram", "X / Twitter"];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20vw] font-bold tracking-tight text-background/[0.03] whitespace-nowrap">
          AQUA/FEED
        </span>
      </div>

      <div className="container py-16 relative">
        <div className="grid grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5"
          >
            <div className="font-display text-3xl font-bold tracking-tight mb-4">
              AQUA<span className="text-background/50">/</span>FEED
            </div>
            <p className="text-background/60 max-w-sm">
              Specialised aquatic feeds and contract pet-food manufacturing,
              produced in Hermanus, South Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-6 md:col-span-3"
          >
            <div className="text-xs uppercase tracking-widest text-background/50 mb-4">Navigate</div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l}>
                  <Link
                    to={`/#${l.toLowerCase()}`}
                    className="group relative inline-block overflow-hidden"
                  >
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {l}
                    </span>
                    <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full text-accent">
                      {l}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-6 md:col-span-2"
          >
            <div className="text-xs uppercase tracking-widest text-background/50 mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Cnr Church &amp; Still Rd</li>
              <li>Hermanus, ZA</li>
              <li>+27 28 313 8581</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 md:col-span-2"
          >
            <div className="text-xs uppercase tracking-widest text-background/50 mb-4">Social</div>
            <ul className="space-y-2">
              {socialLinks.map((s) => (
                <li key={s}>
                  <a href="#" className="group relative inline-block overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      {s}
                    </span>
                    <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full text-accent">
                      {s}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Aqua/Feed. All rights reserved.</span>
          <span>B-BBEE Level 3 Certified</span>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-background/50 hover:text-background transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
