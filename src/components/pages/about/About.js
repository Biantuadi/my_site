import styled from "styled-components";
import Header from "../../reutisable/header/Header";

export default function About() {
  return (
    <AboutStyled className="about">
      <Header />
      <mai className="about_main">
        <img
          src="img/say_hi.webp"
          alt=""
          width="300"
          height="300"
          className="avatar"
        />
      </mai>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  width: 100%;
  height: 100%;
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
