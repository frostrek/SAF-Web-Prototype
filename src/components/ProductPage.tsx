"use client";

import { motion, useMotionValue, useSpring, AnimatePresence, type Variants } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Phone, MapPin, LucideIcon, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode, useEffect, useRef, useCallback, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export interface ProductSection {
  title: string;
  intro?: string;
  bullets?: string[];
  paragraphs?: string[];
}

interface ProductPageProps {
  num: string;
  name: string;
  tagline: string;
  intro: string;
  sections: ProductSection[];
  Icon: LucideIcon;
  heroImage?: string;
  /** Gallery images displayed alongside the intro text. Import and pass them from the page file. */
  galleryImages?: string[];
}

const ACCENT = "#2FA8D5";

// --- Reusable Animations ---

const charVariant: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.03, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const SplitText = ({ text, className }: { text: string; className?: string }) => {
  let charIndex = 0;
  return (
    <span className={`block overflow-hidden ${className || ""}`}>
      {text.split("").map((char, i) => {
        const idx = charIndex++;
        return (
          <motion.span
            key={i}
            custom={idx}
            variants={charVariant}
            initial="hidden"
            animate="visible"
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
};

const MotionLink = motion.create(Link);

const MagneticButton = ({
  children,
  to,
  className,
}: {
  children: React.ReactNode;
  to: string;
  className: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * 0.3);
      y.set((e.clientY - cy) * 0.3);
    },
    [x, y]
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <MotionLink
      ref={ref as any}
      to={to}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </MotionLink>
  );
};

// --- Main Component ---

export const ProductPage = ({
  num,
  name,
  tagline,
  intro,
  sections,
  Icon,
  heroImage,
  galleryImages = [],
}: ProductPageProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    document.title = `${name} — Specialised Aquatic Feeds`;
    window.scrollTo(0, 0);
  }, [name]);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative h-[70vh] border-b border-border overflow-hidden noise">
        {heroImage && (
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={`${name}`}
              className="w-full h-full object-cover brightness-110"
            />
          </div>
        )}
      </section>

      {/* ═══════════════════ PRODUCT HEADER ═══════════════════ */}
      <section className="py-16 md:py-24 border-b border-border bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#products"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to all products
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-12">


              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance mb-10">
                <SplitText text={name} />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-foreground/80 max-w-3xl leading-relaxed"
              >
                {tagline}
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ INTRO + GALLERY ═══════════════════ */}
      <section className="py-20 md:py-28 border-b border-border relative overflow-hidden">

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Text column */}
            <div className="lg:col-span-6 xl:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.25em] text-foreground font-black"
              >
                <span className="w-8 h-px bg-foreground" />
                <span>Overview</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl leading-relaxed text-foreground/85 mb-10"
              >
                {intro}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm text-muted-foreground mb-6"
              >
                Speak directly with our technical team for tailored advice on the
                optimal formulation for your production system.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticButton
                  to="/#contact"
                  className="group inline-flex items-center gap-4 border border-foreground px-6 py-4 text-sm font-medium relative overflow-hidden transition-colors w-max"
                >
                  <span className="relative z-10 font-medium group-hover:text-background transition-colors duration-300">Request a Quote</span>
                  <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                    <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
                  </span>
                  <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </MagneticButton>
              </motion.div>
            </div>

            {/* Gallery column */}
            <div className="lg:col-span-6 xl:col-span-7">
              {galleryImages.length > 0 ? (
                <div className={`grid gap-4 ${galleryImages.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                  {galleryImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      className={`relative overflow-hidden border border-border cursor-pointer group ${
                        galleryImages.length === 1 ? "aspect-[16/10]" :
                        galleryImages.length === 3 && i === 0 ? "col-span-2 aspect-[16/9]" :
                        "aspect-square"
                      }`}
                      onClick={() => setLightboxImg(img)}
                    >
                      {/* Offset shadow */}
                      <div className="absolute -bottom-3 -right-3 w-full h-full bg-border -z-10" />
                      <img
                        src={img}
                        alt={`${name} — gallery image ${i + 1}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-end justify-end p-4">
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="text-xs uppercase tracking-widest text-background font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          View
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Placeholder — shows when no gallery images are provided */
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border border-dashed border-border bg-muted/20 aspect-[4/3] flex flex-col items-center justify-center gap-4"
                >
                  <Icon size={64} strokeWidth={0.5} className="text-muted-foreground/30" />
                  <p className="text-sm text-muted-foreground/50 font-mono">
                    Product images — add to galleryImages prop
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRODUCT SPECS / SECTIONS ═══════════════════ */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-16 text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="w-8 h-px bg-foreground" />
            <span>Product Range</span>
          </motion.div>

          <div className="space-y-0 border-t border-border">
            {sections.map((s, i) => {
              const isOpen = activeSection === i;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setActiveSection(isOpen ? null : i)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-center justify-between py-7 md:py-9 transition-colors">
                      <div className="flex items-center gap-6">
                        <span
                          className="font-mono text-xs tracking-widest transition-colors duration-300"
                          style={{ color: isOpen ? ACCENT : undefined }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className="font-display text-2xl md:text-4xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-2"
                          style={{ color: isOpen ? ACCENT : undefined }}
                        >
                          {s.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown
                          size={20}
                          className="text-muted-foreground group-hover:text-foreground transition-colors"
                        />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-0 md:pl-16 grid grid-cols-1 md:grid-cols-12 gap-8">
                          <div className="md:col-span-5">
                            {s.intro && (
                              <p className="text-base leading-relaxed text-foreground/80 mb-4">
                                {s.intro}
                              </p>
                            )}
                            {s.paragraphs?.map((p, idx) => (
                              <p key={idx} className="text-base leading-relaxed text-foreground/80 mb-4">
                                {p}
                              </p>
                            ))}
                          </div>
                          {s.bullets && (
                            <div className="md:col-span-7 md:border-l md:border-border md:pl-8">
                              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Available Sizes</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {s.bullets.map((b, bIdx) => (
                                  <motion.div
                                    key={b}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: bIdx * 0.05 }}
                                    className="flex items-start gap-3 p-3 border border-border bg-muted/10 hover:border-foreground/20 transition-colors group"
                                  >
                                    <span
                                      className="mt-1.5 w-1.5 h-1.5 shrink-0 transition-transform duration-200 group-hover:rotate-45"
                                      style={{ background: ACCENT }}
                                    />
                                    <span className="text-sm text-foreground/90">{b}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ GMO NOTICE ═══════════════════ */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container">
          <p className="text-xs md:text-sm text-muted-foreground max-w-4xl leading-relaxed">
            Please note that our products may contain Genetically Modified Organisms (GMO).
            We believe that the responsible use of GMOs contributes to agricultural sustainability
            through reduced pesticide use, greater per hectare production yields and reduced water consumption.
          </p>
        </div>
      </section>

      {/* ═══════════════════ CONTACT BLOCK ═══════════════════ */}
      <section id="contact-form" className="py-20 md:py-28 border-b border-border relative">

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="w-8 h-px bg-foreground" />
            <span>Get in touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-2xl text-balance"
          >
            Speak with our team.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <ContactCard
                eyebrow="The Office"
                name="Cnr of Church & Still Rd"
                role="Hermanus, South Africa"
                tel="+27 28 313 8581"
                icon={<MapPin size={20} />}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <ContactCard
                eyebrow="Sales"
                name="Ryan Weaver"
                role="Technical Support & Sales Manager"
                tel="+27 28 313 8581"
                cell="+27 83 235 8027"
                icon={<Phone size={20} />}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <ContactCard
                eyebrow="Director"
                name="Japie Engelbrecht"
                role="Managing Director"
                tel="+27 28 313 8588"
                icon={<Phone size={20} />}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ═══════════════════ LIGHTBOX ═══════════════════ */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg flex items-center justify-center p-8 cursor-pointer"
          >
            <motion.img
              src={lightboxImg}
              alt="Enlarged product view"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute top-6 right-6 text-xs uppercase tracking-widest text-muted-foreground font-mono">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Contact Card ---

const ContactCard = ({
  eyebrow,
  name,
  role,
  tel,
  cell,
  icon,
}: {
  eyebrow: string;
  name: string;
  role: string;
  tel: string;
  cell?: string;
  icon: ReactNode;
}) => (
  <div className="bg-background p-8 md:p-10 flex flex-col gap-6 min-h-[260px] group transition-colors hover:bg-muted/30">
    <div className="flex items-center justify-between">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</span>
      <span className="text-foreground/60 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent">{icon}</span>
    </div>
    <div className="mt-auto">
      <h3 className="font-display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">{name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{role}</p>
      <div className="mt-4 space-y-1 text-sm text-foreground/80">
        <div>Tel: {tel}</div>
        {cell && <div>Cell: {cell}</div>}
      </div>
    </div>
  </div>
);
