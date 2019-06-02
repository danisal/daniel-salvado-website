import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import cuid from 'cuid';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Bio from '../components/bio';
import SEO from '../components/seo';
import Tech from '../components/tech';
import { rhythm } from '../utils/typography';

const shadow = css({
    boxShadow: `7px 8px 30px 1px rgba(0,0,0,0.4)`,
    transition: `box-shadow 0.3s`,
    ':hover': {
        boxShadow: `27px 28px 55px 1px rgba(0,0,0,0.4)`,
    },
});

const WorkedAt = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const WorkExperience = styled.div`
    margin-bottom: ${rhythm(0.4)};
`;

const ImageWrapper = styled.div`
    margin: ${rhythm(0.6)};
`;

function MyWork() {
    return (
        <StaticQuery
            query={workQuery}
            render={data => {
                return (
                    <Layout>
                        <SEO title="My Work" />
                        <h3>Here you can see some of my work</h3>
                        {data.allSitesYaml.edges.map(({ node }) => (
                            <ImageWrapper key={cuid()}>
                                <a href={node.url} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        fluid={node.childScreenshot.screenshotFile.childImageSharp.fluid}
                                        fadeIn
                                        alt={node.name}
                                        css={shadow}
                                    />
                                </a>
                            </ImageWrapper>
                        ))}
                        <h3>Experience</h3>
                        <WorkExperience>
                            <WorkedAt>
                                <h4>
                                    <a href="https://www.snowball.digital" target="__blank">
                                        Snowball Digital
                                    </a>
                                </h4>
                                <h5>May 2019 - Current</h5>
                            </WorkedAt>
                            <p>Software Engineer</p>
                        </WorkExperience>
                        <WorkExperience>
                            <WorkedAt>
                                <h4>
                                    <a href="https://www.evodeck.com" target="__blank">
                                        Evodeck
                                    </a>
                                </h4>
                                <h5>January 2018 - April 2019</h5>
                            </WorkedAt>
                            <p>Software Engineer</p>
                        </WorkExperience>
                        <WorkExperience>
                            <WorkedAt>
                                <h4>
                                    <a href="https://www.truphone.com/" target="__blank">
                                        Truphone
                                    </a>
                                </h4>
                                <h5>June 2017 - December 2017</h5>
                            </WorkedAt>
                            <p>Software Engineer</p>
                        </WorkExperience>
                        <WorkExperience>
                            <WorkedAt>
                                <h4>
                                    <a href="https://www.tradingeconomics.com" target="__blank">
                                        Trading Economics
                                    </a>
                                </h4>
                                <h5>October 2016 - May 2017</h5>
                            </WorkedAt>
                            <p>Web Developer</p>
                        </WorkExperience>
                        <Tech />
                        <Bio />
                    </Layout>
                );
            }}
        />
    );
}

MyWork.propTypes = {};

export default MyWork;

const workQuery = graphql`
    query DefaultWorkQuery {
        allSitesYaml {
            edges {
                node {
                    url
                    name
                    childScreenshot {
                        screenshotFile {
                            childImageSharp {
                                fluid(maxWidth: 624) {
                                    src
                                    srcSet
                                    srcWebp
                                    aspectRatio
                                    sizes
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
