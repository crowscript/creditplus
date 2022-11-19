import styled from "styled-components";
import Navbar from '../components/navbar';
import { Container } from '../components/styles/Global.styled';

const HeaderStyled = styled.header`
    background: var(--gray-75);
    padding: 1.75rem;
    border-bottom: 1px solid var(--gray-200);
`;


const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <Navbar />
            </Container>
        </HeaderStyled>
    );
  }
   
  export default Header;