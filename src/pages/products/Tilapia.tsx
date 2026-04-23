import { Fish } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import heroImage from "@/assets/product-tilapia.jpg";
import tilapia1 from "@/assets/tilapia_1.png";
import tilapia2 from "@/assets/tilapia_2.png";

const Tilapia = () => (
  <ProductPage
    num="01"
    name="Tilapia Feeds"
    tagline="Optimally balanced nutrition for intensive recirculation systems through to extensive open ponds."
    intro="We have developed a range of optimally balanced tilapia feeds suited for various commercial tilapia growing systems from intensive recirculation systems to extensive open ponds. Our technical team can advise on the optimal protein content for your specific requirements. Feel free to contact us directly for additional information."
    Icon={Fish}
    heroImage={heroImage}
    galleryImages={[tilapia1, tilapia2]}
    sections={[
      {
        title: "Tilapia starter feeds",
        intro: "Starter feeds are offered in the following size categories with a 40% protein content:",
        bullets: [
          "#0 (< 0.5mm)",
          "#1 (0.5mm < 1mm)",
          "#2 (1mm < 1.5mm)",
          "#3 (1.5mm < 2mm)",
        ],
      },
      {
        title: "Tilapia grow out feeds",
        intro: "The grow out feeds are offered in the following pellet size categories:",
        bullets: [
          "2–3mm (35% protein)",
          "4mm (25% or 30% protein)",
          "6mm (25% or 30% protein)",
          "8mm (25% or 30% protein)",
        ],
      },
    ]}
  />
);

export default Tilapia;
