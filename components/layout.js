import styled from "styled-components";
import HeadTag from './headtag';
import Footer from './footer';
import Header from './header';

const FlexMaxHeight = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainTag = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <FlexMaxHeight>
      <HeadTag />
      <Header />
      <MainTag>
        { children }
      </MainTag>
      <Footer />
    </FlexMaxHeight>
  )
}