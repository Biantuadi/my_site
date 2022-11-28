import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../themes";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="marge_auto">
        <Link to="/" className="logo">
          <h1>
            <span>B</span>kev
          </h1>
        </Link>

        <Navbar />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${theme.colors.lighten_grey};
  width: 100%;
  color: ${theme.colors.tertiary};
  align-items: center;
  font-family: "Lato", sans-serif;

  .marge_auto {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 24px;
    cursor: pointer;

    span {
      color: ${theme.colors.secondary};
      font-weight: 500;
    }
  }

  @media (max-width: 476px) {
    .marge_auto {
      flex-direction: column;
      align-items: center;
    }
  }
`;
