import styled from "styled-components";
// import { theme } from "../../../themes";
import Project from "./Project";

export default function MainPortefolio() {
  return (
    <MainStyled>
      <div className="title">
        <h1>Portfolio</h1>
      </div>

      <Project />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  display: flex;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  height: 100%;

  @media screen and (max-width: 881px) {
    width: 100%;
  }

  .title {
    flex: 1;
    text-align: center;
    h1 {
      border-right: 1.6px solid #d3d3d3;
      padding-right: 110px;
      height: 30%;
      position: fixed;
    }
    @media screen and (max-width: 905px) {
      display: none;
    }
  }
`;
