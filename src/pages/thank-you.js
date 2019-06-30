import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ThankYouSVG from '../../content/assets/thank-you.svg';
import { Container, SVGStyle } from '../style-components';

function ThankYou() {
    return (
        <Layout>
            <SEO title="Thank you for your contact" />
            <Container>
                <ThankYouSVG css={SVGStyle} />
                <p>Thank you for your contact. I&apos;ll get to you as soon as possible.</p>

                <p>
                    In the meanwhile you can continue to explore my website and know a bit more about me!{` `}
                    <span role="img" aria-label="smile face emoji">
                        😁
                    </span>
                </p>
            </Container>
        </Layout>
    );
}

export default ThankYou;
