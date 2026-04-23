import { Shell } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import heroImage from "@/assets/product-abalone.jpg";

const Abalone = () => (
  <ProductPage
    num="04"
    name="Abalone Feeds"
    tagline="Marine formulations engineered for shell strength, growth, eFCR and processing yield — without fish oils."
    intro="Over the years SAF has made significant progress in formulating optimal abalone feeds for weaning, growth, health and harvest yield. We have developed feeds for the different nutritional requirements of abalone as they age within the production process. Our feeds provide excellent growth, shell strength, eFCR and processing yields. No fish oils are used in the production of our abalone feeds and all raw materials used are fully traceable to source."
    Icon={Shell}
    heroImage={heroImage}
    // To add gallery images: import them and pass as array
    // import abalone1 from "@/assets/abalone_1.png";
    // galleryImages={[abalone1]}
    sections={[
      {
        title: "SAF Weaning feed",
        intro:
          "Developed considering the nutritional requirements of spat at the early stages of development, specifically after de-plating (spat < 1g size). A mixture of seaweed (Ulva Lactuca) and formulated SAF weaning feeds has proven to provide excellent results at an early stage. Available as crumbles and tapered rice pellets.",
        bullets: [
          "Crumbles #0 — < 0.5mm",
          "Crumbles #1 — 0.5mm < 1mm",
          "Crumbles #2 — 1mm < 1.5mm",
          "Crumbles #3 — 1.5mm < 2mm",
          "Rice — 10mm × 4mm × 2mm tapered pellet",
        ],
      },
      {
        title: "SAF 2000 — Early phase feed",
        intro:
          "The SAF 2000 Pellet caters for this stage in the abalone growth cycle. Specifically formulated to ensure good shell health, growth and development from spat through to 25g in size. Available as a short or longer pellet depending on the rearing environment.",
        bullets: [
          "Standard pellet — 10mm × 10mm × 2mm",
          "Long pellet — 10mm × 20mm × 2mm",
        ],
      },
      {
        title: "SAF 3000 — Grower feed",
        intro:
          "Designed as a complete grow-out feed that can be fed from 25g all the way to harvest size.",
        bullets: ["Big Leaf — 40mm × 40mm × 2mm"],
      },
      {
        title: "SAF 4000 — Grower feed",
        intro:
          "Abalone over 150g require less protein in their diets. The SAF 4000 grower diet is formulated as a standard grower diet for larger animals to maintain growth and health, falling within the guidelines of ASC and other certifications regarding the Forage Fish Equivalency ratio (FIFO).",
        bullets: [
          "Big Leaf — 40mm × 40mm × 2mm",
          "Long Leaf — 40mm × 300mm × 2mm",
        ],
      },
    ]}
  />
);

export default Abalone;
