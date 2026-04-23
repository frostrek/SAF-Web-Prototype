import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const products = [
  {
    id: "tilapia", name: "Tilapia", num: "01",
    tag: "Freshwater",
    description: "Optimal protein-to-energy ratios for intensive culture systems. Engineered for rapid FCR and disease resistance.",
    stats: [{ label: "Protein", value: "38%" }, { label: "FCR", value: "1.4" }, { label: "Stages", value: "4" }],
    image: "https://plus.unsplash.com/premium_photo-1664297954507-186bbacccd73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlsYXBpYSUyMGZpc2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "trout", name: "Trout", num: "02",
    tag: "Salmonid",
    description: "High-performance salmonid diets covering all life stages from fry to harvest in cold-water systems.",
    stats: [{ label: "Protein", value: "45%" }, { label: "FCR", value: "1.1" }, { label: "Stages", value: "5" }],
    image: "https://images.unsplash.com/photo-1565269424908-3e4c73e5abdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJvdXQlMjBmaXNofGVufDB8fDB8fHww",
  },
  {
    id: "catfish", name: "Catfish", num: "03",
    tag: "Benthic",
    description: "Sinking and floating pellet options engineered for diverse pond and raceway farming systems.",
    stats: [{ label: "Protein", value: "32%" }, { label: "FCR", value: "1.6" }, { label: "Stages", value: "3" }],
    image: "https://images.unsplash.com/photo-1502839604051-1d3956c4d9c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0ZmlzaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "abalone", name: "Abalone", num: "04",
    tag: "Mollusc",
    description: "Specialised kelp-based formulations delivering premium shell growth and meat yield.",
    stats: [{ label: "Protein", value: "28%" }, { label: "FCR", value: "2.1" }, { label: "Stages", value: "3" }],
    image: "https://images.unsplash.com/photo-1707056707466-8fcb7ac2688e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJhbG9uZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "koi", name: "Koi", num: "05",
    tag: "Ornamental",
    description: "Enhancement feeds with natural colour intensifiers for health, vitality and visual brilliance.",
    stats: [{ label: "Protein", value: "35%" }, { label: "FCR", value: "1.8" }, { label: "Stages", value: "2" }],
    image: "https://plus.unsplash.com/premium_photo-1723672584636-0e4b662a3904?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtvaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "pigeon", name: "Pigeon", num: "06",
    tag: "Avian",
    description: "Balanced nutrition for competitive racing pigeons and breeding stock at peak performance.",
    stats: [{ label: "Protein", value: "16%" }, { label: "Energy", value: "High" }, { label: "Variants", value: "3" }],
    image: "https://images.unsplash.com/photo-1560190929-c3a0e7db1d7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpZ2VvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const ACCENT = "#2FA8D5";

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const isNum = !isNaN(parseFloat(value));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView || !isNum) { setDisplay(value); return; }
    const end = parseFloat(value);
    const suffix = value.replace(String(end), "");
    let start = 0;
    const duration = 900;
    const step = 16;
    const inc = end / (duration / step);
    const timer = setInterval(() => {
      start = Math.min(start + inc, end);
      setDisplay((Number.isInteger(end) ? Math.round(start) : start.toFixed(1)) + suffix);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView]);

  return <span ref={ref}>{display}</span>;
};

export const Products = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const p = products[active];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 md:py-32 border-b border-border overflow-hidden"
    >
      <div className="container">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              <span className="w-8 h-px bg-foreground" />
              <span>01 / Products</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold tracking-tight"
            >
              Engineered
              <br />
              <span className="text-muted-foreground/40">for Growth.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-xs text-sm leading-relaxed mb-2"
          >
            Scientifically formulated feeds designed to maximise health, yield,
            and sustainability in commercial aquaculture.
          </motion.p>
        </div>

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-0 border border-border">

          {/* Left — product list */}
          <div className="divide-y divide-border">
            {products.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                onMouseEnter={() => setActive(i)}
                className={`relative w-full text-left group flex items-center justify-between px-5 py-4 transition-all duration-300
                  ${active === i
                    ? "bg-foreground text-background"
                    : "hover:bg-muted/20 text-foreground"
                  }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{ background: ACCENT }}
                  />
                )}
                <div className="flex items-center gap-6">
                  <span className={`font-mono text-xs tabular-nums ${active === i ? "opacity-50" : "text-muted-foreground"}`}>
                    {item.num}
                  </span>
                  <div>
                    <span className="font-display text-2xl md:text-3xl font-bold tracking-tight block leading-none">
                      {item.name}
                    </span>
                    <span className={`text-xs uppercase tracking-widest mt-1 block ${active === i ? "opacity-40" : "text-muted-foreground"}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden gap-2">
                    {item.stats.map((s) => (
                      <span
                        key={s.label}
                        className={`text-xs px-2.5 py-1 border transition-colors
                          ${active === i
                            ? "border-background/20 text-background/60"
                            : "border-border text-muted-foreground"
                          }`}
                      >
                        {s.value}
                      </span>
                    ))}
                  </div>
                  <motion.div
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ArrowUpRight
                      size={18}
                      className={active === i ? "text-background/70" : "text-muted-foreground group-hover:text-foreground transition-colors"}
                    />
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right — spotlight panel */}
          <div className="relative border-t lg:border-t-0 lg:border-l border-border overflow-hidden min-h-[500px] flex flex-col">

            {/* ── Background image (switches per product) ── */}
            <AnimatePresence initial={false}>
              <motion.div
                key={`img-${active}`}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </AnimatePresence>

            {/* Dark gradient overlay — heavier at bottom for text legibility */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.92) 100%)",
              }}
            />

            {/* Ghost number */}
            <div
              className="absolute -top-4 -right-2 font-display text-[130px] leading-none font-bold select-none pointer-events-none z-20"
              style={{ color: ACCENT, opacity: 0.06 }}
            >
              {p.num}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="relative z-20 flex flex-col h-full p-8 md:p-10 text-white"
              >
                {/* Tag */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {p.tag} Feed
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[300px]">
                  {p.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {p.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-4 border"
                      style={{
                        borderColor: "rgba(255,255,255,0.12)",
                        background: "rgba(0,0,0,0.35)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <div
                        className="font-display text-2xl font-bold mb-1"
                        style={{ color: ACCENT }}
                      >
                        <Counter value={s.value} />
                      </div>
                      <div className="text-xs text-white/40 uppercase tracking-wider">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    to={`/products/${p.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-background transition-opacity hover:opacity-80"
                    style={{ background: ACCENT }}
                  >
                    View {p.name} Range
                    <MoveRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom accent line */}
            <motion.div
              key={`line-${active}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0 right-0 h-[2px] origin-left z-30"
              style={{ background: ACCENT }}
            />
          </div>
        </div>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-6 flex justify-between items-center text-xs text-muted-foreground"
        >
          <span className="font-mono">{products.length} product lines available</span>
          <Link
            to="/products"
            className="flex items-center gap-2 hover:text-foreground transition-colors group"
          >
            View all products
            <MoveRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};