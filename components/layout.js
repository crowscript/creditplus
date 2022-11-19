import styled from "styled-components";
import HeadTag from './headtag';
import Footer from './footer';
import Header from './header';

const MainTag = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <div>
      <HeadTag />
      <Header />
      <MainTag>
        { children }
      </MainTag>
      <Footer />
    </div>
  )
}