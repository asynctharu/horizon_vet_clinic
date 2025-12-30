import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CardDoctorProps {
  id: string;
  name: string;
  specialty: string;
  image: string;
  intro: string;
}

const CardDoctor = ({ id, name, specialty, image, intro }: CardDoctorProps) => {
  return (
    <div className="card-base group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="space-y-2">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {specialty}
        </span>
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{intro}</p>
        <Link
          to={`/doctors/${id}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm pt-2 group/link"
        >
          View Profile
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CardDoctor;
