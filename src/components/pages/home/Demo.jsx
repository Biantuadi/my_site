import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Demo() {
  // Faire apparaître une div après un délai de quelques 5 secondes

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  });

  return (
    <>
      {show && (
        <DemoStyled>
          <img
            src="/demo_crazee_burger.gif"
            alt="demo_crazee_burger"
            className="demo_crazee_burger"
          />
        </DemoStyled>
      )}
    </>
  );
}

const DemoStyled = styled.div`
  right: 193px;
  top: 147px;
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  z-index: -1;
  animation: demo_crazee_burger 1s ease-in-out;
  @keyframes demo_crazee_burger {
    0% {
      top: -450px;
      opacity: 0;
    } 
    50% {
      opacity: 0.5;
    }
    100% {
      top: 147px;
      opacity: 1;
    }
  }

  img {
    width: 465px;
    height: 280px;
    border-radius: 0;
    border-top-right-radius: 80px;
    border-top-left-radius: 80px;
    top: 109px;
    right: 18px;
    position: absolute;
  }
`;
