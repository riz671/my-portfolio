import styles from "../../styles/Home.module.css";

const LinkButtons = ({ links }) => {
  return (
    <div className={styles.githubButtonsContainer}>
      <button className={styles.githubButtons}>
        <a href={links} target="_blank">
          GO TO REPO
        </a>
      </button>
    </div>
  );
};

export default LinkButtons;
