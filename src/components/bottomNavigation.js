import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Terminal from '../../content/assets/terminal.svg';
import Quill from '../../content/assets/quill.svg';
import Envelop from '../../content/assets/envelop.svg';
import Home from '../../content/assets/home.svg';
import { rhythm } from '../utils/typography';

const YELLOW = `#ffeb3b`;
const BLUE = `#0d47a1`;

const Wrapper = styled.div`
    display: none;

    @media only screen and (max-width: 760px) {
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        background-color: #fff;
        border-top: 1px solid #ede7f3;
        min-height: 3.5rem;
    }
`;

const SmallText = styled.small`
    display: block;
`;

const linkCSS = css`
    width: ${rhythm(2.5)};
    align-items: center;
    display: flex;
    flex-direction: column;
    color: black;

    > svg {
        width: 24px;
    }

    &:hover,
    &:active {
        box-shadow: none;
    }

    &.active {
        color: ${BLUE};

        > svg {
            fill: ${BLUE};
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
                        <Link activeClassName="active" to="/" css={linkCSS}>
                            <Home />
                            <SmallText>Home</SmallText>
                        </Link>
                        <Link activeClassName="active" to="/work" css={linkCSS}>
                            <Terminal />
                            <SmallText>Work</SmallText>
                        </Link>
                        <Link activeClassName="active" to="/writing" css={linkCSS}>
                            <Quill />
                            <SmallText>Writing</SmallText>
                        </Link>
                        <Link activeClassName="active" to="/say-hello" css={linkCSS}>
                            <Envelop />
                            <SmallText>Say Hello</SmallText>
                        </Link>
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
