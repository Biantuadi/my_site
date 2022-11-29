import styled from "styled-components";
import Header from "../../reutisable/header/Header";

export default function Portfolio() {
  const mapList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  return (
    <PortfolioStyled className="portfolio">
      <Header />
      <main>
        <div className="title">
          <h1>Portfolio</h1>
        </div>

        <section className="projects">
          {mapList.map((item) => {
            return <li></li>;
          })}
        </section>
      </main>
    </PortfolioStyled>
  );
}

const PortfolioStyled = styled.div`
  height: 100vh;
  overflow: hidden;

  main {
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
      h1{
        position: fixed;
      }
      @media screen and (max-width: 905px) {
        display: none;
      }
    }

    .projects {
      height: 87%;
      flex: 3.4;
      overflow: auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-gap: 1rem;
      padding: 1rem;

      @media screen and (max-width: 774px) {
        display: flex;
        flex-wrap: wrap;
      }

      @media screen and (max-width: 728px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
        display: grid;
        justify-items: center;
      }

      @media screen and (max-width: 478px){
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(12, 1fr);

      } 

      &::-webkit-scrollbar {
        /* display: none; */
      }


      li {
        border: 1px solid blue;
        width: 250px;
        height: 200px;
        margin: 10px;
        border-radius: 5px;

        @media screen and (max-width: 1410px) {
          width: 200px;
          height: 150px;
        }
        

        @media screen and (max-width: 1151px) {
          width: 150px;
          height: 130px;
        }

        @media screen and (max-width: 905px) {
          width: 200px;
          height: 150px;
        }

        /* @media screen and (max-width: 774px)  */

        /* @media screen and (max-width: 896px) and (min-width: 774px) {
          width: 150px;
          height: 130px;
        } */
      }
    }
  }
`;
