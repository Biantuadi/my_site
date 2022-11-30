import styled from "styled-components";
import Header from "../../reutisable/header/Header";
// import { theme } from "../../../themes";
import MainContact from "./MainContact";

export default function Contact() {
  


  return (
    <ContactStyled className="contact">
      <Header />
      <MainContact />
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  width: 100%;
  /* background: url("https://odoocdn.com/openerp_website/static/src/img/2022/e-commerce/audience_background.png") no-repeat center center/cover; */
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
