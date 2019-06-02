import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

function BlogPostTemplate({ data, pageContext }) {
    const post = data.markdownRemark;
    const { previous, next } = pageContext;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <h1>{post.frontmatter.title}</h1>
            <p
                style={{
                    ...scale(-1 / 5),
                    display: `block`,
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-1),
                }}
            >
                {post.frontmatter.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
                style={{
                    marginBottom: rhythm(1),
                }}
            />
            <ul
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}
            >
                <li>
                    {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </li>
            </ul>
            <Bio />
        </Layout>
    );
}

BlogPostTemplate.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                date: PropTypes.string,
                excerpt: PropTypes.string,
                title: PropTypes.string,
            }),
        }),
    }),
    pageContext: PropTypes.shape({
        next: PropTypes.shape({
            fields: PropTypes.shape({
                slug: PropTypes.string,
            }),
            frontmatter: PropTypes.shape({
                title: PropTypes.string,
            }),
        }),
        previous: PropTypes.shape({
            fields: PropTypes.shape({
                slug: PropTypes.string,
            }),
            frontmatter: PropTypes.shape({
                title: PropTypes.string,
            }),
        }),
    }),
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
