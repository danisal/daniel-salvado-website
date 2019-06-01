import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author, social } = data.site.siteMetadata;
                return (
                    <Fragment>
                        <h3>About the Author</h3>
                        <div
                            style={{
                                display: `flex`,
                                marginBottom: rhythm(2.5),
                            }}
                        >
                            <Image
                                fixed={data.avatar.childImageSharp.fixed}
                                alt={author}
                                style={{
                                    marginRight: rhythm(1 / 2),
                                    marginBottom: 0,
                                    minWidth: 90,
                                    borderRadius: `100%`,
                                }}
                            />
                            <div>
                                <h4 style={{ margin: `0 0 10px` }}>
                                    Daniel Salvado
                                </h4>
                                <p>
                                    Lives and works in Faro building useful
                                    things.
                                    {` `}
                                    <a
                                        href={`https://twitter.com/${
                                            social.twitter
                                        }`}
                                    >
                                        You should follow him on Twitter
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Fragment>
                );
            }}
        />
    );
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 90, height: 90) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    twitter
                }
            }
        }
    }
`;

export default Bio;
