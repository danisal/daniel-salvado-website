import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, image, lang, meta, keywords, title, url }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: title,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                property: `og:url`,
                                content: url,
                            },
                            {
                                name: `og:image`,
                                content: image,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary`,
                            },
                            {
                                name: `twitter:creator`,
                                content: data.site.siteMetadata.author,
                            },
                            {
                                name: `twitter:title`,
                                content: title,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                            {
                                name: `twitter:image`,
                                content: image,
                            },
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                          name: `keywords`,
                                          content: keywords.join(`, `),
                                      }
                                    : [],
                            )
                            .concat(meta)}
                    >
                        {/* DNS Prefetching */}
                        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                        {/* Preconnect */}
                        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
                        <link
                            href="https://fonts.googleapis.com/css?family=Reenie+Beanie&display=swap&text=DanielSalvado"
                            rel="stylesheet"
                        />
                    </Helmet>
                );
            }}
        />
    );
}

SEO.defaultProps = {
    image: ``,
    keywords: [],
    lang: `en`,
    meta: [],
    url: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string,
            name: PropTypes.string,
        }),
    ),
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
};

export default SEO;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;
