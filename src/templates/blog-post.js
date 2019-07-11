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
import Linkedin from '../../content/assets/linkedin-in-brands.svg';
import Facebook from '../../content/assets/facebook-f-brands.svg';
import Twitter from '../../content/assets/twitter-brands.svg';

import { socialLinks, windowOpen } from './utils';

const UL = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Separator = styled.hr`
    display: none;

    @media only screen and (max-width: 760px) {
        display: block;
    }
`;

const Share = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
    margin: ${rhythm(1)} 0;

    @media only screen and (max-width: 760px) {
        justify-content: flex-end;
    }

    .line {
        flex-grow: 1;
        border-top: 1px solid rgb(211, 211, 211);

        @media only screen and (max-width: 760px) {
            display: none;
        }
    }

    > * {
        margin-right: 10px;
    }
`;

const ShareButton = styled.button`
    cursor: pointer;
    border-radius: 4px;
    padding: 4px 16px;
    color: #134896;
    border: 1px solid #134896;
    transition: cubic-bezier(0.46, 0.03, 0.52, 0.96) 300ms;
    background-color: white;

    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #134896;
    }

    &:focus {
        outline: none;
    }

    &:active {
        border-style: solid;
    }
`;

const iconSize = css`
    width: 20px;
    height: 20px;
    vertical-align: middle;
`;

function BlogPostTemplate({ data, pageContext }) {
    const post = data.markdownRemark;
    const { previous, next } = pageContext;
    const { site, markdownRemark } = data;

    const { siteUrl } = site.siteMetadata;
    const {
        excerpt,
        fields: { slug },
    } = markdownRemark;

    const link = `${siteUrl}${slug}`;

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
            <Separator />
            <Share>
                <div className="line" />
                <span>Share this article</span>
                <ShareButton
                    onClick={windowOpen(socialLinks.linkedin({ title: post.frontmatter.title, link, excerpt }, {}))}
                >
                    <Linkedin css={iconSize} />
                </ShareButton>
                <ShareButton
                    onClick={windowOpen(socialLinks.facebook({ title: post.frontmatter.title, link, excerpt }, {}))}
                >
                    <Facebook css={iconSize} />
                </ShareButton>
                <ShareButton
                    onClick={windowOpen(socialLinks.twitter({ title: post.frontmatter.title, link, excerpt }, {}))}
                >
                    <Twitter css={iconSize} />
                </ShareButton>
            </Share>
            <Separator />
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
                siteUrl
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
            fields {
                slug
            }
        }
    }
`;
