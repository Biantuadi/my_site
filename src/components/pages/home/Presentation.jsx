import styled from "styled-components";
import { theme } from "../../../themes";
import Button from "../../reutisable/header/Button";
import { useTypewriter } from "react-simple-typewriter";
import SocialMedias from "./SocialMedias";

export default function Presentation() {
  // typewriter
  const { text } = useTypewriter({
    words: ["Créatif", "Curieux", "Dévoué"],
    loop: 0,
  });

  const openCV = () => {
    // alert("yes");
  };

  return (
    <PresentationStyled>
      <h2 id="dev">
        Developpeur <span>Web</span>,<br /> A la recherche d’une
        <br /> nouvelle opportunité
      </h2>
      <h1 id="name">
        <span>K</span>evin. <span>B</span>eni. <span>B</span>iantuadi.
      </h1>

      <div className="button">
        <Button label="Voir mon CV" onClick={openCV} /> - Je suis{" "}
        <span>{text}_</span>
      </div>

      <br />
      <SocialMedias />
    </PresentationStyled>
  );
}

const PresentationStyled = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2#dev {
    font-weight: 500;
    font-size: 50px;
    span {
      color: ${theme.colors.primary};
    }

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    animation: slideInFromLeft 1.4s ease-in-out;
  }

  span {
    color: ${theme.colors.secondary};
  }

  #name {
    font-size: 19px;
    font-weight: 400;
  }

  .button {
    font-weight: 600;
    font-size: 18px;

    span {
      color: ${theme.colors.primary};
    }

    @keyframes slideInFromRight {
      0% {
        transform: translateX(100%);
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    animation: slideInFromRight 1.4s ease-in-out;
  }

  @media (max-width: 1216px) and (min-width: 995px) {
    h2#dev {
      font-size: calc(50px * 0.8);
    }

    .button {
      font-size: calc(18px * 0.8);
    }
  }

  @media (max-width: 995px) and (min-width: 768px) {
    width: 100%;

    h2#dev {
      font-size: calc(50px * 0.7);
    }

    .button {
      font-size: calc(18px * 0.7);
    }
  }

  @media (max-width: 860px) {
    width: 100%;
    height: 70%;
    text-align: center;
    justify-content: flex-end;
    align-items: center;

    h2#dev {
      font-size: calc(50px * 0.6);
    }

    .button {
      button {
        font-size: calc(18px * 0.7);
      }
    }
  }

  @media screen and (max-height: 700px) {
    height: 70%;
    justify-content: center;
  }
`;
