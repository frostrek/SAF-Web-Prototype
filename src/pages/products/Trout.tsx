import { Waves } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import heroImage from "@/assets/product-trout.jpg";

const Trout = () => (
  <ProductPage
    num="02"
    name="Trout Feeds"
    tagline="High-quality cold-water nutrition delivering excellent growth and feed conversion rates."
    intro="Specialised Aquatic Feeds started manufacturing trout feed for the local trout market in October 2015. The team at SAF has progressed significantly in this area and has developed high quality feeds providing excellent growth and feed conversion rates. Our technical support team is able to provide you with advice and guidance in choosing the correct feed and feeding rates to achieve optimal growth in your chosen production system."
    Icon={Waves}
    heroImage={heroImage}
    // To add gallery images: import them and pass as array
    // import trout1 from "@/assets/trout_1.png";
    // galleryImages={[trout1]}
    sections={[
      {
        title: "Trout starter feeds",
        paragraphs: [
          "Formulated for the early development stages of trout.",
          "Fry from 0.5 g – 12 g require a diet high in digestible proteins and the optimal vitamin levels to provide them with the best possible foundation in this crucial developmental stage.",
        ],
        intro: "The starter feeds are offered in the following size categories:",
        bullets: [
          "#0 (< 0.5mm)",
          "#1 (0.5mm < 1mm)",
          "#2 (1mm < 1.5mm)",
          "#3 (1.5mm < 2mm)",
        ],
      },
      {
        title: "Trout grower feeds",
        intro:
          "As trout develop from fry to fingerling to grow out stages their nutritional and energy requirements change significantly. We have developed a range of grow out feeds that align with these requirements. Available in 2mm, 3mm, 4mm, 6mm, 8mm and 10mm pellet sizes.",
        bullets: [
          "High Temperature trout feed — formulated to assist trout in the stressful warmer Summer season.",
          "Health Diet trout feed — boosts the fish's immune system before stressful events such as vaccination, transport or anticipated stressful weather.",
          "Broodstock trout feeds — aimed at optimal ova development, immune support during the stripping season and optimal recovery after the season.",
        ],
      },
    ]}
  />
);

export default Trout;
