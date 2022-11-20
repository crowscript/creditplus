import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    html,
    body {
        font-family: var(--font-family-gotham);
        font-size: var(--line-spacing-16);
        line-height: var(--font-size-24);
        padding: 0;
        margin: 0;
        color: var(--color-292929);
        background: var(--gray-50);
    }

    h1, h2, h3, h4 {
        margin-top: 0;
        margin-bottom: 1em;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;
