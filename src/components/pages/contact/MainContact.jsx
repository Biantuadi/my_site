import styled from "styled-components";
import Description from "./Description";
import Formulaire from "./Formulaire";

export default function MainContact() {
  return (
    <MainContactStyled className="contact_main">
      <Description />
      <Formulaire />
    </MainContactStyled>
  );
}

const MainContactStyled = styled.main`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;