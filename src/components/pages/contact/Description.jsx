import React from "react";
import styled from "styled-components";
import languagesData from "../../../data/languages";
import { theme } from "../../../themes";

export default function Description() {
  return (
    <DescriptionSteled className="description">
      <img src="img/portefolio.webp" alt="portefolio" />
      <p>
        Passionné par le{" "}
        <strong>
          développement <span>web</span>
        </strong>{" "}
        et le design. Je suis actuellement en formation de développeur web chez{" "}
        <span>
          <a href="https://etna.io/">ETNA</a>
        </span>
        . J'ai déjà eu l'occasion de travailler sur des projets personnels et
        des projets de groupe. J'agis dans le respect des normes d'accessibilité
        et de qualité du code. J'ai une bonne connaissance des langages
        {languagesData.map((language) => {
          return <h3 key={language.id}>{language.name}, </h3>;
        })}... et je suis toujours à la recherche de nouvelles technologies.
        N'hésitez pas à me contacter pour plus d'informations.
      </p>
    </DescriptionSteled>
  );
}

const DescriptionSteled = styled.div`
  img {
    width: 250px;
    height: 250px;

    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    animation: slideIn 1s ease-in-out forwards;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-top: 1rem;
    max-width: 550px;
    opacity: 0;

    @keyframes appearProgressively {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    animation: appearProgressively 1s ease-in-out forwards 1s;

    span,
    a {
      color: #da004c;
    }

    h3 {
      display: inline-block;
      color: ${theme.colors.primary};
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: 600;
      margin-left: 5px;
      margin-bottom: 0;
    }

    a {
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 1150px) {
    font-size: 1rem;

    img {
      width: 200px;
      height: 200px;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
