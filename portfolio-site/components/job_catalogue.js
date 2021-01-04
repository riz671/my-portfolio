import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";

const JobCatalogue = () => {
  useEffect(() => {
    require("../scripts/typewriter.js");
  }, []);

  return (
    <div className="job-carousel_containter">
      <h1 className="job_title typewriter_animation"></h1>

      <style jsx>{`
        .job-carousel_containter {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin: 0 10vw;
        }
        .job_title {
          font-size: 2.25em;
          font-family: "Poppins", sans-serif;
          border-right: 2px solid black;
          padding-right: 5px;
          text-align: center;
          margin: 0;
        }

        .typewriter_animation {
          animation: blinkTextCursor 1000ms steps(44) infinite normal;
        }

        @keyframes blinkTextCursor {
          from {
            border-right-color: black;
          }
          to {
            border-right-color: transparent;
          }
        }

        @media screen and (max-width: 768px) {
          .job_title {
            font-size: 1.25em;
            padding-right: 2.5px;
          }
        }
      `}</style>
    </div>
  );
};

export default JobCatalogue;
