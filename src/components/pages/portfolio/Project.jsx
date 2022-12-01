import React, { useEffect } from "react";
import styled from "styled-components";
import projectsData from "../../../data/projects";
import { theme } from "../../../themes";

export default function Project() {
  const projects = projectsData;


  useEffect(() => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project, index) => {
      project.style.animation = `project-appear 1s ease  ${
        index / 7 + 0.3
      }s`;
      
      
      setTimeout(() => {
        project.style.opacity = 1;
      }, 1500);
    });
  }, []);

  return (
    <ProjectStyled className="projects ">
      {projects.map((item) => {
        return (
          <li key={item.id} className="project">
            <img src={item.image} alt="" />
            <div className="gradient">
              <h4>{item.title}</h4>

              <div className="language-container">
                {item.laguages.map((language, index) => {
                  return <img src={language } alt="language_utilisé" key={index} />;
                })}
              </div>

            </div>
          </li>
        );
      })}
    </ProjectStyled>
  );
}

const ProjectStyled = styled.section`
  height: 87%;
  flex: 3.4;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 1128px) {
    height: 100%;
    overflow: initial;
  } 

  .language-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 17px 0rem 5px 5px;

    

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      } 100% {
        transform: rotate(360deg);
      }
    }

    img{
      width: 20px;
      height: 20px;
      animation: rotate 10s linear infinite;

    }
  }

  @media screen and (max-width: 774px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 728px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    display: grid;
    justify-items: center;

    &::after {
      content: "br";
      visibility: hidden;
    }
  }

  @media screen and (max-width: 574px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .project {
    opacity: 0;
  }

  li {
    width: 250px;
    height: 200px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    /* opacity:0; */

    @keyframes project-appear {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    /* animation: project-appear 1s ease-in-out; */

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      z-index: -1;
    }

    .gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      transition: all 0.4s ease-in-out;
      opacity: 0;
      z-index: 1;

      h4 {
        color: ${theme.colors.white};
        font-size: 1.2rem;
        margin-bottom: -2px;
      }

      p {
        color: #fff;
        font-size: 0.8rem;
      }

      &:hover {
        opacity: 1;
      }
    }

    @media screen and (max-width: 1410px) {
      width: 200px;
      height: 150px;
    }

    /* @media screen and (max-width: 1151px) {
      width: 150px;
      height: 130px;
    } */

    @media screen and (max-width: 905px) {
      width: 200px;
      height: 150px;
    }

    @media screen and (max-width: 728px) {
      width: 250px;
      height: 200px;
    }
  }
`;
