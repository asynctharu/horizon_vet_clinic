import { Link } from "react-router-dom";

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
    <Link to={`/blogs/${slug}`} className="group block bg-card border-2 border-foreground">
      <div className="border-b-2 border-foreground overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-56 object-cover grayscale transition-transform duration-500 md:group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="mono-label">{category}</span>
          <span className="mono-label opacity-50">{date}</span>
        </div>
        <h3 className="display-font text-2xl font-bold uppercase tracking-tight mb-4 leading-tight group-hover:underline underline-offset-4">
          {title}
        </h3>
        <p className="text-sm leading-relaxed opacity-70 mb-6">{excerpt}</p>
        <div className="mono-label inline-flex items-center gap-2">
          Read Article <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
