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
  right: 12%;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  z-index: -1;
  animation: demo_crazee_burger 1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes demo_crazee_burger {
    0% {
      top: -50%;
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      top: 50%;
      opacity: 1;
    }
  }

  img {
    width: 90%;
    border-radius: 0;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
  }

  @media (max-width: 1300px) and (min-width: 1203px) {
    width: calc(500px * 0.8);
    height: calc(500px * 0.8);
  }

  @media (max-width: 1202px) and (min-width: 1024px) {
    width: calc(500px * 0.7);
    height: calc(500px * 0.7);
  }

  @media (max-width: 1023px) and (min-width: 860px) {
    width: calc(500px * 0.6);
    height: calc(500px * 0.6);
  }

  @media (max-width: 860px) {
    bottom: 0;
    top: 10%;
    transform: translateY(0);

    width: calc(500px * 0.5);
    height: calc(500px * 0.5);

    img {
      border-radius: 0;
    }

    @keyframes responsive_animation {
      0% {
        transform: scale( 1.5);
      }
      50% {
        transform: scale( 1.2);
      } 
      100% {
        transform: scale( 1);
      }
    }
    animation: responsive_animation 1s ease-in-out;
  }

  @media (max-width: 476px) {
    width: calc(500px * 0.4);
    height: calc(500px * 0.4);
    top: 20%;

    @keyframes responsive_animation {
      0% {
        transform: scale( 1.5);
      }
      50% {
        transform: scale( 1.2);
      } 
      100% {
        transform: scale( 1);
      }
    }
    animation: responsive_animation 1s ease-in-out;
  }
`;
