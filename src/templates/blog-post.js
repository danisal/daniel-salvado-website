import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import { InfoWrapper } from '../style-components';

const UL = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
`;

function BlogPostTemplate({ data, pageContext }) {
    const post = data.markdownRemark;
    const { previous, next } = pageContext;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.excerpt} keywords={post.frontmatter.keywords} />
            <h1>{post.frontmatter.title}</h1>
            <InfoWrapper
                css={css`
                    margin-bottom: ${rhythm(1)};
                `}
            >
                <small>{post.frontmatter.date}</small>
                <small>
                    <span role="img" aria-label="clock emoji">
                        ⏱
                    </span>
                    {` ${post.timeToRead} minute${post.timeToRead > 1 ? `s` : ``} reading`}
                </small>
            </InfoWrapper>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
                style={{
                    marginBottom: rhythm(1),
                }}
            />
            <UL>
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
            </UL>
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
            timeToRead: PropTypes.number,
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
                keywords
            }
            timeToRead
        }
    }
`;
