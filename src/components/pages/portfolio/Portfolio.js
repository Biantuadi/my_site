import styled from "styled-components";
import Header from "../../reutisable/header/Header";
import MainPortefolio from "./MainPortefolio";

export default function Portfolio() {
  return (
    <PortfolioStyled className="portfolio">
      <Header />
      <MainPortefolio />
    </PortfolioStyled>
  );
}

const PortfolioStyled = styled.div`
  height: 100vh;
  overflow: hidden;
  font-family:"Poppins", sans-serif;
`;
