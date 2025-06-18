import { Helmet } from 'react-helmet';

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
  robots = 'index, follow',
}: SEOProps) {
  return (
    <Helmet>
      <title>PawHaven - {title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
    </Helmet>
  );
}
