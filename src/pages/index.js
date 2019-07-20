import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import SEO from '../components/seo';
import Bio from '../components/bio';
import Layout from '../components/layout';
import { rhythm } from '../utils/typography';

const Card = styled(Link)`
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    color: inherit;
    padding: ${rhythm(0.5)} ${rhythm(0.75)};
    transition: 250ms ease;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    }

    h4 {
        margin-top: 0;
    }

    img {
        margin: 0 auto ${rhythm(0.5)};
        max-height: 200px;
        width: auto;
    }

    p {
        margin: 0;
    }
`;

function SiteIndex({ data }) {
    const { excerpt, fields, frontmatter } = data.allMarkdownRemark.nodes[0];

    const alt = frontmatter.image.childImageSharp.fixed.originalName.replace(/-/g, ` `).replace(/\.[^/.]+$/, ``);

    return (
        <Layout>
            <SEO title="Home" keywords={[`Daniel`, `Salvado`, `website`]} />
            <h2>Welcome to my personal virtual space!</h2>
            <p>
                Hi, my name is Daniel Salvado, I&apos;m an enthusiastic developer who loves to work within the
                JavaScript ecosystem and always strive to improve on code and build beautiful apps.
            </p>
            <p>
                In here you will be able to find some of the work that I&apos;ve done, places where I&apos;ve worked and
                some articles that I&apos;ve written.
            </p>
            <p>
                I love to share my know-how and things that I find interesting and because of that I do some writing on
                things that I&apos;ve tested and in some way, helped me on the products that I was building!
            </p>
            <p>
                Feel free to share the articles or even to contact me if you have any questions, suggestions or simply
                say hi!
            </p>
            <h3>Check out my latest article</h3>
            <Card to={fields.slug}>
                <h4>{frontmatter.title}</h4>
                <img
                    src={frontmatter.image.childImageSharp.fixed.src}
                    srcSet={frontmatter.image.childImageSharp.fixed.srcSet}
                    alt={alt}
                />
                <p>{excerpt}</p>
            </Card>
            <Bio />
        </Layout>
    );
}

SiteIndex.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            nodes: PropTypes.arrayOf(
                PropTypes.shape({
                    frontmatter: PropTypes.shape({
                        title: PropTypes.string,
                        image: PropTypes.shape({
                            childImageSharp: PropTypes.shape({
                                fixed: PropTypes.shape({
                                    src: PropTypes.string,
                                    srcSet: PropTypes.string,
                                    originalName: PropTypes.string,
                                }),
                            }),
                        }),
                    }),
                    excerpt: PropTypes.string,
                    fields: PropTypes.shape({
                        slug: PropTypes.string,
                    }),
                }),
            ),
        }),
    }).isRequired,
};

export default SiteIndex;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(limit: 1) {
            nodes {
                frontmatter {
                    title
                    image {
                        childImageSharp {
                            fixed {
                                srcSet
                                src
                                originalName
                            }
                        }
                    }
                }
                excerpt(pruneLength: 100)
                fields {
                    slug
                }
            }
        }
    }
`;
