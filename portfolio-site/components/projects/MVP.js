import styles from "../../styles/Home.module.css";
import LinkButton from "./linkButtons.js";

const MVP = () => {
  return (
    <article className="project_container">
      <h2 className="project_title center_text underline_text">
        Know It All - Trivia Game
      </h2>

      <iframe
        className="vid_container"
        width="50%"
        height="380"
        src="https://www.youtube.com/embed/TqH_djGYrB0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p className="stack_list center_text">
        React-Native | Expo | IOS development | Android development | Javascript
      </p>

      <p className="summary center_text">
        <i>
          A local based trivia game where players use their trivia knowledge to
          compete with others on category. Comes with slick and easy-to-use team
          and categorical selection sections to get players ready for the game
          ASAP!
        </i>
      </p>

      <ul>
        <li>
          Implemented functionality to update and store team data in state.
        </li>
        <li>Dynamically rendered team data from state into stats box.</li>
        <li>
          Designed minimalistic and detailed view of the stats box that
          displayed team data via conditional rendering.
        </li>
      </ul>

      <LinkButton
        links="https://github.com/riz671/KnowItAll"
        name="Check 'Know it all' Repo"
      />

      <style jsx>{`
        .project_container {
          width: 100%;
          align-items: center;
          justify-content: center;
          padding-bottom: 3vh;
        }
        .vid_container {
          margin: 0 25%;
        }
        .project_title {
          font-size: 2em;
          letter-spacing: 1px;
          font-family: "Playfair Display", serif;
          padding: 0 5vw;
        }
        .stack_list {
          font-size: 1.3em;
          word-spacing: 5px;
          margin: 20px 40px 10px 40px;
        }
        .center_text {
          text-align: center;
        }
        .underline_text {
          text-decoration: underline;
        }
        .summary {
          font-size: 1.3em;
          margin: 5px 40px 20px;
        }
        ul {
          margin: 0 25px 30px 25px;
        }
        ul li {
          padding-bottom: 5px;
          font-size: 1.2em;
        }

        @media screen and (max-width: 768px) {
          .project_title {
            font-size: 1.6em;
          }
          .stack_list {
            font-size: 1.1em;
          }
          .summary {
            font-size: 0.9em;
          }
          ul li {
            font-size: 1em;
          }
        }
      `}</style>
    </article>
  );
};

export default MVP;
