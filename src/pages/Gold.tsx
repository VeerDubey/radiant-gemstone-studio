import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import goldHero from "@/assets/gold-hero.jpg";

const Gold = () => {
  const products = [
    {
      id: "1",
      name: "Eternal Gold Necklace",
      price: 2499,
      image: goldHero,
      description: "18K gold chain with diamond pendant",
    },
    {
      id: "2",
      name: "Royal Gold Ring",
      price: 1899,
      image: goldHero,
      description: "24K pure gold band with intricate design",
    },
    {
      id: "3",
      name: "Classic Gold Bracelet",
      price: 3299,
      image: goldHero,
      description: "Elegant 18K gold link bracelet",
    },
    {
      id: "4",
      name: "Gold Stud Earrings",
      price: 1299,
      image: goldHero,
      description: "22K gold earrings with traditional motifs",
    },
    {
      id: "5",
      name: "Heritage Gold Pendant",
      price: 2799,
      image: goldHero,
      description: "Antique-inspired 18K gold pendant",
    },
    {
      id: "6",
      name: "Modern Gold Chain",
      price: 1999,
      image: goldHero,
      description: "Contemporary 14K gold chain design",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={goldHero}
            alt="Gold Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 luxury-gradient opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-white drop-shadow-lg">
              Gold Collection
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Timeless luxury in pure gold craftsmanship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Explore Gold Jewelry</h2>
            <p className="text-muted-foreground">{products.length} exquisite pieces</p>
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

export default Gold;
