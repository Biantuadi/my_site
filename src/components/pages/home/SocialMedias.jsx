import React from "react";
import styled from "styled-components";
import { theme } from "../../../themes";

export default function SocialMedias() {
  return (
    <SocialMrdiasStyled className="reseaux-sociaux">
      <li className="envelope">
        <a href="mailto:benibiantuadi@gmail.com">
          <span></span>
          <span></span>
          <span className="fa fa-envelope"></span>
        </a>
      </li>
      <li className="github">
        <a href="https://github.com/Biantuadi">
          <span></span>
          <span></span>
          <span className="fa-brands fa-github"></span>
        </a>
      </li>
      <li className="linkedin">
        <a href="https://www.linkedin.com/in/beni-biantuadi-022585201/">
          <span></span>
          <span></span>
          <span className="fa-brands fa-linkedin"></span>
        </a>
      </li>
    </SocialMrdiasStyled>
  );
}

const SocialMrdiasStyled = styled.ul`
  position: relative;
  display: flex;
  transform-style: preserve-3d;
  transform: rotate(-15deg) skew(25deg);

  @media screen and (max-width: 860px) {
    transform: rotate(0deg) skew(0deg);
  }

  li {
    position: relative;
    list-style: none;
    width: 40px;
    height: 40px;
  }

  li span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    background: darken($color: rgb(150 150 150), $amount: 2);
    font-size: 15px !important;
    transition: 0.2s;
    color: #fff;
  }

  li:hover span {
    z-index: 10;
    color: #fff;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  li:hover span:nth-child(1) {
    transform: translate(-10px, 0);
    opacity: 0.2;

    @media screen and (max-width: 768px) {
      transform: translate(0px, 0px);
    }
  }
  li:hover span:nth-child(2) {
    transform: translate(0px, -10px);
    opacity: 0.4;

    @media screen and (max-width: 768px) {
      transform: translate(0px, 0px);
    }
  }
  li:hover span:nth-child(3) {
    transform: translate(10px, -20px);
    opacity: 0.6;

    @media screen and (max-width: 768px) {
      transform: translate(0px, 0px);
    }
  }
  .envelope,
  .github,
  .linkedin {
    margin-right: 35px;
  }

  .fa-envelope,
  .envelope:nth-child(1):hover span {
    animation: move 2s infinite alternate forwards;
    background: ${theme.colors.lighten_secondary};
    
    @keyframes move {
      0% {
        transform: translate(0px, 0px);
      }
      100% {
        transform: translate(0px, -20px);
      }
    }

    @media screen and (max-width: 860px) {
      animation: rotate 2s infinite alternate forwards;
      animation-delay: 0.5s;

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }

  .fa-github,
  li:nth-child(2):hover span {
    background: ${theme.colors.tertiary};
  }

  .fa-linkedin,
  li:nth-child(3):hover span {
    background: #0e76a8;
  }

  /* mettre une animation qui se declanche tout seul en boucle avec un temps définit avec css */
`;
