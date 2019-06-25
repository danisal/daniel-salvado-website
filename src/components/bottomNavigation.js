import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Home from '../../content/assets/home-outline.svg';
import Writing from '../../content/assets/quill-drawing-a-line.svg';
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
        min-height: 3.75rem;
        z-index: 1;
    }
`;

const linkCSS = css`
    width: ${rhythm(2.5)};
    align-items: center;
    display: flex;
    flex-direction: column;
    color: black;

    > svg {
        width: 24px;
        height: auto;
        pointer-events: none;
    }

    &:hover,
    &:active {
        box-shadow: none;
    }

    &.active {
        color: ${BLUE};

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
    justify-content: space-around;
    align-items: stretch;
    font-size: 0.75rem;
    line-height: 1;
    text-align: center;

    li {
        margin: 0;
        display: flex;
        align-items: center;

        a {
            padding: 0.25rem;
        }
    }
`;

function BottomNavigation() {
    return (
        <StaticQuery
            query={pageQuery}
            render={() => {
                return (
                    <Wrapper>
                        <UL>
                            <li>
                                <Link activeClassName="active" to="/" css={linkCSS}>
                                    <Home />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/work" css={linkCSS}>
                                    <Work />
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/writing" css={linkCSS}>
                                    <Writing />
                                    Writing
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/say-hello" css={linkCSS}>
                                    <SayHello />
                                    Hello
                                </Link>
                            </li>
                        </UL>
                    </Wrapper>
                );
            }}
        />
    );
}

export default BottomNavigation;

const pageQuery = graphql`
    query PageQuery {
        sitePage {
            path
        }
    }
`;
