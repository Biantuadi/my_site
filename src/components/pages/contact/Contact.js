import styled from "styled-components";
import Header from "../../reutisable/header/Header";

export default function Contact() {
  return (
    <ContactStyled className="contact">
      <Header />
      <mai className="contact_main">
        <img
          src="img/send_mail.webp"
          alt=""
          width="300"
          height="300"
          className="avatar"
        />
      </mai>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  width: 100%;
  background: url("https://odoocdn.com/openerp_website/static/src/img/2022/e-commerce/audience_background.png") no-repeat center center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .about_main {
    width: 90%;
    margin: 0 auto;
    border-left: none;
  }

  .avatar {
    border-left: 1px solid green;
  }
  
`;