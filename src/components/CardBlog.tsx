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
    <Link to={`/blogs/${slug}`} className="soft-card group block p-0 overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-700 md:group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#FFB7B2] bg-[#FFE4E1] px-3 py-1 pill-rounded">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="display-font text-xl md:text-2xl font-bold tracking-tight mb-3 leading-snug text-foreground group-hover:text-[#FFB7B2] transition-colors">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-5">{excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          Read Article <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
};

export default CardBlog;
