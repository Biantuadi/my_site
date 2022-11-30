import styled from "styled-components";
import Header from "../../reutisable/header/Header";

export default function Contact() {
  return (
    <ContactStyled className="contact">
      <Header />
      <mai className="contact_main">
        <div className="description">
          <img src="img/portefolio.webp" alt="portefolio" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            ducimus, animi quasi qui modi minima reprehenderit architecto
            tempora explicabo consequuntur placeat ut nesciunt quo ipsam
            officiis? Ducimus facere placeat molestiae adipisci reprehenderit
            aliquam doloribus ad sit explicabo mollitia voluptas reiciendis
            doloremque maiores ullam praesentium, eaque obcaecati, distinctio
            illo! Dolorem, minima?
          </p>
        </div>

          <form action="submit" className="formulaire">
            <img
              src="img/send_mail.webp"
              alt=""
              width="300"
              height="300"
              className="avatar"
            />
          </form>
      </mai>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  width: 100%;
  /* background: url("https://odoocdn.com/openerp_website/static/src/img/2022/e-commerce/audience_background.png") no-repeat center center/cover; */
  height: 100vh;
  display: flex;
  flex-direction: column;

  .contact_main {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .description {
    /* flex: 1; */
    width: 50%;
    img {
      width: 250px;
      height: 250px;
    }
  }

  .formulaire {
      width: 500px;
      height: 500px;
      background: #fff;

    img {
      width: 100px;
      height: 100px;
    }
  }
`;
