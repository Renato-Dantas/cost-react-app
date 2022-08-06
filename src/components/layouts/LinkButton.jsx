import style from "../styles/linkButton.module.scss";
import { Link } from "react-router-dom";

const LinkButton = ({ to, text }) => {
  return (
    <Link className={style["link-button"]} to={to}>
      {text}
    </Link>
  );
};

export default LinkButton;
