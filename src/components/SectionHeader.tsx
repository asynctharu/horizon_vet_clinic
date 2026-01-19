interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ badge, title, description, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {badge && (
        <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-3 bg-secondary px-4 py-1.5 rounded-full animate-fade-in">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-up">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg animate-fade-up delay-100">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
