import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import GitHub from '../../content/assets/github-brands.svg';
import LinkedIn from '../../content/assets/linkedin-in-brands.svg';
import Twitter from '../../content/assets/twitter-brands.svg';

import { rhythm } from '../utils/typography';

const StyledFooter = styled.footer`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'name social legal';
    align-items: center;
    justify-items: center;

    @media only screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:
            'social'
            'legal'
            'name';
    }
    padding: 0 ${rhythm(1.5)};
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
    &:hover {
        color: #134896;
    }
    grid-area: legal;
    @media only screen and (min-width: 500px) {
        justify-self: flex-end;
    }
`;

const socialCSS = css`
    grid-area: social;
`;

const year = new Date().getFullYear();

function Footer() {
    return (
        <StaticQuery
            query={footerQuery}
            render={({ site }) => {
                const { github, linkedIn, twitter } = site.siteMetadata.social;

                return (
                    <StyledFooter>
                        <FooterText css={nameCSS}>{`© ${year} Daniel Salvado`}</FooterText>
                        <IconsWrapper css={socialCSS}>
                            <SocialButton
                                href={`https://www.linkedin.com/in/${linkedIn}/`}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <LinkedIn css={iconSize} aria-label="linkedIn" />
                            </SocialButton>
                            <SocialButton
                                href={`https://github.com/${github}`}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <GitHub css={iconSize} aria-label="github" />
                            </SocialButton>
                            <SocialButton
                                href={`https://twitter.com/${twitter}`}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Twitter css={iconSize} aria-label="twitter" />
                            </SocialButton>
                        </IconsWrapper>
                        <Link css={legalCSS} to="/legal-notice">
                            Legal Notice
                        </Link>
                    </StyledFooter>
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

Footer.propTypes = {
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

export default Footer;
