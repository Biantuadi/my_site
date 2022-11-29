import styled from "styled-components";
import { theme } from "../../../themes";
import Header from "../../reutisable/header/Header";
import Demo from "./Demo";
import Presentation from "./Presentation";

export default function Home() {
  return (
    <HomeStyle className="home">
      <Header />

      <main>
        <Demo />
        <Presentation />
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/2020/website/owb_top_shapes.svg"
          alt="animes_svg"
          className="animes absolute"
        />
      </main>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  main {
    width: 80%;
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;

    h2.uniqueAbsolue {
      font-size: 35px;
      position: absolute;
      right: 300px;

      span {
        color: ${theme.colors.secondary};
      }
    }

    img.animes {
      z-index: -2;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      /* top: 55px; */
      right: 0;
      width: 50%;
    }

    @media (max-width: 860px) {
      width: 100%;
      height: 100%;
      margin: 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
