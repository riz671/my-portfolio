import Head from "next/head";
import Link from "next/link";
import SocialBar from "./social_bar.js";
import React, { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    require("../scripts/navbar_scripts.js");
  }, []);

  return (
    <nav className="nav-container">
      <Head>
        <title>Rizwan Choudhury</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="logo-container">
        <a href="/">
          <h2 className="logo-title">Rizwan Choudhury</h2>
        </a>
      </div>

      <button className="btn-hamburger">
        <div className="hamburger-icon">
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </button>

      <section id="menu" className="responsive-nav-menu">
        <ul className="menu-list">
          <li>
            <button className="btn-close">
              <div className="hamburger-icon">
                <div className="close-bar"></div>
                <div className="close-bar rotated"></div>
              </div>
            </button>
          </li>
          <Link href="/">
            <li id="Home">
              <a>Home</a>
            </li>
          </Link>
          <Link href="/application">
            <li id="Apps">
              <a>Apps</a>
            </li>
          </Link>
          <Link href="/My_Resume.pdf">
            <li id="Resume">
              <a>Resume</a>
            </li>
          </Link>
          {/* <Link href="/contact">
          <li id="Contact">
          <a>Contact Me</a>
          </li>
        </Link> */}
          <li>
            <SocialBar />
          </li>
        </ul>
      </section>

      <style jsx>{`
        .nav-container {
          display: flex;
          width: 100vw;
          height: 10vh;
          align-items: center;
          justify-content: space-between;
          background-color: #006666;
          color: #fffceb;
          padding: 0 4em;
        }
        .logo-title {
          font-family: "Poppins", sans-serif;
          font-size: 2em;
        }
        .btn-hamburger {
          display: none;
        }
        .btn-close {
          display: none;
        }
        .responsive-nav-menu {
          align-items: center;
        }
        .menu-list {
          list-style-type: none;
          display: flex;
          flex-direction: row;
        }
        .menu-list li {
          font-size: 1.5em;
        }
        .menu-list li a {
          cursor: pointer;
          padding: 0 10px 5px 10px;
          border-bottom: 2px solid transparent;
          font-family: "Poppins", sans-serif;
          transition: 0.4s;
          margin: 0 10px;
        }
        .menu-list li a:hover {
          border-bottom: 2px solid red;
        }

        @media screen and (max-width: 900px) {
          .logo-title {
            font-size: 1.5em;
          }
        }

        @media screen and (max-width: 768px) {
          body {
            overflow-x: hidden;
          }
          .nav-container {
            padding: 0 2em;
          }
          .nav-container::after {
            background: white;
            opacity: 0.8;
            z-index: 3;
          }
          .logo-container {
            flex: 1;
          }
          .logo-title {
            font-size: 1.25em;
          }
          .btn-hamburger {
            display: block;
            background-color: transparent;
            border: none;
            flex: 1;
            max-width: 50px;
            height: 70%;
          }
          .hamburger-icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10;
          }
          .burger {
            background-color: #fffceb;
            width: 35px;
            height: 6px;
            margin: 4px 0;
          }
          .btn-close {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border: 0px solid transparent;
            border-radius: 25px;
            margin: 20px 0;
            padding: 0;
            width: 50px;
            height: 50px;
            flex: 1;
            transition: 0.1s;
          }
          .btn-close:hover {
            background-color: red;
            outline: none;
          }
          .close-bar {
            background-color: #2e2623;
            width: 30px;
            height: 6px;
            transform: rotate(45deg);
          }
          .rotated {
            margin-top: -6px;
            transform: rotate(-45deg);
          }
          .menu-list {
            position: fixed;
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 70vw;
            height: 100vh;
            right: 0;
            top: 0;
            margin: 0 auto;
            padding: 0;
            border-left: 0.2px solid #999999;
            transform: translateX(100%);
            transition: transform 0.5s ease-in-out;
            z-index: 15;
            background: -webkit-linear-gradient(
              360deg,
              #83c39d 30%,
              #9fd1b3 70%
            );
          }
          .menu-list li {
            font-size: 1.25em;
            margin: 3.5vh 0;
            color: #2e2623;
            transform: opacity 1s ease-in;
          }
          .menu-list li a {
            padding: 0;
            border-bottom: 2px solid transparent;
          }
          .active-menu {
            display: flex;
            transform: translateX(0%);
            overflow: hidden;
          }
          .darken {
            background-color: black;
            opacity: 0.4;
          }
        }
        @media screen and (max-width: 320px) {
          .logo-title {
            font-size: 0.9em;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
