import savings from "../../images/savings.svg";
import style from "../styles/home/home.module.scss";
import LinkButton from "../layouts/LinkButton";

const Home = () => {
  return (
    <section className={style["home-container"]}>
      <h1>
        Bem vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  );
};

export default Home;
