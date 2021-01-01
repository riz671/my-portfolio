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
          <a
            href="https://www.linkedin.com/in/rizwan-choudhury/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li className="github">
          <a href="https://github.com/riz671" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </li>

        <li className="e-mail">
          <a href="mailto:choudhuryrizwan97@gmail.com" target="_blank">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>

      <style jsx>{`
        #social {
          display: block;
          margin-left: 30px;
        }
        .social-menu {
          list-style-type: none;
          display: flex;
          flex-direction: row;
          padding: 0;
        }
        .social-title {
          display: none;
        }
        .social-menu li {
          padding: 0 1vw;
        }
        .social-menu li a {
          background: #b4c7d0;
          padding: 1px 6px;
          border-radius: 10px;
          transition: background 0.3s ease-in;
          font-size: 1.2em;
        }
        .social-menu li a:hover {
          background: #ffffff;
        }
        .social-menu li.linkedIn a {
          color: #0e76a8;
        }
        .social-menu li.github a {
          color: #333;
        }
        .social-menu li.e-mail a {
          color: #c79b1a;
        }

        @keyframes highlightSocial {
          from {
            opacity: 0.7;
          }
          to {
            opacity: 1;
          }
        }

        @media screen and (max-width: 768px) {
          #social {
            margin-left: 0;
          }
          .social-title {
            text-align: center;
            font-family: "Poppins", sans-serif;
            margin: 2vh 5vw;
            border-bottom: 1px solid #2e2623;
            padding: 4px;
          }
          .social-title {
            display: block;
          }
          .social-menu li {
            margin: 0 2vw;
          }
          .social-menu li a {
            background: #e0e0e0;
            padding: 0;
            font-size: 1.25em;
            padding: 1px 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialBar;
