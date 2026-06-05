import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CardTreatmentProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

const CardTreatment = ({ title, description, icon: Icon, slug }: CardTreatmentProps) => {
  return (
    <Link
      to={`/treatments#${slug}`}
      className="inversion-hover group block bg-card border border-foreground p-10 h-full flex flex-col justify-between min-h-[280px]"
    >
      <Icon className="w-12 h-12 stroke-[1.5]" />
      <div>
        <h3 className="display-font text-2xl font-bold uppercase mb-3 tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed opacity-70 mb-4">{description}</p>
        <span className="mono-label inline-flex items-center gap-2">
          Learn More <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
};

export default CardTreatment;
