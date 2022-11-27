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

      <div className="bien">
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
  }

  .bien {
    font-weight: 600;
    font-size: 18px;

    

    span {
      color: ${theme.colors.primary};
    }
  }
`;
