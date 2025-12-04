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
      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
      <Link
        to={`/treatments#${slug}`}
        className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
      >
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
};

export default CardTreatment;
