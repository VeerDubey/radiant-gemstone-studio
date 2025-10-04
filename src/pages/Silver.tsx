import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import silverHero from "@/assets/silver-hero.jpg";

const Silver = () => {
  const products = [
    {
      id: "1",
      name: "Minimalist Silver Ring",
      price: 599,
      image: silverHero,
      description: "Sterling silver band with modern design",
    },
    {
      id: "2",
      name: "Silver Chain Necklace",
      price: 899,
      image: silverHero,
      description: "Classic sterling silver chain",
    },
    {
      id: "3",
      name: "Elegant Silver Bracelet",
      price: 749,
      image: silverHero,
      description: "Contemporary silver link bracelet",
    },
    {
      id: "4",
      name: "Silver Hoop Earrings",
      price: 449,
      image: silverHero,
      description: "Sleek sterling silver hoops",
    },
    {
      id: "5",
      name: "Silver Pendant",
      price: 679,
      image: silverHero,
      description: "Minimalist silver pendant design",
    },
    {
      id: "6",
      name: "Silver Cuff Bracelet",
      price: 829,
      image: silverHero,
      description: "Bold sterling silver cuff",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0">
          <img
            src={silverHero}
            alt="Silver Collection"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 silver-gradient opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Silver Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern sophistication in sterling silver
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Explore Silver Jewelry</h2>
            <p className="text-muted-foreground">{products.length} stunning pieces</p>
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

export default Silver;
