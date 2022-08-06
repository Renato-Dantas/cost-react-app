import style from "../styles/submitButton.module.scss";

const SubmitButton = ({ text }) => {
  return (
    <div>
      <button className={style["btn-submit"]}>{text}</button>
    </div>
  );
};

export default SubmitButton;
