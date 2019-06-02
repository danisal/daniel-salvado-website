import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { rhythm, scale } from '../utils/typography';
import Footer from './footer';
import Header from './header';
import BottomNavigation from './bottomNavigation';

const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

function Layout({ children }) {
    return (
        <Wrapper>
            <Header />
            <main
                style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    maxWidth: rhythm(24),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
            >
                {children}
            </main>
            <Footer />
            <BottomNavigation />
        </Wrapper>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
