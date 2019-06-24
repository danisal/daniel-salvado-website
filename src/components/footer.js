import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// import Codepen from '../../content/assets/codepen-brands.svg';
import GitHub from '../../content/assets/github-brands.svg';
// import Instagram from '../../content/assets/instagram-brands.svg';
import LinkedIn from '../../content/assets/linkedin-in-brands.svg';
// import Medium from '../../content/assets/medium-brands.svg';
import Twitter from '../../content/assets/twitter-brands.svg';

import { rhythm } from '../utils/typography';

const StyledFooter = styled.footer`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'name social legal';
    align-items: center;
    justify-items: center;

    @media (max-width: 500px) {
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

const year = new Date().getFullYear();

function Footer() {
    return (
        <StyledFooter>
            <FooterText
                css={css`
                    grid-area: name;
                    @media (min-width: 500px) {
                        justify-self: flex-start;
                    }
                `}
            >
                {`© ${year} Daniel Salvado`}
            </FooterText>
            <IconsWrapper
                css={css`
                    grid-area: social;
                `}
            >
                <SocialButton
                    href="https://www.linkedin.com/in/daniel-salvado/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LinkedIn css={iconSize} aria-label="linkedin" />
                </SocialButton>
                <SocialButton href="https://github.com/danisal" rel="noopener noreferrer" target="_blank">
                    <GitHub css={iconSize} aria-label="github" />
                </SocialButton>
                {/* <SocialButton href="https://codepen.io/danisal/" rel="noopener noreferrer" target="_blank">
                    <Codepen css={iconSize} aria-label="codepen" />
                </SocialButton> */}
                {/* <SocialButton href="https://medium.com/@daniel.salvado" rel="noopener noreferrer" target="_blank">
                    <Medium css={iconSize} aria-label="medium" />
                </SocialButton> */}
                <SocialButton href="https://twitter.com/danielsalvado1" rel="noopener noreferrer" target="_blank">
                    <Twitter css={iconSize} aria-label="twitter" />
                </SocialButton>
                {/* <SocialButton
                    href="https://www.instagram.com/dani.salvado/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Instagram css={iconSize} aria-label="instagram" />
                </SocialButton> */}
            </IconsWrapper>
            <Link
                css={css`
                    box-shadow: none;
                    text-decoration: none;
                    color: inherit;
                    background-image: none;
                    &:hover {
                        color: #134896;
                    }
                    grid-area: legal;
                    @media (min-width: 500px) {
                        justify-self: flex-end;
                    }
                `}
                to="/legal-notice"
            >
                Legal Notice
            </Link>
        </StyledFooter>
    );
}

export default Footer;
