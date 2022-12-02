import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../themes";
import Button from "../../reutisable/Button";

export default function SendedMessage({ sended, mainRef }) {
  useEffect(() => {
    mainRef.current.style.filter = "blur(5px)";
    mainRef.current.style.pointerEvents = "none"; 
  }, [sended, mainRef]);

  return (
    <SendedMessageStyled>
      <div className="content">
        <img src="/img/merci.webp" alt="Merci" className="merci" />
        <div className="description">
          <h1>Message envoyé</h1>
          <p>Je vous répondrai dans les plus brefs délais</p>
        </div>
      </div>
      <br />
      <Button onClick={() => window.location.reload()} label="Retour" />
    </SendedMessageStyled>
  );
}

const SendedMessageStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #fff; */
  width: 500px;
  height: 500px;
  border-radius: 20px;
  z-index: 3;
  border: 1px solid ${theme.colors.lighten_secondary};
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

  @media screen and (max-width: 728px) {
    width: 65%;
  }

  @media screen and (max-width: 610px) {
    /* en pixel */
    width: 400px;
  }

  @media screen and (max-width: 425px) {
    width: 80%;
  }
  .content {
    display: flex;

    @media screen and (max-width: 728px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  img.merci {
    width: 200px;
    height: 200px;
  }

  .description {
    margin-top: 50px;
    line-height: 0.5;

    @media screen and (max-width: 728px) {
      margin-top: 0;
    }

    p {
      line-height: 1.5;
    }
  }
`;
