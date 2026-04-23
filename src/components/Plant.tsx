import { motion, useInView, AnimatePresence } from "framer-motion";
import { Factory, ShieldCheck, Zap, Thermometer, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const ACCENT = "#2FA8D5";

const features = [
  {
    icon: Factory,
    title: "Precision Extrusion",
    text: "Advanced pelleting technology for optimal water stability and digestibility across all species diets.",
    stat: "99.2%",
    statLabel: "Pellet uniformity",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Rigorous testing of raw materials and finished products in our fully equipped in-house laboratory.",
    stat: "ISO",
    statLabel: "9001:2015 certified",
  },
  {
    icon: Zap,
    title: "Contract Manufacturing",
    text: "Custom formulations for pet food brands and niche aquatic species — from concept to finished pellet.",
    stat: "6+",
    statLabel: "Product lines",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    text: "Sophisticated drying and cold-storage systems engineered to preserve full nutrient integrity.",
    stat: "24/7",
    statLabel: "Monitored storage",
  },
];

export const Plant = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="plant"
      ref={sectionRef}
      className="py-24 md:py-32 border-b border-border bg-foreground text-background overflow-hidden"
    >
      <div className="container">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5 text-xs uppercase tracking-[0.25em] text-background/40"
            >
              <span className="w-8 h-px bg-background/40" />
              <span>04 / Our Plant</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold tracking-tight"
            >
              Industrial
              <br />
              <span className="text-background/25">Excellence.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-background/60 max-w-xs text-sm leading-relaxed md:mb-1"
          >
            Our Hermanus facility is designed for maximum efficiency and bio-security,
            ensuring every batch meets international standards.
          </motion.p>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-px bg-background/10 border border-background/10">

          {/* Left — feature list */}
          <div className="divide-y divide-background/10">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isActive = activeFeature === i;

              return (
                <motion.button
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                  onClick={() => setActiveFeature(isActive ? null : i)}
                  className="relative w-full text-left group flex items-start gap-6 px-8 py-7 transition-all duration-300"
                  style={{
                    background: isActive ? "rgba(47,168,213,0.07)" : "transparent",
                  }}
                >
                  {/* Active left bar */}
                  <motion.div
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 bottom-0 w-[3px] origin-top"
                    style={{ background: ACCENT }}
                  />

                  {/* Icon */}
                  <motion.div
                    animate={{
                      color: isActive ? ACCENT : "rgba(255,255,255,0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 flex-shrink-0 transition-colors group-hover:text-background/60"
                  >
                    <Icon size={20} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h3
                        className="font-display text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300"
                        style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.65)" }}
                      >
                        {f.title}
                      </h3>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        {/* Stat pill */}
                        <div
                          className="hidden md:block border px-3 py-1 text-center transition-all duration-300"
                          style={{
                            borderColor: isActive ? `${ACCENT}50` : "rgba(255,255,255,0.1)",
                            background: isActive ? "rgba(47,168,213,0.1)" : "transparent",
                          }}
                        >
                          <span
                            className="font-display text-sm font-bold block leading-none"
                            style={{ color: isActive ? ACCENT : "rgba(255,255,255,0.25)" }}
                          >
                            {f.stat}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider whitespace-nowrap"
                            style={{ color: "rgba(255,255,255,0.3)" }}>
                            {f.statLabel}
                          </span>
                        </div>

                        <motion.div
                          animate={{ rotate: isActive ? 45 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ArrowUpRight
                            size={16}
                            style={{ color: isActive ? ACCENT : "rgba(255,255,255,0.2)" }}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Expandable description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm leading-relaxed overflow-hidden"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          {f.text}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Bottom accent line */}
                    {isActive && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4 h-px origin-left"
                        style={{ background: ACCENT, opacity: 0.3 }}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right — image panel */}
          <div className="relative border-t lg:border-t-0 lg:border-l border-background/10 overflow-hidden min-h-[400px] lg:min-h-0">
            <motion.div
              initial={{ scale: 1.08, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070')",
              }}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
              }}
            />

            {/* Active feature overlay */}
            <AnimatePresence>
              {activeFeature !== null && (
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-6 left-6 right-6"
                >
                  <div
                    className="border p-4"
                    style={{
                      borderColor: `${ACCENT}40`,
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                      <span className="font-mono text-xs uppercase tracking-widest" style={{ color: ACCENT }}>
                        {features[activeFeature].title}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-4xl font-bold" style={{ color: ACCENT }}>
                        {features[activeFeature].stat}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-background/50">
                        {features[activeFeature].statLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Location tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-6 left-6 border-l-2 pl-4"
              style={{ borderColor: ACCENT }}
            >
              <span className="block text-xs uppercase tracking-widest mb-1"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                Facility Location
              </span>
              <span className="font-display text-lg font-medium text-background">
                Hermanus Industrial Park, ZA
              </span>
            </motion.div>

            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-16 h-16"
              style={{
                background: `linear-gradient(225deg, ${ACCENT}25, transparent)`,
              }}
            />
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-4 flex justify-between items-center text-xs font-mono"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          <span>{features.length} core capabilities</span>
          <span style={{ color: `${ACCENT}70` }}>Click any capability to explore</span>
        </motion.div>

      </div>
    </section>
  );
};