import style from "../styles/projectForm/projectForm.module.scss";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import { useState } from "react";
import { useEffect } from "react";

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || []);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleCategory = (e) => {
    e.preventDefault();
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  };

  return (
    <form className={style["project-form"]} onSubmit={submit}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ProjectForm;
