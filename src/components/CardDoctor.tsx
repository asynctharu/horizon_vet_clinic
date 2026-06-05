import { Link } from "react-router-dom";

interface CardDoctorProps {
  id: string;
  name: string;
  specialty: string;
  image: string;
  intro: string;
}

const CardDoctor = ({ id, name, specialty, image, intro }: CardDoctorProps) => {
  return (
    <Link
      to={`/doctors/${id}`}
      className="group block bg-card border-2 border-foreground p-2 transition-colors"
    >
      <div className="border border-foreground overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover object-center grayscale transition-transform duration-500 md:group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-6 md:p-8">
        <span className="mono-label opacity-60 block mb-3">{specialty}</span>
        <h3 className="display-font text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 group-hover:underline underline-offset-4">
          {name}
        </h3>
        <div className="h-px bg-foreground w-12 mb-4" />
        <p className="text-sm leading-relaxed opacity-80">{intro}</p>
        <div className="mt-6 mono-label flex items-center gap-2">
          View Profile <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
};

export default CardDoctor;
