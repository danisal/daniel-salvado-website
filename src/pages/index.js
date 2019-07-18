import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Layout from '../components/layout';

function SiteIndex() {
    return (
        <>
            <Layout>
                <SEO title="Home" keywords={[`Daniel`, `Salvado`, `website`]} />
                <h2>Welcome to my personal virtual space!</h2>
                <p>
                    Hi, my name is Daniel Salvado, I&apos;m an enthusiastic developer who loves to work within the
                    JavaScript ecosystem and always strive to improve on code and build beautiful apps.
                </p>
                <p>
                    In here you will be able to find some of the work that I&apos;ve done, places where I&apos;ve worked
                    and some articles that I&apos;ve written.
                </p>
                <p>
                    I love to share my know-how and things that I find interesting and because of that I do some writing
                    on things that I&apos;ve tested and in some way, helped me on the products that I was building!
                </p>
                <p>
                    Feel free to share the articles or even to contact me if you have any questions, suggestions or
                    simply say hi!
                </p>
                <Bio />
            </Layout>
            <script>
                {`if (window.netlifyIdentity) {
                    window.netlifyIdentity.on("init", user => {
                    if (!user) {
                        window.netlifyIdentity.on("login", () => {
                            document.location.href = "/admin/";
                        });
                    }
                })}`}
            </script>
        </>
    );
}

SiteIndex.propTypes = {};

export default SiteIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
