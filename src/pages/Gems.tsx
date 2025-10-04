import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import gemsHero from "@/assets/gems-hero.jpg";

const Gems = () => {
  const products = [
    {
      id: "1",
      name: "Emerald Drop Earrings",
      price: 3499,
      image: gemsHero,
      description: "Colombian emeralds in white gold",
    },
    {
      id: "2",
      name: "Ruby Heart Pendant",
      price: 4299,
      image: gemsHero,
      description: "Burmese ruby with diamond halo",
    },
    {
      id: "3",
      name: "Sapphire Cocktail Ring",
      price: 5799,
      image: gemsHero,
      description: "Kashmir sapphire statement piece",
    },
    {
      id: "4",
      name: "Multi-Gem Bracelet",
      price: 3999,
      image: gemsHero,
      description: "Rainbow of precious gemstones",
    },
    {
      id: "5",
      name: "Tanzanite Solitaire",
      price: 4799,
      image: gemsHero,
      description: "Rare tanzanite in platinum setting",
    },
    {
      id: "6",
      name: "Opal and Diamond Ring",
      price: 2899,
      image: gemsHero,
      description: "Australian opal with diamond accents",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={gemsHero}
            alt="Gems Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gems-gradient opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-white drop-shadow-lg animate-float">
              Precious Gems
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Vibrant gemstones for every celebration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Explore Gem Jewelry</h2>
            <p className="text-muted-foreground">{products.length} vibrant pieces</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gems;
