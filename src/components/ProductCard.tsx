import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/useWishlist";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  index: number;
}

const ProductCard = ({ id, name, price, image, description, index }: ProductCardProps) => {
  const wishlist = useWishlist();
  const isLiked = wishlist.isInWishlist(id);

  const toggleWishlist = () => {
    if (isLiked) {
      wishlist.removeFromWishlist(id);
      toast.success('Removed from wishlist');
    } else {
      wishlist.addToWishlist(id);
      toast.success('Added to wishlist ❤️');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover-lift"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleWishlist}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-lg z-10"
        >
          <Heart
            className={`h-5 w-5 transition-all duration-300 ${
              isLiked ? "fill-primary text-primary" : "text-foreground/60"
            }`}
          />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-serif font-bold text-primary">
            ${price.toLocaleString()}
          </span>
          <Button
            size="sm"
            className="luxury-gradient text-white hover:glow-gold transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
