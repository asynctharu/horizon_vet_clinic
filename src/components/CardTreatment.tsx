import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CardTreatmentProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

const tintCycle = ["bg-teal-100", "bg-orange-100", "bg-[#FCF7F0]", "bg-white border border-stone-100"];

const CardTreatment = ({ title, description, icon: Icon, slug }: CardTreatmentProps) => {
  const tint = tintCycle[(title.length) % tintCycle.length];
  return (
    <Link
      to={`/treatments#${slug}`}
      className="soft-card group block h-full flex flex-col justify-between min-h-[280px]"
    >
      <div className={`w-14 h-14 pill-rounded flex items-center justify-center ${tint}`}>
        <Icon className="w-7 h-7 stroke-[1.5] text-foreground" />
      </div>
      <div className="mt-8">
        <h3 className="display-font text-xl md:text-2xl font-bold mb-3 tracking-tight text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-5">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#192a43] group-hover:text-[#FF8C42] transition-colors">
          Learn More <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
};

export default CardTreatment;
