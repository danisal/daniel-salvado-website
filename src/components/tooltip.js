import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { rhythm } from '../utils/typography';

const Wrapper = styled.div`
    display: inline-block;
    position: relative;

    > * {
        vertical-align: middle;
    }

    &:hover > span {
        visibility: visible;
        opacity: 1;
    }
`;

const TooltipText = styled.span`
    background-color: #555;
    border-radius: 6px;
    bottom: 125%;
    color: #fff;
    left: 50%;
    opacity: 0;
    padding: 5px 20px;
    position: absolute;
    text-align: center;
    transform: translate(-50%, 0);
    transition: opacity 0.3s;
    visibility: hidden;
    width: auto;
    z-index: 1;
    font-size: ${rhythm(0.5)};

    &:after {
        content: '';
        border-color: #555 transparent transparent transparent;
        border-style: solid;
        border-width: 5px;
        left: 50%;
        margin-left: -5px;
        position: absolute;
        top: 100%;
    }
`;

function Tooltip({ children, title }) {
    return (
        <Wrapper>
            {children}
            <TooltipText>{title}</TooltipText>
        </Wrapper>
    );
}

Tooltip.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
};

export default Tooltip;
