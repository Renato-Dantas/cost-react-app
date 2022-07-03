import styles from "../styles/container.module.scss";

const Container = ({ children, customClass }) => {
  return (
    <div className={`${styles["container"]} ${styles[customClass]}`}>
      {children}
    </div>
  );
};

export default Container;
