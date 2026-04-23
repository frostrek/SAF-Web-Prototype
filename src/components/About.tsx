import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const ACCENT = "#2FA8D5";

const stats = [
  { label: "Years Experience", value: "14+", detail: "Operating since 2010 from Hermanus, Western Cape.", bar: 88 },
  { label: "B-BBEE Level", value: "03", detail: "Level 3 certified — committed to South African transformation.", bar: 72 },
  { label: "Production Capacity", value: "High", detail: "Multi-line extrusion facility with cold-storage on-site.", bar: 95 },
  { label: "ISO Certified", value: "ISO", detail: "ISO 9001:2015 quality management system certified.", bar: 100 },
];

const pillars = [
  "Locally manufactured in South Africa",
  "Advanced extrusion technology",
  "Tailored nutritional formulations",
  "Technical field support included",
];

// Corner brackets component
const CornerBrackets = ({ active }: { active: boolean }) => (
  <>
    {/* Top-left */}
    <motion.div className="absolute top-3 left-3 w-5 h-5 pointer-events-none"
      animate={{ opacity: active ? 1 : 0, x: active ? 0 : -4, y: active ? 0 : -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: ACCENT }} />
      <div className="absolute top-0 left-0 h-full w-px" style={{ background: ACCENT }} />
    </motion.div>
    {/* Top-right */}
    <motion.div className="absolute top-3 right-3 w-5 h-5 pointer-events-none"
      animate={{ opacity: active ? 1 : 0, x: active ? 0 : 4, y: active ? 0 : -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute top-0 right-0 w-full h-px" style={{ background: ACCENT }} />
      <div className="absolute top-0 right-0 h-full w-px" style={{ background: ACCENT }} />
    </motion.div>
    {/* Bottom-left */}
    <motion.div className="absolute bottom-3 left-3 w-5 h-5 pointer-events-none"
      animate={{ opacity: active ? 1 : 0, x: active ? 0 : -4, y: active ? 0 : 4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: ACCENT }} />
      <div className="absolute bottom-0 left-0 h-full w-px" style={{ background: ACCENT }} />
    </motion.div>
    {/* Bottom-right */}
    <motion.div className="absolute bottom-3 right-3 w-5 h-5 pointer-events-none"
      animate={{ opacity: active ? 1 : 0, x: active ? 0 : 4, y: active ? 0 : 4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: ACCENT }} />
      <div className="absolute bottom-0 right-0 h-full w-px" style={{ background: ACCENT }} />
    </motion.div>
  </>
);

export const About = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 border-b border-border bg-background relative overflow-hidden"
    >



      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">

          {/* ── Left ── */}
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              <span className="w-8 h-px bg-foreground" />
              <span>02 / About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.9]"
            >
              Precision
              <br />
              <span className="text-muted-foreground/40">Nutrition.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg"
            >
              <p>
                Specialised Aquatic Feeds (Pty) Ltd was established in 2010 to provide the Southern African aquaculture industry with high-quality, locally produced nutritional solutions.
              </p>
              <p>
                Based in the industrial heart of Hermanus, our facility combines advanced manufacturing technology with rigorous scientific standards to produce feeds that optimize growth and health.
              </p>
            </motion.div>

            {/* Pillar checklist */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="space-y-2"
            >
              {pillars.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground group cursor-default"
                >
                  <CheckCircle2 size={15} style={{ color: ACCENT }} className="flex-shrink-0" />
                  <span className="group-hover:text-foreground transition-colors duration-200">{p}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <Link
                to="/#story"
                className="group inline-flex items-center gap-3 border border-foreground px-6 py-3.5 text-sm font-medium relative overflow-hidden transition-colors"
              >
                <span className="relative z-10 group-hover:text-background transition-colors duration-300">Read Our Story</span>
                <ArrowRight size={15} className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-background" />
                <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in touch
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* ── Right — stats grid ── */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-px bg-border border border-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  onMouseMove={handleMouseMove}
                  className="relative bg-background p-8 md:p-10 flex flex-col justify-between aspect-square overflow-hidden cursor-default"
                >
                  {/* Mouse-tracking radial glow */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ opacity: hoveredStat === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: hoveredStat === i
                        ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${ACCENT}18 0%, transparent 65%)`
                        : "none",
                    }}
                  />

                  {/* Scan line sweep */}
                  <AnimatePresence>
                    {hoveredStat === i && (
                      <motion.div
                        className="absolute left-0 right-0 h-px pointer-events-none z-10"
                        style={{ background: `linear-gradient(to right, transparent, ${ACCENT}60, transparent)` }}
                        initial={{ top: "0%", opacity: 0 }}
                        animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.1, ease: "linear", repeat: Infinity, repeatDelay: 0.6 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Corner brackets */}
                  <CornerBrackets active={hoveredStat === i} />

                  {/* Top: index label */}
                  <div className="flex items-center justify-between">
                    <motion.span
                      className="font-mono text-[10px] tracking-widest"
                      animate={{ opacity: hoveredStat === i ? 1 : 0.3 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: ACCENT }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>

                    {/* Live indicator dot */}
                    <AnimatePresence>
                      {hoveredStat === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="flex items-center gap-1.5"
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: ACCENT }}
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                          <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: `${ACCENT}80` }}>
                            Active
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Big value */}
                  <motion.span
                    animate={{
                      x: hoveredStat === i ? 4 : 0,
                      color: hoveredStat === i ? ACCENT : "var(--foreground)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none block"
                  >
                    {stat.value}
                  </motion.span>

                  {/* Bottom section */}
                  <div className="space-y-3">
                    {/* Data bar */}
                    <div className="h-px w-full bg-border overflow-hidden">
                      <motion.div
                        className="h-full origin-left"
                        style={{ background: ACCENT }}
                        animate={{ scaleX: hoveredStat === i ? stat.bar / 100 : 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>

                    {/* Detail text */}
                    <AnimatePresence>
                      {hoveredStat === i && (
                        <motion.p
                          initial={{ opacity: 0, y: 6, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: 4, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-xs leading-relaxed text-muted-foreground overflow-hidden"
                        >
                          {stat.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Label row */}
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={{ scaleX: hoveredStat === i ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-4 h-px origin-left flex-shrink-0"
                        style={{ background: ACCENT }}
                      />
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                        {stat.label}
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent border */}
                  <motion.div
                    animate={{ scaleX: hoveredStat === i ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute bottom-0 left-0 right-0 h-px origin-left"
                    style={{ background: ACCENT }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-4 flex items-center justify-between text-xs text-muted-foreground/50 font-mono"
            >
              <span>Hermanus, Western Cape, ZA</span>
              <span style={{ color: `${ACCENT}80` }}>Est. 2010</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};