import styles from "../../styles/Home.module.css";

const LinkButtons = ({ links, name }) => {
  return (
    <div className={styles.githubButtonsContainer}>
      <button className={styles.githubButtons}>
        <a href={links} target="_blank">
          {name}
        </a>
      </button>
    </div>
  );
};

export default LinkButtons;
