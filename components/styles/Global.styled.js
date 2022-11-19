import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`;

export const DivFull = styled.div`
    width: 100%;
`;

// media queries
const size = {
    xs: '0',
    sm: '375px',
    md: '768px',
    lg: '1440px'
}

export const ScreenSize = {
    mobile: `(min-width: ${size.sm})`,
    tablet: `(min-width: ${size.md})`,
    desktop: `(min-width: ${size.lg})`
};
  