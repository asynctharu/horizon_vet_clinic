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
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Horizon Vet Clinic & Pet Shop" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
