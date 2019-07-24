import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import GitHub from '../../content/assets/github-brands.svg';
import LinkedIn from '../../content/assets/linkedin-in-brands.svg';
import Twitter from '../../content/assets/twitter-brands.svg';

import { rhythm } from '../utils/typography';

const Footer = styled.footer``;

const Section = styled.footer`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'name social legal';
    align-items: center;
    justify-items: center;
    padding: 0 ${rhythm(1.5)};
    max-width: 1200px;
    margin: 0 auto;

    @media only screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:
            'social'
            'legal'
            'name';
    }
`;

const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const SocialButton = styled.a`
    text-decoration: none;
    color: inherit;
    text-shadow: none;
    background-image: none;
    padding: 8px;
    margin: 8px;

    &:hover {
        color: #134896;
    }
`;

const iconSize = css`
    width: 20px;
    height: 20px;
    vertical-align: middle;
`;

const FooterText = styled.p`
    margin: 0;
`;

const nameCSS = css`
    grid-area: name;

    @media only screen and (min-width: 500px) {
        justify-self: flex-start;
    }
`;

const legalCSS = css`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    background-image: none;
    grid-area: legal;

    &:hover {
        color: #134896;
    }

    @media only screen and (min-width: 500px) {
        justify-self: flex-end;
    }
`;

const socialCSS = css`
    grid-area: social;
`;

const year = new Date().getFullYear();

function FooterComponent() {
    return (
        <StaticQuery
            query={footerQuery}
            render={({ site }) => {
                const { github, linkedIn, twitter } = site.siteMetadata.social;

                return (
                    <Footer>
                        <Section>
                            <FooterText css={nameCSS}>{`© ${year} Daniel Salvado`}</FooterText>
                            <IconsWrapper css={socialCSS}>
                                <SocialButton
                                    href={`https://www.linkedin.com/in/${linkedIn}/`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Daniel on linkedin"
                                >
                                    <LinkedIn css={iconSize} aria-label="linkedIn" />
                                </SocialButton>
                                <SocialButton
                                    href={`https://github.com/${github}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Daniel on github"
                                >
                                    <GitHub css={iconSize} aria-label="github" />
                                </SocialButton>
                                <SocialButton
                                    href={`https://twitter.com/${twitter}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Daniel on twitter"
                                >
                                    <Twitter css={iconSize} aria-label="twitter" />
                                </SocialButton>
                            </IconsWrapper>
                            <Link css={legalCSS} to="/legal-notice">
                                Legal Notice
                            </Link>
                        </Section>
                    </Footer>
                );
            }}
        />
    );
}

const footerQuery = graphql`
    query footerQuery {
        site {
            siteMetadata {
                social {
                    github
                    linkedIn
                    twitter
                }
            }
        }
    }
`;

FooterComponent.propTypes = {
    site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
            social: PropTypes.shape({
                github: PropTypes.string.isRequired,
                linkedIn: PropTypes.string.isRequired,
                twitter: PropTypes.string.isRequired,
            }),
        }),
    }),
};

export default FooterComponent;
