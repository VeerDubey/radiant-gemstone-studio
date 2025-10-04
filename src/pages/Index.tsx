import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import heroWelcome from "@/assets/hero-welcome.jpg";
import goldHero from "@/assets/gold-hero.jpg";
import silverHero from "@/assets/silver-hero.jpg";
import diamondHero from "@/assets/diamond-hero.jpg";
import gemsHero from "@/assets/gems-hero.jpg";
import { Sparkles, Award, Shield, Truck } from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "Gold Collection",
      description: "Timeless luxury in pure gold craftsmanship",
      image: goldHero,
      link: "/gold",
      gradient: "luxury-gradient",
    },
    {
      title: "Silver Elegance",
      description: "Modern sophistication in sterling silver",
      image: silverHero,
      link: "/silver",
      gradient: "silver-gradient",
    },
    {
      title: "Diamond Brilliance",
      description: "Exquisite diamonds that capture forever",
      image: diamondHero,
      link: "/diamond",
      gradient: "diamond-gradient",
    },
    {
      title: "Precious Gems",
      description: "Vibrant gemstones for every celebration",
      image: gemsHero,
      link: "/gems",
      gradient: "gems-gradient",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Certified authentic materials",
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Protected for generations",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Worldwide delivery",
    },
    {
      icon: Sparkles,
      title: "Expert Craftsmanship",
      description: "Handcrafted perfection",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroWelcome}
            alt="Luxury Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gradient-gold">
              Timeless Elegance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Discover our exquisite collection of handcrafted jewelry that celebrates
              life's most precious moments
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luxury-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[var(--shadow-luxury)] hover:glow-gold transition-all duration-300"
            >
              Explore Collections
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece tells a story of exceptional craftsmanship and timeless beauty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} {...category} index={index} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
