"use client";

import { motion, useMotionValue, useSpring, useTransform, type Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect, useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import hero1 from "@/assets/hero_1.png";
import hero2 from "@/assets/hero_2.png";
import hero3 from "@/assets/hero_3.png";
import hero4 from "@/assets/hero_4.png";

const heroImages = [hero1, hero2, hero3, hero4];

const MotionLink = motion.create(Link);

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
    transition: { delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] },
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

export const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgX = useMotionValue(0);
  const imgY = useMotionValue(0);
  const smoothX = useSpring(imgX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(imgY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      imgX.set(((e.clientX - w / 2) / w) * -20);
      imgY.set(((e.clientY - h / 2) / h) * -15);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [imgX, imgY]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden noise">
      {/* Background carousel with mouse parallax + Ken Burns */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ x: smoothX, y: smoothY }}
          >
            <motion.img
              src={heroImages[currentImg]}
              alt="Aquatic feed manufacturing and marine life"
              className="w-full h-full object-cover scale-110"
              width={1920}
              height={1280}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
      </div>



      {/* Top meta */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-24 md:top-32 left-0 right-0"
      >
        <div className="container flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground/60 font-mono">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            EST. 2010
          </motion.span>
          <motion.span
            className="hidden md:inline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            B-BBEE LEVEL 3
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            HERMANUS / ZA
          </motion.span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-display font-bold text-[14vw] md:text-[9vw] lg:text-[8vw] leading-[0.9] tracking-tight">
              <SplitText text="Specialised" />
              <SplitText text="Aquatic" />
              <SplitText text="Feeds." />
            </h1>
            {/* Animated rule */}
            <motion.div
              variants={lineReveal}
              initial="hidden"
              animate="visible"
              className="origin-left h-px bg-foreground/40 mt-6 w-full max-w-xs"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-4 lg:pb-6 space-y-6"
          >
            <p className="text-base md:text-lg text-foreground font-semibold max-w-md text-balance leading-relaxed">
              Level Three B-BBEE certified feed factory producing high-quality
              aquatic feeds and contract-manufactured pet foods for local and
              export markets.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton
                to="/#products"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm font-medium transition-all relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Products
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </MagneticButton>
              <MagneticButton
                to="/#contact"
                className="group inline-flex items-center gap-2 border border-foreground px-6 py-3.5 text-sm font-medium relative overflow-hidden transition-colors"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-300">Contact Us</span>
                <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
