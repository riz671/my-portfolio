import styles from "../../styles/Home.module.css";
import LinkButton from "./linkButtons.js";

const Fitness_Tailor = () => {
  return (
    <article className="project_container">
      <h2 className="project_title center_text underline_text">
        Fitness Tailor
      </h2>

      <iframe
        className="vid_container"
        width="50%"
        height="380"
        src="https://www.youtube.com/embed/mnBOrFL3iZ8"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p className="stack_list center_text">
        React-Native | React-Hooks | React-Navigation | Expo | Redux | Redux
        Thunk | Firebase | RESTful API
      </p>
      <p className="summary center_text">
        Be your best self as <em>you</em> tailor make your fitness journey.
      </p>

      <ul>
        <li>Improved code readability and reusability with React-hooks.</li>
        <li>
          Integrated Redux as state management strategy to simplify state logic.
        </li>
        <li>
          Designed UI for the Recipe Finder component and implemented
          asynchronous back-end logic to query and store data from USDA’s
          nutritional API via Redux Thunk.
        </li>
      </ul>

      <LinkButton
        links="https://github.com/fitness-tailor/fitness-tailor-client"
        name="Check 'Fitness Tailor' Repo"
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
          font-size: 1.2em;
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

export default Fitness_Tailor;
