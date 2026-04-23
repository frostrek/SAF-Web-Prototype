import { Bird } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import heroImage from "@/assets/product-pigeon.jpg";

import pigeon1 from "@/assets/pigeon_1.png";
import pigeon2 from "@/assets/pigeon_2.png";

const Pigeon = () => (
  <ProductPage
    num="06"
    name="PNP Pigeon Pellets"
    tagline="Optimally balanced supplemental pellets for racing and breeding pigeons in peak condition."
    intro="Our balanced pigeon feeds are optimally formulated to supplement your pigeon's special grain mix at different times of the racing or breeding season to ensure your birds get everything they need."
    Icon={Bird}
    heroImage={heroImage}
    galleryImages={[pigeon1, pigeon2]}
    sections={[
      {
        title: "Natural protective benefits",
        intro:
          "PNP Pigeon Pellets are optimally formulated using the best available local ingredients to promote and maintain your bird's immune system, ensuring it is in peak condition for its next race. These pellets are designed to be used as a supplement to your current feeding regime and ensure that all your bird's essential vitamin and mineral requirements are met.",
      },
      {
        title: "Functional ingredients",
        bullets: [
          "Prebiotics — natural sugars resistant to digestion by the pigeon, exclusively utilised by health-promoting bacteria in its digestive system, supporting balanced gut biota.",
          "Mycotoxin binder — acts like a 'magnet' in the intestine, binding deleterious substances such as mould and fungi-borne aflatoxins and removing them via the feces.",
          "Organic acids — improve villi size in the gastrointestinal tract while reducing salmonella and E-coli bacteria that compete with the bird's normal gut biota.",
        ],
      },
      {
        title: "Good manufacturing process",
        paragraphs: [
          "PNP Pellets are manufactured at Specialised Aquatic Feeds using high-pressure extrusion that results in a sterile, cooked product with greater digestibility than standard grains and cold-pressed pellets. This unique process fuses proteins, vitamins and minerals into a totally homogenous product.",
          "This improves nutrient uptake in the digestive tract. The cooking of the carbohydrate component causes the starch granules to swell, rupture and gelatinise so that, after cooling, the pellets have improved digestibility — meaning the pigeon has no loss of energy when digesting these pellets.",
        ],
      },
      {
        title: "Benefits",
        bullets: [
          "Vitamins and minerals taken daily with the feed — no waste",
          "No need to add water-soluble vitamins to the drinking water",
          "Easily digestible with improved nutrient uptake",
          "Combats Salmonella and E-Coli bacteria",
          "Correct Calcium : Phosphorus ratio (Ca:P)",
          "Correct omega fatty acid ratios",
        ],
      },
    ]}
  />
);

export default Pigeon;
