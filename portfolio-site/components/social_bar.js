import React, { useEffect } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";

const SocialBar = () => {
  return (
    <section id="social">
      <p className="social-title">Social</p>

      <ul className="social-menu">
        <li className="linkedIn">
          <a href="#">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </li>

        <li className="github">
          <a href="#">
            <i className="fab fa-github fa-lg"></i>
          </a>
        </li>

        <li className="e-mail">
          <a href="#">
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </li>
      </ul>
      <style jsx>{`
      #social {
        display: none;
      }
      @media screen and (max-width: 768px) {
        #social {
          display: block;
        }
        .social-title {
          text-align: center;
          font-family: "Poppins", sans-serif;
          margin: 2vh 5vw;
          border-bottom: 1px solid #2e2623;
          padding: 4px;
        }
        .social-menu {
          list-style-type: none;
          display: flex;
          flex-direction: row;
          padding: 0;
        }
        .social-menu li {
          margin: 0 2vw;
        }
        .social-menu li.linkedIn a {
          color: #0e76a8;333
        }
        .social-menu li.github a {
          color: #333;
        }
        .social-menu li.e-mail a {
          color: #C79B1A;
        }
      }
      `}</style>
    </section>
  );
};

export default SocialBar;
