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
    <div className="card-base group cursor-pointer">
      <Link to={`/doctors/${id}`} className="block">
        <div className="relative overflow-hidden rounded-xl mb-4 bg-muted/30">
          <div className="aspect-square">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out md:group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
            {specialty}
          </span>
        </div>
      </Link>

      <div className="space-y-2">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {specialty}
        </span>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{intro}</p>
        <Link
          to={`/doctors/${id}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm pt-2 group/link"
        >
          View Profile
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CardDoctor;
