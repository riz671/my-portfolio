import styles from "../../styles/Home.module.css";

const LinkButtons = ({ links, name, target = "_blank" }) => {
  return (
    <div className=".githubButtonsContainer">
      <button className="githubButtons">
        <a href={links} target={target}>
          <span>{name}</span>
        </a>
      </button>
      <style jsx>{`
        .githubButtonsContainer {
          justify-content: center;
          align-items: center;
        }

        .githubButtons {
          padding: 20px 0;
          border-radius: 50px;
          border: 0.5px solid black;
          box-shadow: 2px 4px transparent;
          opacity: 1;
          width: 275px;
          transition: 0.3s;
          margin: 2vh 1vw;
          flex: 1;
        }

        .githubButtons a {
          font-family: "Playfair Display", serif;
          text-align: center;
        }

        .githubButtons:hover {
          opacity: 0.6;
          box-shadow: 2px 4px #888888;
        }

        .githubButtons:focus {
          outline: none;
        }

        @media screen and (max-width: 768px) {
          .githubButtons {
            width: 250px;
          }

          .githubButtons a {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default LinkButtons;
