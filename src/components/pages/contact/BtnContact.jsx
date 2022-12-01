import React from "react";
import styled from "styled-components";
import { theme } from "../../../themes";
import { gsap } from "gsap";

export default function BtnContact({ btn, children, ...props }) {
  const handleMouseEnter = () => {
    btn.current.classList.add("flesh");
  };

  return (
    <BtnContactStyled
      ref={btn}
      type={"submit"}
      disabled={false}
      className="enabled"
      onMouseEnter={handleMouseEnter}
    ></BtnContactStyled>
  );
}

const BtnContactStyled = styled.button`
  padding: 10px;
  font-weight: 500;

  color: ${theme.colors.white};
  background-color: ${theme.colors.lighten_primary};
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s linear;
  margin-top: 20px;

  &.disabled {
    background-color: #ccc;
    cursor: not-allowed;
    width: 50%;
    border-radius: 0;
    height: auto;
  }

  &.enabled {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &.flesh {
    @keyframes flesh {
      0% {
        clip-path: polygon(
          50% 0%,
          100% 0%,
          100% 100%,
          50% 100%,
          0% 100%,
          0% 0%
        );
      }
      50% {
        clip-path: polygon(
          50% 0%,
          75% 52%,
          100% 100%,
          50% 100%,
          0% 100%,
          25% 52%
        );
        font-size: 10px;
      }
      100% {
        clip-path: polygon(
          50% 0%,
          75% 52%,
          100% 100%,
          50% 70%,
          0% 100%,
          25% 52%
        );
        font-size: 10px;
      }
    }
    animation: flesh 1s forwards;
  }

  .fas.fa-paper-plane {
    transform: rotate(-45deg);
    font-size: 23px;
  }
`;
