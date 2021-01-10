import styles from "../../styles/Home.module.css";
import LinkButton from "./linkButtons.js";

const Nutrific = () => {
  return (
    <article className="project_container">
      <h2 className="project_title center_text underline_text">Nutrific</h2>
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
        <li>
          Designed interactive UI to raise user engagement and experience.
        </li>
        <li>
          Accelerated development speed by modifying state management systems
          via Redux.
        </li>
        <li>
          Incorporated data fetching via API service to present nutritional data
          to users.
        </li>
        <li>
          Implement smooth journaling feature with calendar service to store
          user nutrition data over months.
        </li>
        <li>
          Configured Google Firebase Realtime Database to store user data.
        </li>
      </ul>
      <LinkButton
        links="https://github.com/nutrific/nutrific-client"
        name="Check 'Nutrific' Repo"
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

export default Nutrific;
