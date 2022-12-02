import React from "react";
import styled from "styled-components";

export default function Description() {
  return (
    <DescriptionSteled className="description">
      <img src="img/portefolio.webp" alt="portefolio" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        ducimus, animi quasi qui modi minima reprehenderit architecto tempora
        explicabo consequuntur placeat ut nesciunt quo ipsam officiis? Ducimus
        facere placeat molestiae adipisci reprehenderit aliquam doloribus ad sit
        explicabo mollitia voluptas reiciendis doloremque maiores ullam
        praesentium, eaque obcaecati, distinctio illo! Dolorem, minima?
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
    } 100% {
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
      } 100% {
        opacity: 1;
      }
    }

    animation: appearProgressively 1s ease-in-out forwards 1s;
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
