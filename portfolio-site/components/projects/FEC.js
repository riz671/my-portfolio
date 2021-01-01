import styles from "../../styles/Home.module.css";
import LinkButton from "./linkButtons.js";

const FEC = () => {
  return (
    <article className="project_container">
      <p className="project_title center_text underline_text">
        Alo Yoga Front End Replica
      </p>

      <iframe
        className="vid_container"
        width="50%"
        height="380"
        src="https://www.youtube.com/embed/ijdXIiaMoKw"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p className="stack_list center_text">
        React | JavaScript | CSS | HTML | Mongoose | Jest
      </p>

      <p className="summary center_text">
        <i>Replica of Alo Yoga's product page site.</i>
      </p>

      <ul>
        <li>
          Designed menu display for authentication, cart, and multiple
          categories in the navigation bar with React and CSS.
        </li>
        <li>
          Implemented search functionality that queried entries similar to user
          input from database.
        </li>
        <li>
          Combined 4 micro services using proxy servers to display a product
          page following service-oriented architecture.
        </li>
      </ul>

      <div className="FEC_button_container">
        <LinkButton
          links="https://github.com/riz671/AloYoga-navbar_module"
          name="Check 'Nav Bar Service' Repo"
        />

        <LinkButton
          links="https://github.com/riz671/AloYoga-proxy_setup"
          name="Check 'Proxy Service' Repo"
        />
      </div>

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
          font-size: 1.1em;
          margin: 5px 40px 20px;
        }
        ul {
          margin: 0 25px 30px 25px;
        }
        ul li {
          padding-bottom: 5px;
          font-size: 1.2em;
        }
        .FEC_button_container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          display: flex;
          align-items: center;
          justify-content: center;
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

export default FEC;
