import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CliffSVG from '../../content/assets/cliff.svg';
import { Container, SVGStyle } from '../style-components';

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="The page you looking for doesn't exist" />
            <Container>
                <CliffSVG css={SVGStyle} />
                <p>
                    Seems like the path you are looking for, doesn&#39;t exist...{` `}
                    <span role="img" aria-label="sad face emoji">
                        😞
                    </span>
                </p>
            </Container>
        </Layout>
    );
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
