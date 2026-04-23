import { motion } from "framer-motion";

const items = [
  "Tilapia", "Trout", "Catfish", "Abalone", "Koi", "Pigeon",
  "Tailored Nutrition", "ISO 9001:2015", "Level 3 B-BBEE", "Hermanus, ZA"
];

export const Marquee = () => {
  return (
    <section className="relative py-3 bg-[#1A1A1A] overflow-hidden border-y border-[#2E2E2E]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

      <div className="flex">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap"
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-3 whitespace-nowrap">
              <span
                className="w-2 h-2 rotate-45 flex-shrink-0"
                style={{ background: "#2FA8D5", boxShadow: "0 0 5px rgba(47,168,213,0.5)" }}
              />
              <span
                className="text-white uppercase tracking-widest leading-none whitespace-nowrap"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "16px" }}
              >
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};