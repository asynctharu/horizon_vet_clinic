# Shared UI Primitives

## Button (shadcn/ui)
- File: `src/components/ui/button.tsx`
- shadcn/ui Button with cva variants: default, destructive, outline, secondary, ghost, link
- Sizes: default, sm, lg, icon
- Supports asChild via Radix Slot

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-md",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

## Card (shadcn/ui)
- File: `src/components/ui/card.tsx`
- Standard shadcn Card with CardHeader, CardTitle, CardDescription, CardContent, CardFooter

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

## SectionHeader
- File: `src/components/SectionHeader.tsx`
- Props: badge?, title, description?, centered?
- Editorial-style heading with italic last word, optional gold eyebrow, gold divider lines

```tsx
interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ badge, title, description, centered = false }: SectionHeaderProps) => {
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
```

## NavLink
- File: `src/components/NavLink.tsx`
- Wrapper around react-router-dom NavLink with additional className support

```tsx
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
```

## SEO
- File: `src/components/SEO.tsx`
- Props: title?, description?, canonical?, type?, image?
- Helmet component for meta tags, OG, Twitter cards

```tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const BASE_URL = "https://vetclinichorizon.com";
const DEFAULT_TITLE = "Horizon Vet Clinic & Pet Shop | Nepalganj";
const DEFAULT_DESCRIPTION = "Horizon Vet Clinic & Pet Shop in Nepalganj provides compassionate veterinary care, advanced pet treatments, and personalized services for your pets. Book an appointment today.";
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&h=630&fit=crop";

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = "",
  type = "website",
  image = DEFAULT_IMAGE,
}: SEOProps) => {
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Horizon Vet Clinic & Pet Shop" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
```

## CardDoctor
- File: `src/components/CardDoctor.tsx`
- Props: id, name, specialty, image, intro
- Soft card with image, name, specialty badge, intro text, view profile link

```tsx
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
    <Link to={`/doctors/${id}`} className="soft-card group block">
      <div className="overflow-hidden mb-8" style={{ borderRadius: "2rem" }}>
        <img src={image} alt={name} className="w-full aspect-[4/5] object-cover object-center transition-transform duration-700 md:group-hover:scale-105" loading="lazy" />
      </div>
      <h3 className="display-font text-2xl md:text-3xl font-bold tracking-tight mb-2 text-foreground">{name}</h3>
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#FFB7B2] mb-5">{specialty}</p>
      <div className="h-px bg-stone-200 w-full mb-5" />
      <p className="text-base leading-relaxed text-muted-foreground mb-6">{intro}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-[#FFB7B2] transition-colors">
        View Profile <span aria-hidden>→</span>
      </span>
    </Link>
  );
};

export default CardDoctor;
```

## CardTreatment
- File: `src/components/CardTreatment.tsx`
- Props: title, description, icon, slug
- Soft card with tinted icon circle, title, description, learn more link

```tsx
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CardTreatmentProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

const tintCycle = ["bg-[#E8EFE8]", "bg-[#EFEDF4]", "bg-[#FFE4E1]", "bg-[#FDFCF8] border border-stone-100"];

const CardTreatment = ({ title, description, icon: Icon, slug }: CardTreatmentProps) => {
  const tint = tintCycle[(title.length) % tintCycle.length];
  return (
    <Link to={`/treatments#${slug}`} className="soft-card group block h-full flex flex-col justify-between min-h-[280px]">
      <div className={`w-14 h-14 pill-rounded flex items-center justify-center ${tint}`}>
        <Icon className="w-7 h-7 stroke-[1.5] text-foreground" />
      </div>
      <div className="mt-8">
        <h3 className="display-font text-xl md:text-2xl font-bold mb-3 tracking-tight text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-5">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-[#FFB7B2] transition-colors">
          Learn More <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
};

export default CardTreatment;
```

## CardBlog
- File: `src/components/CardBlog.tsx`
- Props: slug, title, excerpt, thumbnail, date, category
- Soft card with image, category badge, date, title, excerpt, read article link

```tsx
import { Link } from "react-router-dom";

interface CardBlogProps {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  category: string;
}

const CardBlog = ({ slug, title, excerpt, thumbnail, date, category }: CardBlogProps) => {
  return (
    <Link to={`/blogs/${slug}`} className="soft-card group block p-0 overflow-hidden">
      <div className="overflow-hidden">
        <img src={thumbnail} alt={title} className="w-full h-56 object-cover transition-transform duration-700 md:group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#FFB7B2] bg-[#FFE4E1] px-3 py-1 pill-rounded">{category}</span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="display-font text-xl md:text-2xl font-bold tracking-tight mb-3 leading-snug text-foreground group-hover:text-[#FFB7B2] transition-colors">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-5">{excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">Read Article <span aria-hidden>→</span></span>
      </div>
    </Link>
  );
};

export default CardBlog;
```

## ScrollToTop
- File: `src/components/ScrollToTop.tsx`
- Scrolls to top on route change

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export default ScrollToTop;
```

## cn utility
- File: `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
