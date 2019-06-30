import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        text-align: center;
    }
`;

export const SVGStyle = css`
    margin: ${rhythm(2)} 0;
    fill: #0d47a1;
    max-width: 350px;
    height: auto;

    @media only screen and (max-width: 500px) {
        max-width: 200px;
        margin-top: 0;
    }
`;
