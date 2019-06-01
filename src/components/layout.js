import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import Footer from './footer';
import Header from './header';
import styled from '@emotion/styled';
import BottonNavigation from './bottomNavigation';

const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

class Layout extends Component {
    render() {
        const { location, title, children } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        let header;

        if (location.pathname === rootPath) {
            header = (
                <h1
                    style={{
                        ...scale(1.5),
                        marginBottom: rhythm(1.5),
                        marginTop: 0,
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h1>
            );
        } else {
            header = (
                <h3
                    style={{
                        fontFamily: `Montserrat, sans-serif`,
                        marginTop: 0,
                        marginBottom: rhythm(-1),
                    }}
                >
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                </h3>
            );
        }
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
                <BottonNavigation />
            </Wrapper>
        );
    }
}

export default Layout;
