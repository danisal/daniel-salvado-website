import Typography from 'typography';
import githubTheme from 'typography-theme-github';

// Override theme styles
githubTheme.overrideThemeStyles = ({ rhythm }, options, styles) => {
    return {
        a: {
            color: `#0D47A1`,
        },
        'a:hover,a:active': {
            textDecoration: `none`,
            boxShadow: `inset 0 0 0 #fff, inset 0 -6px 0 #FFEB3B`,
        },
        h1: {
            color: `#0D47A1`,
        },
        h2: {
            marginBottom: `1rem`,
        },
        p: {
            textAlign: `justify`,
            marginBottom: rhythm(1),
        },
        'p > a:hover, p > a:active': {
            textDecoration: `none`,
            boxShadow: `none`,
        },
    };
};

const typography = new Typography(githubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
