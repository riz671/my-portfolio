import styles from "../styles/Home.module.css";
import FEC from "./projects/FEC.js";
import SDC from "./projects/SDC.js";
import MVP from "./projects/MVP.js";

const ApplicationContainer = () => {
  return (
    <div className="home_container">
      <section className="apps_container">
        <div className="apps_header_container">
          <p className="apps_header">
            <strong>Apps</strong>
          </p>
        </div>

        <section className="main_project_container">
          <SDC />
        </section>

        <section className="main_project_container">
          <FEC />
        </section>

        <section className="main_project_container">
          <MVP />
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
          margin-bottom: 0.3em;
          text-align: center;
          border-bottom: 3px solid black;
          padding: 0 1em;
        }
        .apps_header {
          font-family: "Open Sans", sans-serif;
          font-size: 1.5em;
          margin-bottom: 0.5em;
        }
        .main_project_container {
          justify-content: center;
          margin: 3em 0;
          width: 100%;
          background: #dcdcdc;
          border: 4px solid black;
          border-radius: 30px;
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