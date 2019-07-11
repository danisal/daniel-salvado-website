const SITE_URL = `https://www.danielsalvado.com`;

module.exports = {
    siteMetadata: {
        title: `Daniel Salvado website`,
        author: `Daniel Salvado`,
        description: `Daniel Salvado's personal virtual space`,
        siteUrl: SITE_URL,
        social: {
            github: `danisal`,
            linkedIn: `daniel-salvado`,
            twitter: `danisalTweets`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 650,
                            withWebp: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-external-links`,
                        options: {
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {},
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-143170012-1`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Daniel Salvado website`,
                short_name: `Daniel Salvado`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `./content/assets/favicon/favicon-32x32.png`,
                include_favicon: true,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-emotion`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        `gatsby-transformer-screenshot`,
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/config/`,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: SITE_URL,
                sitemap: `${SITE_URL}/sitemap.xml`,
                policy: [{ userAgent: `*`, allow: `/` }],
            },
        },
    ],
};
