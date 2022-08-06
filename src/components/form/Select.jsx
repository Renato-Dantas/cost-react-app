import style from "../styles/select.module.scss";

const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className={style["select-control"]}>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option disable="true">Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
