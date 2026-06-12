interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ badge, title, description, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-16 lg:mb-20 ${centered ? "mx-auto text-center max-w-3xl" : "max-w-4xl"}`}>
      {badge && (
        <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5 ${centered ? "mx-auto" : ""}`}>
          {badge}
        </span>
      )}
      <h2 className="display-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5 text-foreground">
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
