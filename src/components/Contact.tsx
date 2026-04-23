import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

const FloatingInput = ({ label, value, onChange, type = "text", maxLength }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; maxLength?: number;
}) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
        active ? "top-0 text-[10px] uppercase tracking-widest text-accent" : "top-3 text-sm text-muted-foreground"
      }`}>{label}</label>
      <input type={type} className="w-full bg-transparent border-b-2 border-border focus:border-foreground pt-5 pb-2 outline-none transition-colors"
        value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} maxLength={maxLength} />
      <motion.span className="absolute bottom-0 left-0 h-0.5 bg-accent" initial={false} animate={{ width: focused ? "100%" : "0%" }} transition={{ duration: 0.3 }} />
    </div>
  );
};

const FloatingTextarea = ({ label, value, onChange, maxLength }: {
  label: string; value: string; onChange: (v: string) => void; maxLength?: number;
}) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
        active ? "top-0 text-[10px] uppercase tracking-widest text-accent" : "top-3 text-sm text-muted-foreground"
      }`}>{label}</label>
      <textarea rows={5} className="w-full bg-transparent border-b-2 border-border focus:border-foreground pt-5 pb-2 outline-none transition-colors resize-none"
        value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} maxLength={maxLength} />
      <motion.span className="absolute bottom-0 left-0 h-0.5 bg-accent" initial={false} animate={{ width: focused ? "100%" : "0%" }} transition={{ duration: 0.3 }} />
    </div>
  );
};

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = () => {
    const result = schema.safeParse(form);
    if (!result.success) { toast.error(result.error.issues[0].message); return; }
    toast.success("Message sent. We'll be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-border relative">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="container relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="w-8 h-px bg-foreground" /><span>06 / Contact</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-10 text-balance">
              Let&apos;s talk feed.
            </motion.h2>
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Address</div>
                <div className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0" /><p>Cnr of Church &amp; Still Rd, Hermanus</p></div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone</div>
                <a href="tel:+27283138581" className="flex items-center gap-3 hover:text-foreground/70 transition-colors group">
                  <Phone size={18} /><span className="group-hover:translate-x-1 transition-transform">+27 28 313 8581</span>
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border">
                <div className="group cursor-default">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Tech &amp; Sales</div>
                  <div className="font-display text-xl font-semibold group-hover:translate-x-1 transition-transform">Ryan Weaver</div>
                  <div className="text-sm text-muted-foreground">Technical Support &amp; Sales Manager</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Director</div>
                  <div className="font-display text-xl font-semibold group-hover:translate-x-1 transition-transform">Japie Engelbrecht</div>
                  <div className="text-sm text-muted-foreground">Managing Director</div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 lg:col-span-7 lg:pl-12 lg:border-l border-border">
            <div className="space-y-8">
              {[{ delay: 0.3 }, { delay: 0.4 }, { delay: 0.5 }].map((d, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: d.delay, duration: 0.5 }}>
                  {i === 0 && <FloatingInput label="Your full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} maxLength={100} />}
                  {i === 1 && <FloatingInput label="Email address" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" maxLength={255} />}
                  {i === 2 && <FloatingTextarea label="Tell us about your project" value={form.message} onChange={(v) => setForm({ ...form, message: v })} maxLength={1000} />}
                </motion.div>
              ))}
              <motion.button type="button" onClick={submit} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">Get In Touch<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
