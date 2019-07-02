import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { InfoWrapper } from '../style-components';

function Writing({ data }) {
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout>
            <SEO title="All posts" keywords={[`blog`, `writing`, `technologies`]} />
            <h2>Reading material</h2>
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                    <div key={node.fields.slug}>
                        <h3>
                            <Link to={node.fields.slug}>{title}</Link>
                        </h3>
                        <InfoWrapper>
                            <small>{node.frontmatter.date}</small>
                            <small>
                                <span role="img" aria-label="clock emoji">
                                    ⏱
                                </span>
                                {` ${node.timeToRead} minute${node.timeToRead > 1 ? `s` : ``} reading`}
                            </small>
                        </InfoWrapper>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: node.excerpt,
                            }}
                        />
                    </div>
                );
            })}
            <Bio />
        </Layout>
    );
}

Writing.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        excerpt: PropTypes.string,
                        fields: PropTypes.shape({
                            slug: PropTypes.string,
                        }),
                        frontmatter: PropTypes.shape({
                            date: PropTypes.string,
                            title: PropTypes.string,
                        }),
                        timeToRead: PropTypes.number,
                    }),
                }),
            ),
        }),
    }),
};

export default Writing;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                    timeToRead
                }
            }
        }
    }
`;
