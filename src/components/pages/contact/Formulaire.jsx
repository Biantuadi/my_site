import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BtnContact from "./BtnContact";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import Input from "../../reutisable/Input";
import { theme } from "../../../themes";

export default function Formulaire({ setSended }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameError = useRef();
  const emailError = useRef();
  const messageError = useRef();

  const btn = useRef();

  useEffect(() => {
    if (name === "" || email === "" || message === "") {
      btn.current.disabled = true;
      btn.current.style.cursor = "not-allowed";
      btn.current.style.animation = "none";
      btn.current.classList.add("disabled");
      btn.current.classList.remove("enabled");
      // btn.current.classList.remove("flesh");
      btn.current.innerHTML = "Tous les champs sont obligatoires";
    } else {
      btn.current.disabled = false;
      btn.current.style.cursor = "pointer";
      // remove style animation
      btn.current.removeAttribute("style");
      btn.current.classList.remove("disabled");
      btn.current.classList.add("enabled");
      btn.current.innerHTML = `Envoyer`;
    }
  }, [name, email, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 2 || name.trim() === "") {
      nameError.current.innerHTML = "Veuillez entrer un nom valide";
      nameError.current.classList.add("nameError");
      if (message.current !== "") {
        messageError.current.innerHTML = "";
        messageError.current.classList.remove("messageError");
      }
      return;
    } else {
      nameError.current.innerHTML = "";
      nameError.current.classList.remove("nameError");
    }

    if (message.length < 5 || message.trim() === "") {
      messageError.current.innerHTML =
        "Votre message doit contenir au moins 5 caractères";
      messageError.current.classList.add("messageError");
      if (name.current !== "") {
        nameError.current.innerHTML = "";
        nameError.current.classList.remove("messageError");
      }
      return;
    } else {
      messageError.current.innerHTML = "";
      messageError.current.classList.remove("messageError");
    }

    if (
      name.length < 2 ||
      name.trim() === "" ||
      message.length < 5 ||
      message.trim() === ""
    )
      return;

    emailjs
      .sendForm(
        "service_19f7ruw",
        "template_lke8xqq",
        e.target,
        "iST1Sm_IMw2nRU0yh"
      )
      .then(
        (result) => {
          gsap.to(btn.current, {
            duration: 1,
            y: -1500,
            ease: "power4.in",
          });
          console.log(result.text);
          setSended(true);
          setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          window.location.reload();
        }
      );

    gsap.to(btn.current, {
      duration: 1,
      y: -1500,
      ease: "power4.in",
    });
  };

  return (
    <FormStyled action="submit" className="formulaire" onSubmit={handleSubmit}>
      <div className="img_container">
        <img
          src="img/send_mail.webp"
          alt=""
          width="300"
          height="300"
          className="avatar"
        />
      </div>

      <h2>Contactez-moi</h2>

      <Input
        type="name"
        id="name"
        name="name"
        placeholder="Nom"
        onChange={(e) => setName(e.target.value)}
        value={name}
        required={true}
      />
      <span ref={nameError} className="error"></span>

      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required={true}
      />
      <span ref={emailError} className="error"></span>

      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Votre message"
        required={true}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <span ref={messageError} className="error"></span>

      <BtnContact btn={btn} />
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
  opacity: 0;
  transition: all 0.5s ease-in-out;

  @keyframes fromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  animation: fromRight 1s ease-in-out forwards 1.7s;

  @media (max-width: 900px) {
    animation: fromRight 1s ease-in-out forwards 0.3s;
  }

  .img_container {
    position: relative;
    width: 100%;
    img {
      width: 97px;
      height: 97px;
      position: absolute;
      top: -50px;
      left: 0;
    }

    @keyframes agitate {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(10deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    animation: agitate 1s ease-in-out infinite;
  }

  textarea {
    width: 50%;
    height: 100px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000;
    border-radius: 5px;

    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.secondary};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 728px) {
      width: 65%;
    }
  }

  .error {
    visibility: hidden;
  }

  .messageError,
  .nameError {
    color: red;
    font-size: 0.8em;
    margin-top: -7px;
    visibility: visible;
  }
`;
