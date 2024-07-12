import styled from "styled-components";
import { useDarkMode } from "../context/ModeContext";
// import tst from "../../public/logo-light.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDark } = useDarkMode()
  const src = isDark ? "../../public/logo-dark.png" : "../../public/logo-light.png"

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
