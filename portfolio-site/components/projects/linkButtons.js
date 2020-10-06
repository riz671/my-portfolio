import styles from "../../styles/Home.module.css";

const LinkButtons = ({ links, name, target = "_blank" }) => {
  return (
    <div className={styles.githubButtonsContainer}>
      <button className={styles.githubButtons}>
        <a href={links} target={target}>
          {name}
        </a>
      </button>
    </div>
  );
};

export default LinkButtons;
