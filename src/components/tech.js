import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import CSS3 from '../../content/assets/css3.svg';
import Gatsby from '../../content/assets/gatsby.svg';
import Git from '../../content/assets/git.svg';
import Graphql from '../../content/assets/graphql.svg';
import HTML5 from '../../content/assets/html5.svg';
import JS from '../../content/assets/javascript.svg';
import MongoDB from '../../content/assets/mongodb.svg';
import Node from '../../content/assets/node-dot-js.svg';
import ReactSVG from '../../content/assets/react-icon.svg';
import Redux from '../../content/assets/redux.svg';
import Sass from '../../content/assets/sass.svg';
import Tooltip from './tooltip';
import { rhythm } from '../utils/typography';

const TechWrapper = styled.div`
    display: grid;
    grid-gap: ${rhythm(0.4)};
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    justify-items: center;
`;

function Tech() {
    return (
        <Fragment>
            <h3>And technologies that I love to work with</h3>
            <TechWrapper>
                <Tooltip title="HTML5">
                    <HTML5 />
                </Tooltip>
                <Tooltip title="CSS3">
                    <CSS3 />
                </Tooltip>
                <Tooltip title="Sass">
                    <Sass />
                </Tooltip>
                <Tooltip title="JavaScript">
                    <JS />
                </Tooltip>
                <Tooltip title="React">
                    <ReactSVG />
                </Tooltip>
                <Tooltip title="Redux">
                    <Redux />
                </Tooltip>
                <Tooltip title="GraphQL">
                    <Graphql />
                </Tooltip>
                <Tooltip title="NodeJS">
                    <Node />
                </Tooltip>
                <Tooltip title="MongoDB">
                    <MongoDB />
                </Tooltip>
                <Tooltip title="GatsbyJS">
                    <Gatsby />
                </Tooltip>
                <Tooltip title="Git">
                    <Git />
                </Tooltip>
            </TechWrapper>
        </Fragment>
    );
}

Tech.propTypes = {};

export default Tech;