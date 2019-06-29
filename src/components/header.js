import React, { useEffect, useState } from 'react';
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
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 2;
    box-shadow: ${props => (props.shadow ? `0 0px 6px 0px rgba(0, 0, 0, 0.1)` : `none`)};
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

function HeaderComponent() {
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        window.addEventListener(`scroll`, handleWindowScroll);

        return function cleanup() {
            window.removeEventListener(`scroll`, handleWindowScroll);
        };
    });

    const handleWindowScroll = () => {
        return setShadow(window.pageYOffset > 0);
    };

    return (
        <Header shadow={shadow}>
            <Link
                css={css`
                    font-size: 40px;
                    font-family: 'Reenie Beanie';
                    &:hover {
                        box-shadow: none;
                    }
                `}
                to="/"
            >
                Daniel Salvado
            </Link>
            <Links>
                <Link to="/">Home</Link>
                <Link to="/work">Work</Link>
                <Link to="/writing">Writing</Link>
                <Link
                    style={{
                        textDecoration: `none`,
                        backgroundImage: `none`,
                    }}
                    to="/say-hello"
                >
                    Say Hello
                </Link>
            </Links>
        </Header>
    );
}

export default HeaderComponent;
