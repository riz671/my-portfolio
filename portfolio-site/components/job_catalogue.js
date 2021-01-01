import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";

const JobCatalogue = () => {
  const [jobTitle, setJobTitle] = useState([
    "Full-Stack Developer",
    "Front-End Engineer",
    "Back-End Engineer",
  ]);
  const [currIndex, setCurrIndex] = useState(0);
  const [currItem, setCurrItem] = useState(jobTitle[currIndex]);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   let index = !jobTitle[currIndex + 1] ? 0 : currIndex + 1;
    //   setCurrIndex(index);
    // }, 2000);
    // return () => clearInterval(interval);
  }, []);

  const titleTraversal = (order) => {
    let index = currIndex;
    if (order === "forward") {
      index++;
    } else if (order === "backward") {
      index--;
    }

    if (index < 0) {
      index = jobTitle.length - 1;
    } else if (index >= jobTitle.length) {
      index = 0;
    }

    setCurrIndex(index);
    return setCurrItem(jobTitle[index]);
  };

  return (
    <div className="job-carousel_containter">
      <button
        className="btn btn-backward"
        onClick={() => titleTraversal("backward")}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <p className="job_title">{currItem}</p>

      <button
        className="btn btn-forward"
        onClick={() => titleTraversal("forward")}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      <style jsx>{`
        .job-carousel_containter {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 80vw;
        }
        .job_title {
          flex: 9;
          font-size: 2.25em;
          font-family: "Poppins", sans-serif;
          padding: 0 5vw;
          text-align: center;
          margin: 0;
        }
        .btn {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 2em;
        }
        @media screen and (max-width: 768px) {
          .job_title {
            font-size: 1.25em;
          }
          .btn {
            font-size: 1.25em;
          }
        }
        @media screen and (max-width: 420px) {
          .job_title {
            font-size: 0.85em;
          }
          .btn {
            font-size: 1.25em;
          }
        }
      `}</style>
    </div>
  );
};

export default JobCatalogue;
