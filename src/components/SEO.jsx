import { Helmet } from 'react-helmet-async'
export default function SEO({ title, description }) {
  return (<Helmet>
    <title>{title} | M&M Abogados</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </Helmet>)
}
