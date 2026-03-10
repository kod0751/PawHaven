import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  robots?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  robots = "index, follow",
}: SEOProps) {
  return (
    <Helmet>
      <title>PawHaven - {title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`PawHaven - ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={"/public/img/logo.png"} />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
  );
}
