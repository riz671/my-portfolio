import styles from "../../styles/Home.module.css";
import LinkButton from "./linkButtons.js";

const Fitness_Tailor = () => {
  return (
    <article className="project_container">
      <h2 className="project_title center_text underline_text">
        Fitness Tailor
      </h2>

      <p className="temp_message center_text">Demo Video will be up soon!</p>

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
        name="GO TO FITNESS TAILOR REPO"
      />

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
        .temp_message {
          font-size: 30px;
          margin-bottom: 30px;
        }
        .stack_list {
          font-size: 24px;
          word-spacing: 5px;
          margin: 10px 40px;
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

export default Fitness_Tailor;
