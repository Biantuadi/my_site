import { useRef, useState } from "react";
import styled from "styled-components";
import Description from "./Description";
import Formulaire from "./Formulaire";
import SendedMessage from "./SendedMessage";

export default function MainContact() {
  const main = useRef();
  const [sended, setSended] = useState(false);

  return (
    <>
      {sended && <SendedMessage sended={sended} mainRef={main} />}

      <MainContactStyled className="contact_main" ref={main}>
        <Description />
        <Formulaire setSended={setSended} mainRef={main} />
      </MainContactStyled>
    </>
  );
}

const MainContactStyled = styled.main`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1150px) {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;
