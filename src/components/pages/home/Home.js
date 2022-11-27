import styled from "styled-components";
import Header from "../../reutisable/header/Header";
import Demo from "./Demo";
import Presentation from "./Presentation";

export default function Home() {
  return (
    <HomeStyle className="home">
      <Header />
      <Demo />

      <main>
        <Presentation />
        <img
          src="https://odoocdn.com/openerp_website/static/src/img/2020/website/owb_top_shapes.svg"
          alt=""
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

    img {
      z-index: -2;
      position: absolute;
      top: 55px;
      right: 0;
    }
  }
`;
