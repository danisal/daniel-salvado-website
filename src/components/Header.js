import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { rhythm } from '../utils/typography';

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${rhythm(1.5)};
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > a {
        padding: 0 8px;
    }

    @media only screen and (max-width: 760px) {
        display: none;
    }
`;

export default function HeaderComponent() {
    return (
        <Header>
            <Link
                css={css`
                    font-size: 32px;
                    font-family: 'Reenie Beanie';
                    &:hover {
                        box-shadow: none;
                        transform: scale(1.2);
                        transition: ease-in-out 150ms;
                    }
                `}
                to={`/`}
            >
                Daniel Salvado
            </Link>
            <Links>
                {/* <Link
                    style={{
                        textDecoration: 'none',
                        backgroundImage: 'none',
                    }}
                    to={`/`}
                >
                    Home
                </Link> */}
                <Link
                    style={{
                        textDecoration: 'none',
                        backgroundImage: 'none',
                    }}
                    to={`/work`}
                >
                    Work
                </Link>
                <Link
                    style={{
                        textDecoration: 'none',
                        backgroundImage: 'none',
                    }}
                    to={`/writing`}
                >
                    Writing
                </Link>
                <Link
                    style={{
                        textDecoration: 'none',
                        backgroundImage: 'none',
                    }}
                    to={`/say-hello`}
                >
                    Say Hello
                </Link>
            </Links>
        </Header>
    );
}
