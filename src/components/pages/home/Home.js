import styled from "styled-components";
import { theme } from "../../../themes";
import Header from "../../reutisable/header/Header";

export default function Home() {
  return (
    <HomeStyle className="home">
      <Header />
      <div className="demo_crazee_burger">
        <img
          src="/demo_crazee_burger.gif"
          alt="demo_crazee_burger"
          className="demo_crazee_burger"
        />
      </div>
      <main>
        <div className="presentation">
          <h1>
            Developpeur <span>Web</span>,<br /> A la recherche d’une<br /> nouvelle opportunité
          </h1>
          <p>ReactJs. Laravel. NodeJs.</p>

          <div className="bien">
            <button>Voir mon CV</button> - Je suis <span>Dévoué_</span>
          </div>
        </div>

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

  .presentation {
    /* background-color: red; */
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

      button {
        padding: 15px;
        font-weight: 700;
        color: ${theme.colors.white};
        background-color: #017E84;
        border: none;
        font-size: 17px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color:${theme.colors.primary};

        }
      }

      span {
        color: ${theme.colors.primary};
      }
    }
  }

  .demo_crazee_burger {
    right: 193px;
    top: 147px;
    position: absolute;
    background-color: red;
    /* padding: 80px; */
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: white;
    z-index: -1;

    img {
      width: 465px;
      height: 280px;
      border-radius: 0;
      border-top-right-radius: 80px;
      border-top-left-radius: 80px;
      top: 109px;
      right: 18px;
    }
  }
`;
