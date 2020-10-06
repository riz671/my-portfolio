import Head from "next/head";
import Link from "next/link";

const NavBar = () => (
  <nav className="nav-container">
    <Head>
      <title>Rizwan Choudhury</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <section id="social" className="social-menu">
      <ul className="menu-list">
        <li>
          <a
            className="logo-container"
            href="https://github.com/riz671"
            target="_blank"
          >
            <img
              className="logo_img"
              src="/github_logo.png"
              alt="Github Logo"
            />
          </a>
        </li>

        <li>
          <a
            className="logo-container"
            href="https://www.linkedin.com/in/rizwan-choudhury-670335ab/"
            target="_blank"
          >
            <img
              className="logo_img"
              src="/linkedin_logo.png"
              alt="LinkedIn Logo"
            />
          </a>
        </li>

        <li>
          <a
            className="logo-container"
            href="mailto:choudhuryrizwan97@gmail.com"
            target="_blank"
          >
            <img className="logo_img" src="/mail_logo.png" alt="Mail Logo" />
          </a>
        </li>
      </ul>
    </section>

    <section id="menu" className="nav-menu">
      <ul className="menu-list">
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
      </ul>
    </section>

    <style jsx>{`
      @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&display=swap");
      .nav-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100vw;
        height: 5em;
        align-items: start;
        background-color: black;
        color: #d3d3d3;
        align-items: center;
        padding: 0 2em;
      }
      .logo-container {
        height: 50px;
        width: 50px;
        border-bottom: 2px solid transparent;
      }
      .logo-container:hover {
        border-bottom: 2px solid red;
      }
      .logo_img {
        height: 50px;
        width: 50px;
        border-radius: 25px;
      }
      .nav-menu {
        align-items: center;
      }
      .menu-list {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        padding: 0 30px;
      }
      .menu-list li {
        padding: 0 0.5rem;
        font-size: 1.5em;
        line-height: 1em;
        padding: 0.1em 0.1em;
        margin-right: 4px;
      }
      .menu-list li a {
        cursor: pointer;
        padding: 0 10px 5px 10px;
        border-bottom: 2px solid transparent;
        transition: 0.4s;
      }
      .menu-list li a:hover {
        border-bottom: 2px solid red;
      }
    `}</style>
  </nav>
);

export default NavBar;
