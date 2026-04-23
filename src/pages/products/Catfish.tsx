import { Fish } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import heroImage from "@/assets/product-catfish.jpg";

import catfish1 from "@/assets/catfish_1.png";
import catfish2 from "@/assets/catfish_2.png";

const Catfish = () => (
  <ProductPage
    num="03"
    name="Catfish Feeds"
    tagline="Floating catfish feeds optimally formulated for every growth stage and production system."
    intro="Our floating catfish feeds are optimally formulated to provide your fish with the ideal nutrients required for their different growth stages. Contact our technical support team to advise you on the best choice of catfish pellet feed to suit your specific production system whether it be aquaponics, intensive grow-out or recreational home production."
    Icon={Fish}
    heroImage={heroImage}
    galleryImages={[catfish1, catfish2]}
    sections={[
      {
        title: "Catfish starter feeds",
        intro: "Starter feeds are offered in the following size categories with a protein content of 40%:",
        bullets: [
          "#0 (< 0.5mm)",
          "#1 (0.5mm < 1mm)",
          "#2 (1mm < 1.5mm)",
          "#3 (1.5mm < 2mm)",
        ],
      },
      {
        title: "Catfish grow out feeds",
        intro: "The grow out feeds are offered in the following pellet categories:",
        bullets: [
          "2–3mm premium (36% protein)",
          "4mm (32% protein)",
          "6mm (32% protein)",
          "10mm (32% protein)",
          "12mm (33% protein) — Brood stock feed",
        ],
      },
    ]}
  />
);

export default Catfish;
