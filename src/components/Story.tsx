"use client";

import { motion } from "framer-motion";
import img1 from "@/assets/img_1.png";
import img2 from "@/assets/img_2.png";
import img3 from "@/assets/img_3.png";
import img4 from "@/assets/img_4.png";
import img5 from "@/assets/img_5.png";

export const Story = () => {
  return (
    <section id="story" className="py-24 md:py-40 border-b border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="w-8 h-px bg-foreground" />
          <span>03 / Our Story</span>
        </motion.div>

        {/* Section 1: From Dependence to Independence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8"
            >
              From Dependence to Independence.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-foreground/70 text-lg leading-relaxed"
            >
              <p>
                Abalone farming is a capital intensive operation which characteristically embodies very high running costs. One of the main contributing factors to these high running costs is the cost of formulated abalone feeds.
              </p>
              <p>
                In 2010 Abagold Limited started to investigate producing their own formulated diets in the hope that they could become completely independent and reduce running costs accordingly.
              </p>
              <p>
                By the end of 2012 they no longer purchased formulated abalone feed from outside of the company and had specialised their diets to suit their specific farming requirements. This was a great achievement for their feed department, which grew significantly over a very short space of time.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-border transform translate-x-4 translate-y-4" />
            <img
              src={img5}
              alt="Aquaculture farm operations"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-border"
            />
          </motion.div>
        </div>

        {/* Section 2: Separation and Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative h-[500px] md:h-[580px] lg:h-[620px] w-full"
          >
            {/* Shadow offset */}
            <div className="absolute bg-border pointer-events-none"
              style={{ inset: 0, transform: "translate(-12px, 12px)", zIndex: 0 }}
            />

            {/* 2×2 grid — all images strictly inside the container */}
            <div
              className="absolute border border-border overflow-hidden"
              style={{ zIndex: 1, inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "6px", padding: "6px" }}
            >
              <div className="overflow-hidden border border-border">
                <img src={img1} alt="Aquaculture 1"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="overflow-hidden border border-border" style={{ marginTop: "24px" }}>
                <img src={img2} alt="Aquaculture 2"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="overflow-hidden border border-border" style={{ marginBottom: "24px" }}>
                <img src={img3} alt="Aquaculture 3"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="overflow-hidden border border-border">
                <img src={img4} alt="Aquaculture 4"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8"
            >
              Setting Trends in Aquaculture Nutrition.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-foreground/70 text-lg leading-relaxed"
            >
              <p>
                In 2014 the feed department became a separate high performing organisation which specialised in aquatic feeds. This business was separated from Abagold Limited to ensure that it is solely focused on the development and manufacturing of formulated feeds for the aquaculture industry.
              </p>
              <p>
                The feed department is no longer run as a department of Abagold Limited and operates as a separate legal entity called Specialised Aquatic Feeds ("SAF").
              </p>
              <p>
                This newly formed company identified that there was a gap in the market for formulated aquatic feeds – not only within the abalone market but across the aquaculture spectrum including trout and tilapia as well as numerous other species. Specialised Aquatic Feeds has since been experimenting with and producing various fresh water and saline fish diets.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section 3: The Plant */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-foreground text-background p-12 md:p-20 text-center max-w-5xl mx-auto"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
            "In order to achieve our vision we required a state of the art processing plant."
          </h3>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-background/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            The plans for this plant have been on the cards from early 2013 and have finally come into fruition. The new plant has been up and running since October 2015, empowering us to deliver uncompromising quality at scale.
          </p>
        </motion.div>

      </div>
    </section>
  );
};