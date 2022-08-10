import { useLocation } from "react-router-dom";
import Container from "../layouts/Container";
import Message from "../layouts/Message";
import LinkButton from "../layouts/LinkButton";
import ProjectCard from "../project/ProjectCard";
import style from "../styles/projects/projects.module.scss";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={style["project-container"]}>
      <div className={style["title-container"]}>
        <h1>Meus Projetos</h1>
        <LinkButton to={"/newproject"} text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass={"start"}></Container>
    </div>
  );
};

export default Projects;
