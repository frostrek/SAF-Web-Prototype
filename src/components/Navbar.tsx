"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { id: "products", label: "Products", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "story", label: "Story", num: "03" },
  { id: "plant", label: "Plant", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

const menuVariants = {
  closed: { x: "100%" },
  open: {
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const linkVariants = {
  closed: { x: 40, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(`#${entry.target.id}`);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    });
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center group">
            <img src="/logo.ico" alt="Aqua/Feed Logo" className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.id}
                to={`/#${l.id}`}
                className={`text-sm font-medium transition-colors relative group ${
                  activeSection === `#${l.id}`
                    ? "text-foreground"
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                <span className="text-[10px] font-mono text-muted-foreground mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {l.num}
                </span>
                {l.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-foreground"
                  initial={false}
                  animate={{ width: activeSection === `#${l.id}` ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>
          <Link
            to="/#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          <button
            className="md:hidden p-2 relative z-50"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        <motion.div
          style={{ scaleX }}
          className="origin-left h-px bg-accent"
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <nav className="flex flex-col justify-center h-full p-12 gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.id}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                >
                  <Link
                    to={`/#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-semibold py-3 border-b border-border flex items-baseline gap-4 group"
                  >
                    <span className="text-xs font-mono text-muted-foreground">{l.num}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2">{l.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};