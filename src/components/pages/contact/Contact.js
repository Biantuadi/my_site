import styled from "styled-components";
import Header from "../../reutisable/header/Header";

export default function Contact() {
  return (
    <ContactStyled className="contact">
      <Header />
      <h1>Contact</h1>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  background: url("https://odoocdn.com/openerp_website/static/src/img/2022/e-commerce/audience_background.png") no-repeat center center/cover;
  height: 100vh;
  
`;