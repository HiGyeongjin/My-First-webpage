import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <div>Home</div>
      <div>About me</div>
      <div>Skills</div>
      <div>Contact</div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  background-color: black;
`;

export default Header();
