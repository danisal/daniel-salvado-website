import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="The page you looking for doesn't exist" />
            <h1>Not Found</h1>
            <p>
                You just hit a route that doesn&#39;t exist...{` `}
                <span role="image" aria-label="sad face">
                    😞
                </span>
            </p>
        </Layout>
    );
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
