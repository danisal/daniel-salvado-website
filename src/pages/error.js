import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import OuchSVG from '../../content/assets/ouch.svg';
import { Container, SVGStyle } from '../style-components/index';

function ErrorPage() {
    return (
        <Layout>
            <SEO title="Something bad happen" keywords={[`error`, `page`]} />
            <Container>
                <OuchSVG css={SVGStyle} />
                <p>Look like something went wrong...</p>

                <p>Don&apos;t worry, you can continue navigating the website{` `}</p>
            </Container>
        </Layout>
    );
}

export default ErrorPage;
