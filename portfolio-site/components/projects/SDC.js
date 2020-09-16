import styles from "../../styles/Home.module.css";
import LinkButton from "./linkButtons.js";

const SDC = () => {
  return (
    <article className="project_container" id="SDC">
      <h2 className="project_title center_text underline_text">
        Glossier System Design
      </h2>

      <LinkButton links="https://github.com/riz671/rizwan_service-reviews" />

      <img className="project_images" src="/SDC_pt1.png" alt="" />
      <img className="project_images" src="/SDC_pt2.png" alt="" />
      <img className="project_images" src="/SDC_pt3.png" alt="" />
      <img className="project_images" src="/SDC_pt4.png" alt="" />

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
        .summary {
          font-size: 22px;
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
          font-size: 20px;
        }
      `}</style>
    </article>
  );
};

export default SDC;
