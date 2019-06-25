import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { rhythm } from '../utils/typography';
import Footer from './footer';
import Header from './header';
import BottomNavigation from './bottomNavigation';

const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(25)};
    padding: ${rhythm(1.5)} ${rhythm(1)};
`;

function Layout({ children }) {
    return (
        <Wrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
            <BottomNavigation />
        </Wrapper>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
