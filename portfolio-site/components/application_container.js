import styles from "../styles/Home.module.css";
import FEC from "./projects/FEC.js";
import SDC from "./projects/SDC.js";
import MVP from "./projects/MVP.js";
import Nutrific from "./projects/Nutrific.js";
import LinkButton from "./projects/linkButtons.js";

const ApplicationContainer = () => {
  return (
    <div className="home_container">
      <section className="apps_container">
        <div className="apps_header_container">
          <p className="apps_header">
            <strong>My Applications</strong>
          </p>
        </div>

        <div className="navigate_buttons_container">
          <LinkButton
            links="#Nutrific"
            name="Scroll to 'Fitness Tailor'"
            target="_self"
          />
          <LinkButton
            links="#MVP"
            name="Scroll to 'Know It All'"
            target="_self"
          />
          <LinkButton
            links="#SDC"
            name="Scroll to 'Glossier's System Design'"
            target="_self"
          />
          <LinkButton
            links="#FEC"
            name="Scroll to 'Alo Yoga Product Detail'"
            target="_self"
          />
        </div>

        <section className="main_project_container" id="Nutrific">
          <Nutrific />
        </section>

        <section className="main_project_container" id="MVP">
          <MVP />
        </section>

        <section className="main_project_container" id="SDC">
          <SDC />
        </section>

        <section className="main_project_container" id="FEC">
          <FEC />
        </section>
      </section>

      <style jsx>{`
        .navigate_buttons_container {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          margin: 2vh 2vw;
        }
        .apps_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90vw;
          margin: 3vh 5vw;
        }
        .apps_header_container {
          margin: 1em;
          border-bottom: 1.5px solid black;
          text-align: center;
          padding: 0 1em;
        }
        .apps_header {
          font-size: 1.6em;
          margin-bottom: 0.5em;
        }
        .main_project_container {
          justify-content: center;
          margin: 2em 0 3em 0;
          width: 100%;
          background: #dcdcdc;
          border: 4px solid black;
          border-radius: 30px;
          box-shadow: 3px 3px transparent;
          transition: 0.3s;
        }
        .main_project_container:hover {
          box-shadow: 10px 10px #60b6d2;
        }

        .project_container {
          height: 500px;
          width: 100%;
          border: 4px solid black;
          margin-bottom: 3em;
          border-radius: 30px;
        }

        @media screen and (max-width: 768px) {
          .apps_header {
            font-size: 1.4em;
          }
        }
      `}</style>
    </div>
  );
};

export default ApplicationContainer;
