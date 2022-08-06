import style from "../styles/input.module.scss";

const Input = ({ type, text, placeholder, name, handleOnChange, value }) => {
  return (
    <div className={style["form-control"]}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};

export default Input;
