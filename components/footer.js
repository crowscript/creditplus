import styled from "styled-components";
import { Container } from '../components/styles/Global.styled';

const getCurrentYear = () => {
    return new Date().getFullYear();  
};

const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 0;
    margin-top: auto;
    background-color: var(--gray-100-–-base-bg);
    border-top: 1px solid var(--gray-200);
`;

const Paragraph = styled.p`
  margin-bottom: 0;
`;

const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <Paragraph>
                    &copy; {getCurrentYear()} Creditplus Bank AG, Stuttgart
                </Paragraph>
            </Container>
        </FooterStyled>   
    );
  }
   
  export default Footer;