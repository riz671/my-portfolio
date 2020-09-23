import styles from "../../styles/Home.module.css";
import LinkButton from "./linkButtons.js";

const Front_End = () => {
  return (
    <article className="project_container" id="Front_End">
      <h2 className="project_title center_text underline_text">
        Alo Yoga Front End Replica
      </h2>

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
          Combined 4 micro services with my team to display a product page
          following service-oriented architecture.
        </li>
      </ul>

      <LinkButton
        links="https://github.com/riz671/AloYoga-navbar_module"
        name="GO TO NAV BAR MODULE REPO"
      />

      <LinkButton
        links="https://github.com/riz671/AloYoga-proxy_setup"
        name="GO TO PROXY SETUP REPO"
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
          padding-bottom: 5px;
          font-size: 20px;
        }
      `}</style>
    </article>
  );
};

export default Front_End;
