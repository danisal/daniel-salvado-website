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

const WorkedAt = styled.h4`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const WorkExperience = styled.div``;

const ImageWrapper = styled.div`
    margin: ${rhythm(0.6)};
`;

const Text = styled.p`
    margin-bottom: ${rhythm(0.5)};
`;

const CV = styled.p`
    margin: 0;
`;

const work = [
    {
        company: `Snowball Digital`,
        website: `https://www.snowball.digital`,
        startDate: `2019-05`,
        endDate: new Date(),
        position: `Software Engineer`,
    },
    {
        company: `Evodeck`,
        website: `https://www.evodeck.com`,
        startDate: `2018-01`,
        endDate: `2019-04`,
        position: `Software Engineer`,
    },
    {
        company: `Truphone`,
        website: `https://www.truphone.com`,
        startDate: `2017-06`,
        endDate: `2017-12`,
        position: `Software Engineer`,
    },
    {
        company: `Trading Economics`,
        website: `https://tradingeconomics.com`,
        startDate: `2016-10`,
        endDate: `2017-05`,
        position: `Software Engineer`,
    },
    {
        company: `INEM`,
        abbr: `Instituto Nacional de Emergência Médica`,
        website: `https://www.inem.pt`,
        startDate: `2008-02`,
        endDate: `2016-09`,
        position: `Emergency Medical technician`,
    },
];

const now = new Date();

function MyWork() {
    return (
        <StaticQuery
            query={workQuery}
            render={data => {
                const pdfUrl = data.allFile.edges[0].node.publicURL;

                return (
                    <Layout>
                        <SEO title="My Work" keywords={[`technologies`, `experience`, `work`, `portfolio`]} />
                        <h2>Some of my work</h2>
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
                        <br />
                        <h3>Work Experience</h3>
                        {work.map(w => {
                            const startDate = new Date(w.startDate).toLocaleDateString(`en-gb`, {
                                month: `short`,
                                year: `numeric`,
                            });

                            const endDate =
                                w.endDate >= now
                                    ? `Present`
                                    : new Date(w.endDate).toLocaleDateString(`en-gb`, {
                                          month: `short`,
                                          year: `numeric`,
                                      });

                            return (
                                <WorkExperience key={cuid()}>
                                    <WorkedAt>
                                        <a href={w.website} target="__blank" rel="noopener noreferrer">
                                            {w.abbr ? <abbr title={w.abbr}>{w.company}</abbr> : w.company}
                                        </a>
                                        <span>
                                            {<time dateTime={w.startDate}>{startDate}</time>}
                                            {` - `}
                                            {<time dateTime={w.endDate}>{endDate}</time>}
                                        </span>
                                    </WorkedAt>
                                    <Text>{w.position}</Text>
                                </WorkExperience>
                            );
                        })}
                        <br />
                        <Tech />
                        <br />
                        <CV>
                            If you want a copy of my <abbr title="Curriculum Vitae">CV</abbr> click{` `}
                            <a href={pdfUrl} download>
                                here
                            </a>
                        </CV>
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
        allFile(filter: { extension: { eq: "pdf" } }) {
            edges {
                node {
                    publicURL
                }
            }
        }
    }
`;
