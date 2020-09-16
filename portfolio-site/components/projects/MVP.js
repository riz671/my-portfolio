import styles from "../../styles/Home.module.css";
import LinkButton from "./linkButtons.js";

const MVP = () => {
  return (
    <article className="project_container" id="MVP">
      <h2 className="project_title center_text underline_text">
        Know It All - Trivia Game
      </h2>

      <LinkButton links="https://github.com/riz671/KnowItAll" />

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
          A local based trivia game meant to bring people closer together.
          People form into teams to compete and answer as many questions as they
          can to be crowned as the "team to know it all".
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

      <style jsx>{`
        .project_container {
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        .vid_container {
          margin: 0 25%;
        }
        .project_title {
          font-size: 36px;
          letter-spacing: 1px;
        }
        .stack_list {
          font-size: 24px;
          word-spacing: 5px;
        }
        .center_text {
          text-align: center;
        }
        .underline_text {
          text-decoration: underline;
        }
        .summary {
          font-size: 22px;
          margin: 5px 40px 20px;
        }
        ul {
          margin: 0 25px 30px 25px;
        }
        ul li {
          margin-bottom: 5px;
          font-size: 20px;
        }
      `}</style>
    </article>
  );
};

export default MVP;
