import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Layout from '../components/layout';

function SiteIndex({ location, data }) {
    return (
        <Layout location={location} title={data.site.siteMetadata.title}>
            <SEO title="Home" keywords={[`Daniel`, `Salvado`, `site`]} />
            <h2>Welcome to my personal virtual space!</h2>
            <p>
                Hi, I&apos;m Daniel Salvado, a father, husband and an enthusiast developer currently living in Skien,
                Norway!
            </p>
            <p>
                I&apos;m passionate about JavaScript technologies and on helping other reach their dreams. For that I
                use my know-who that I acquired long of the years and tried to give your dreams a body.
            </p>
            <p>
                Lover of the JavaScript ecosystem, seeker of good practices, team player, eager and autonomous learner.
                Problem solver. Strive to improve on code and the people around me.
            </p>
            <p>
                Some of the technologies that I&apos;m loving working with, are: React, NodeJS, GatsbyJS, HTML5, CSS3,
                SASS among others!
            </p>
            <p>
                Now that you know a bit more about me, take a look at some of my
                {` `}
                <Link to="/work">work</Link> and{` `}
                <Link to="/writing">articles</Link> that I wrote
            </p>
            <p>In here you can find some o my writing, work and contact me!</p>
            <p>
                Now that you know a bit more about me, you can download my
                {` `}
                <a href="">
                    <em>curriculum vitae</em>
                </a>
                {` `}
                for a more detailed working experience and education or drop me a line in{` `}
                <Link to="/say-hello">here</Link>.
            </p>
            <Bio />
        </Layout>
    );
}

SiteIndex.propTypes = {
    location: PropTypes.object,
    data: PropTypes.object,
};

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
