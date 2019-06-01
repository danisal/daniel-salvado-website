import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Layout from '../components/layout';

class SiteIndex extends Component {
    static propTypes = {};

    render() {
        const { location, data } = this.props;

        return (
            <Layout location={location} title={data.site.siteMetadata.title}>
                <SEO title={'Home'} keywords={['Daniel', 'Salvado', 'site']} />
                <h2>Welcome to danielsalvado.com</h2>
                <p>
                    Hi, I'm Daniel Salvado, software engineer living in Faro,
                    Portugal and here you may find my personal virtual space!
                </p>
                <p>
                    I am apaixonated about JavaScript technologies and helping
                    other reach their goals/desires. For that I user my know-who
                    that I have been aquired long of the years and tried to give
                    your dreams a body.
                </p>
                <p>
                    Lover of the JavaScript ecosystem, seeker of good practices,
                    team player, eager and autonomous learner. Problem solver.
                    Strive to improve on code and the people around me.
                </p>
                <p>
                    Some of the technologies that I'm loving working with, are:
                    React, NodeJS, GatsbyJS, HTML5, CSS3, SASS among others!
                </p>
                <p>
                    Now that you know a bit more about me, take a look at some
                    of my <Link to="/work">work</Link> and{' '}
                    <Link to="/writing">articles</Link> that I wrote
                </p>
                <p>
                    In here you can find some o my writing, work and contact me!
                </p>
                <p>
                    Now that you know a bit more about me, you can download my{' '}
                    <a href="">
                        <em>curriculum vitae</em>
                    </a>{' '}
                    for a more detailed working experience and education or drop
                    me a line in <Link to="say-hello">here</Link>.
                </p>
                <Bio />
            </Layout>
        );
    }
}

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
