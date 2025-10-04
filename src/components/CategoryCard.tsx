import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  gradient: string;
  index: number;
}

const CategoryCard = ({ title, description, image, link, gradient, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={link} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] hover-lift">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300">
              <span>Explore Collection</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
