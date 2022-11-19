import styled from "styled-components";

const Logo = styled.h1`
  color: var(--primary-600-base);
  margin-bottom: 0;
`;

const Navbar = () => {
    return (
      <nav>
        <Logo>
          CreditPlus
        </Logo>
      </nav>
    );
  }
   
  export default Navbar;