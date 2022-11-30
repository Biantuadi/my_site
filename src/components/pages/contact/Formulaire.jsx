import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../themes";
import Button from "../../reutisable/Button";
import InputEmail from "./InputEmail";
import InputName from "./InputName";

export default function Formulaire() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      alert("Message envoyé");
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <FormStyled action="submit" className="formulaire">
      <img
        src="img/send_mail.webp"
        alt=""
        width="300"
        height="300"
        className="avatar"
      />
      <h2>Contactez-moi</h2>

      <InputName name={name} setName={setName} />
      <InputEmail email={email} setEmail={setEmail} />

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
        required={true}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <Button type={"submit"} label="Envoyer" onClick={handleSubmit} />
    </FormStyled>
  );
}

const FormStyled = styled.form`
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
    margin-top: 10px;
  }

  .disabled {
    background-color: #01595eab;
    cursor: not-allowed;

    /* color: #000; */

    /* background-color: grey;
    cursor: not-allowed; */
  }
`;
