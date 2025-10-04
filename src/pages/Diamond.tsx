import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import diamondHero from "@/assets/diamond-hero.jpg";

const Diamond = () => {
  const products = [
    {
      id: "1",
      name: "Brilliant Cut Diamond Ring",
      price: 8999,
      image: diamondHero,
      description: "1.5 carat diamond solitaire in platinum",
    },
    {
      id: "2",
      name: "Diamond Tennis Bracelet",
      price: 12499,
      image: diamondHero,
      description: "Stunning line of brilliant diamonds",
    },
    {
      id: "3",
      name: "Diamond Stud Earrings",
      price: 6799,
      image: diamondHero,
      description: "Classic 1 carat total weight studs",
    },
    {
      id: "4",
      name: "Diamond Pendant Necklace",
      price: 5999,
      image: diamondHero,
      description: "Elegant halo diamond pendant",
    },
    {
      id: "5",
      name: "Three Stone Diamond Ring",
      price: 11299,
      image: diamondHero,
      description: "Past, present, future trilogy design",
    },
    {
      id: "6",
      name: "Diamond Eternity Band",
      price: 7899,
      image: diamondHero,
      description: "Full circle of brilliant diamonds",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950 dark:via-gray-900 dark:to-blue-950">
        <div className="absolute inset-0">
          <img
            src={diamondHero}
            alt="Diamond Collection"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 diamond-gradient opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glow-diamond"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-shimmer bg-gradient-to-r from-accent-foreground via-white to-accent-foreground bg-[length:200%_100%] bg-clip-text text-transparent">
              Diamond Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exquisite diamonds that capture forever
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Explore Diamond Jewelry</h2>
            <p className="text-muted-foreground">{products.length} brilliant pieces</p>
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

export default Diamond;
