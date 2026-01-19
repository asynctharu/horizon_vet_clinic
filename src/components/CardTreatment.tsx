import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CardTreatmentProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

const CardTreatment = ({ title, description, icon: Icon, slug }: CardTreatmentProps) => {
  return (
    <div className="card-base group">
      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:bg-primary group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
      <Link
        to={`/treatments#${slug}`}
        className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
      >
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
      </Link>
    </div>
  );
};

export default CardTreatment;
