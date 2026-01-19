import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

interface CardBlogProps {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  category: string;
}

const CardBlog = ({ slug, title, excerpt, thumbnail, date, category }: CardBlogProps) => {
  return (
    <article className="card-base group overflow-hidden">
      <Link to={`/blogs/${slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl mb-4 -mx-6 -mt-6">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover transition-all duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </Link>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <Calendar className="w-3.5 h-3.5" />
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
          <Link to={`/blogs/${slug}`}>{title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{excerpt}</p>
        <Link
          to={`/blogs/${slug}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm pt-1 group/link"
        >
          Read More
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
        </Link>
      </div>
    </article>
  );
};

export default CardBlog;
