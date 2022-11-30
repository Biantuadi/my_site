import styled from "styled-components";
import Header from "../../reutisable/header/Header";
import Button from "../../reutisable/Button";
import { theme } from "../../../themes";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
  } 


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
            <h2>Contactez-moi</h2>
            {/* <div className="input"> */}
              <input type="text" placeholder="Nom" />
              <input type="email" placeholder="Email" />
            {/* </div> */}
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <Button label="Envoyer"onClick={handleSubmit} />
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
    /* width: 50%; */
    img {
      width: 250px;
      height: 250px;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.5;
      margin-top: 1rem;
      max-width: 550px;
    }
  }

  .formulaire {
      width: 400px;
      height: 500px;
      background: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);


    img {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
    }

    input {
      width: 50%;
      /* height: 50px; */
      padding: 10px;
      margin: 10px;
      border: 1px solid #000;
      border-radius: 5px;

      &:focus {
        outline: none;
        /* border: 1px solid ${theme.colors.primary}; */
      }

    }

    textarea {
      width: 50%;
      height: 100px;
      padding: 10px;
      margin: 10px;
      border: 1px solid #000;
      border-radius: 5px;

    }

    button {
      width: 50%;
      margin: 10px;
    }
  }
`;
