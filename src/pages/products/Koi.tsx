import { Waves } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import heroImage from "@/assets/product-koi.jpg";

import koi1 from "@/assets/koi_1.png";
import koi2 from "@/assets/koi_2.png";

const Koi = () => (
  <ProductPage
    num="05"
    name="OptiGoi Koi Feed"
    tagline="Premium colour and vitality enhancement for ornamental koi."
    intro="OptiGoi is our premium koi feed formulated to enhance colour vibrancy, support immune health and promote vitality. Manufactured at our state-of-the-art Hermanus plant using high-pressure extrusion for maximum digestibility and nutrient uptake."
    Icon={Waves}
    heroImage={heroImage}
    galleryImages={[koi1, koi2]}
    sections={[
      {
        title: "Premium nutrition",
        intro:
          "OptiGoi delivers a balanced profile of proteins, vitamins and minerals to support healthy growth, colour development and condition across all life stages of your koi.",
        bullets: [
          "Colour-enhancing pigments for vibrant patterns",
          "Highly digestible proteins for efficient growth",
          "Balanced vitamin and mineral package",
          "Floating pellets for easy feeding monitoring",
        ],
      },
      {
        title: "Manufacturing quality",
        intro:
          "Produced through high-pressure extrusion that results in a sterile, cooked product with greater digestibility than standard pellets — fusing all ingredients into a homogenous, nutrient-rich pellet.",
      },
    ]}
  />
);

export default Koi;
