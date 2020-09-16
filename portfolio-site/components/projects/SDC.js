import styles from "../../styles/Home.module.css";

const SDC = () => {
  return (
    <article className="project_container" id="SDC">
      <h2 className="project_title center_text underline_text">
        Glossier System Design
      </h2>
      <img className="project_images" src="/SDC_pt1.png" alt="" />
      <img className="project_images" src="/SDC_pt2.png" alt="" />
      <img className="project_images" src="/SDC_pt3.png" alt="" />
      <img className="project_images" src="/SDC_pt4.png" alt="" />

      <p className="stack_list center_text">
        React | JavaScript | CSS | HTML | Mongo/Mongoose | Jest
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

      <style jsx>{`
        .project_container {
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        .project_title {
          font-size: 36px;
          letter-spacing: 1px;
        }
        .project_images {
          border: 0.5px solid #708090;
          margin: 0 20% 14px 20%;
          width: 60%;
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

export default SDC;
