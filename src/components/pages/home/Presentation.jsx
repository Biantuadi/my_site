import styled from "styled-components";
import { theme } from "../../../themes";
import Button from "../../reutisable/header/Button";

export default function Presentation() {
  return (
    <PresentationStyled>
      <h1>
        Developpeur <span>Web</span>,<br /> A la recherche d’une
        <br /> nouvelle opportunité
      </h1>
      <p>ReactJs. Laravel. NodeJs.</p>

      <div className="button">
        <Button label="Voir mon CV" /> - Je suis <span>Dévoué_</span>
      </div>
    </PresentationStyled>
  );
}

const PresentationStyled = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 50px;
    span {
      color: ${theme.colors.secondary};
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
      }50% {
        opacity: 0.5;
      } 
      100% {
        transform: translateX(0);
        
      }
    }

    animation: slideInFromRight 1.4s ease-in-out;
  }
`;
