import React from 'react';
import { Link } from 'gatsby';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Home from '../../content/assets/home-outline.svg';
import Writing from '../../content/assets/feather-pen.svg';
import Work from '../../content/assets/data.svg';
import SayHello from '../../content/assets/hello-speech-bubble-handmade-chatting-symbol.svg';
import { rhythm } from '../utils/typography';

const BLUE = `#0d47a1`;

const Wrapper = styled.nav`
    display: none;

    @media only screen and (max-width: 760px) {
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        background-color: #fff;
        border-top: 1px solid #ede7f3;
        z-index: 1;
    }
`;

const linkCSS = css`
    display: flex;
    color: black;
    padding: ${rhythm(0.5)} 0 ${rhythm(0.75)};
    flex-basis: 100%;
    transform: scale(0.95);

    &:hover,
    &:active {
        box-shadow: none;
    }

    &.active {
        color: ${BLUE};
        transform: scale(1);

        svg {
            fill: ${BLUE};

            path {
                fill: ${BLUE} !important;
            }
        }
    }
`;

const UL = styled.ul`
    flex: 1;
    list-style: none;
    margin: 0;
    display: flex;

    > li {
        flex: 1;
        margin: 0;
        display: flex;
    }
`;

const Span = styled.span`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.75rem;

    > svg {
        width: 24px;
        height: auto;
        pointer-events: none;
    }
`;

function BottomNavigation() {
    return (
        <Wrapper>
            <UL>
                <li>
                    <Link activeClassName="active" to="/" css={linkCSS}>
                        <Span>
                            <Home />
                            <span>Home</span>
                        </Span>
                    </Link>
                </li>
                <li>
                    <Link activeClassName="active" to="/work" css={linkCSS}>
                        <Span>
                            <Work />
                            <span>Work</span>
                        </Span>
                    </Link>
                </li>
                <li>
                    <Link activeClassName="active" to="/blog" css={linkCSS} partiallyActive>
                        <Span>
                            <Writing />
                            <span>Writing</span>
                        </Span>
                    </Link>
                </li>
                <li>
                    <Link activeClassName="active" to="/contact" css={linkCSS}>
                        <Span>
                            <SayHello />
                            <span>Hello</span>
                        </Span>
                    </Link>
                </li>
            </UL>
        </Wrapper>
    );
}

export default BottomNavigation;
