import { Helmet } from 'react-helmet';;

export default function SEO({title, description, url, type, image}) {

    return (
        <Helmet>
            { /* Standard metadata tags */ }
            <title>{ title }</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={url} />
            { /* End standard metadata tags */ }
            
            { /* Facebook tags */ }
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            { /* End Facebook tags */ }

            { /* Twitter tags */ }
            <meta name="twitter:creator" content="Greg Puac" />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            { /* End Twitter tags */ }
        </Helmet>
    )
}