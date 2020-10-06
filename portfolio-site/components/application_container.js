import styles from "../styles/Home.module.css";
import FEC from "./projects/FEC.js";
import SDC from "./projects/SDC.js";
import MVP from "./projects/MVP.js";
import Fitness_Tailor from "./projects/Fitness_Tailor.js";
import LinkButton from "./projects/linkButtons.js";

const ApplicationContainer = () => {
  return (
    <div className="home_container">
      <section className="apps_container">
        <div className="apps_header_container">
          <p className="apps_header">
            <strong>Apps</strong>
          </p>
        </div>

        <br />
        <LinkButton
          links="https://github.com/riz671/my-portfolio/tree/master/portfolio-site"
          name="GO TO PORTFOLIO REPO"
        />

        <section className="main_project_container">
          <MVP />
        </section>

        <section className="main_project_container">
          <Fitness_Tailor />
        </section>

        <section className="main_project_container">
          <SDC />
        </section>

        <section className="main_project_container">
          <FEC />
        </section>
      </section>

      <style jsx>{`
        .home_container {
          display: flex;
          flex-direction: column;
          width: 100vw;
          margin: 1em 0 2em 0;
          justify-content: center;
          align-items: center;
        }
        .apps_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90vw;
        }
        .apps_header_container {
          text-align: center;
          border-bottom: 3px solid black;
          padding: 0 1em;
        }
        .apps_header {
          font-family: "Open Sans", sans-serif;
          font-size: 2em;
          margin-bottom: 0.25em;
        }
        .main_project_container {
          justify-content: center;
          margin: 1em 0 3em 0;
          width: 100%;
          background: #dcdcdc;
          border: 4px solid black;
          border-radius: 30px;
          box-shadow: 5px 5px transparent;
          transition: 0.3s;
        }
        .main_project_container:hover {
          box-shadow: 10px 8px #add8e6;
        }

        .project_container {
          height: 500px;
          width: 100%;
          border: 4px solid black;
          margin-bottom: 3em;
          border-radius: 30px;
        }
      `}</style>
    </div>
  );
};

export default ApplicationContainer;
