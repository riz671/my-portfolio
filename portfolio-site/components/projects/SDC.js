import styles from "../../styles/Home.module.css";
import LinkButton from "./linkButtons.js";

const SDC = () => {
  return (
    <article className="project_container">
      <h2 className="project_title center_text underline_text">
        Glossier System Design
      </h2>

      <img className="SDC_img" src="/SDC_pt1.png" alt="" />
      <img className="SDC_img" src="/SDC_pt2.png" alt="" />
      <img className="SDC_img" src="/SDC_pt3.png" alt="" />
      <img className="SDC_img" src="/SDC_pt4.png" alt="" />

      <p className="stack_list center_text">
        JavaScript | PostgreSQL | Mongoose | AWS EC2 | Nginx | loader.io | K6 |
        New Relic
      </p>

      <p className="summary center_text">
        <i>
          An inherited legacy codebase of Glossier that follows service-oriented
          architecture principles. The backend has been designed to include an
          optimized database and a load balancer to horizantal scale this app to
          allow more user traffic into site without a degradation of service.
        </i>
      </p>

      <ul>
        <li>
          Performed benchmarking optimizations to execute queries in under 5 ms
          via B-tree indexing and inner joins.
        </li>
        <li>
          Horizontally scaled to 4 EC2 instances linked via round robin load
          balancing to increase throughput by 3.2X, while maintaining an average
          latency of 95ms and a 0% error rate.
        </li>
      </ul>

      <LinkButton
        links="https://github.com/riz671/Glossier-system_design"
        name="Check 'Glossier's System Design' Repo"
      />

      <style jsx>{`
        .project_container {
          width: 100%;
          align-items: center;
          justify-content: center;
          padding-bottom: 3vh;
        }
        .project_title {
          font-size: 2em;
          letter-spacing: 1px;
          font-family: "Playfair Display", serif;
          padding: 0 5vw;
        }
        .SDC_img {
          border: 0.5px solid #708090;
          margin: 0 20% 14px 20%;
          width: 60%;
        }
        .stack_list {
          font-size: 1.3em;
          word-spacing: 5px;
          margin: 20px 40px 10px 40px;
        }
        .summary {
          font-size: 1.2em;
          margin: 5px 40px 20px;
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
          font-size: 1.2em;
        }

        @media screen and (max-width: 768px) {
          .project_title {
            font-size: 1.6em;
          }
          .SDC_img {
            margin: 0 7.5% 14px 7.5%;
            width: 85%;
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

export default SDC;
