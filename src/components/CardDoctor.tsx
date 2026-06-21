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
      className="soft-card group block"
    >
      <div className="overflow-hidden mb-8" style={{ borderRadius: "2rem" }}>
        <img
          src={image}
          alt={name}
          className="w-full aspect-[4/5] object-cover object-center transition-transform duration-700 md:group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="display-font text-2xl md:text-3xl font-bold tracking-tight mb-2 text-foreground">
        {name}
      </h3>
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#FF8C42] mb-5">
        {specialty}
      </p>
      <div className="h-px bg-stone-200 w-full mb-5" />
      <p className="text-base leading-relaxed text-muted-foreground mb-6">{intro}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#192a43] group-hover:text-[#FF8C42] transition-colors">
        View Profile <span aria-hidden>→</span>
      </span>
    </Link>
  );
};

export default CardDoctor;
