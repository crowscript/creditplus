import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const Container930 = styled.div`
    width: 100%;
    max-width: 930px;
    margin: 0 auto;
`;

export const ContainerNarrow = styled.div`
    width: 100%;
    max-width: 824px;
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
  
export const ListUnstyled = styled.ul`
    list-style: none;
    margin-left: 0;
    padding-left: 0;
`;