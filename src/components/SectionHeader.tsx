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
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-8 border-2 border-foreground" />
          <span className="mono-label">{badge}</span>
        </div>
      )}
      <h2 className="display-font text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/70 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
