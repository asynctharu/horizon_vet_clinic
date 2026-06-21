interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ badge, title, description, centered = false }: SectionHeaderProps) => {
  // Editorial flourish: render the last word in italic serif
  const words = title.trim().split(" ");
  const lastWord = words.length > 1 ? words.pop() : "";
  const head = words.join(" ");

  return (
    <div className={`mb-16 lg:mb-24 ${centered ? "mx-auto text-center max-w-3xl" : "max-w-4xl"}`}>
      {badge && (
        <div className={`flex items-center gap-3 mb-6 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-[hsl(var(--gold))]/60" />
          <span className="editorial-eyebrow">{badge}</span>
          <span className="h-px w-8 bg-[hsl(var(--gold))]/60" />
        </div>
      )}
      <h2 className="display-font text-[2.25rem] md:text-5xl lg:text-[3.75rem] leading-[1.05] mb-6 text-foreground">
        {head}
        {lastWord && (
          <>
            {" "}
            <span className="display-italic text-[hsl(var(--ink))]">{lastWord}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`body-sans text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
