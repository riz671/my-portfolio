import Link from "next/link";

const NavBar = () => (
  <nav className="nav-container">
    <section id="logo" className="logo-container">
      <Link href="/">
        <a className="logo-text">Rizwan Choudhury</a>
      </Link>
    </section>

    <section id="menu" className="nav-menu">
      <ul className="menu-list">
        <Link href="/">
          <li id="Home">
            <a>Home</a>
          </li>
        </Link>
        <Link href="/">
          <li id="Apps">
            <a>Apps</a>
          </li>
        </Link>
        <Link href="/My_Resume.pdf">
          <li id="Resume">
            <a>Resume</a>
          </li>
        </Link>
        <Link href="/contact">
          <li id="Contact">
            <a>Contact Me</a>
          </li>
        </Link>
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
        cursor: pointer;
        align-items: center;
        justify-content: center;
        padding: 0 0.25em;
        border-bottom: 3px ridge #efefc8;
        transition: 0.3s;
      }
      .logo-container:hover {
        color: gold;
        border-bottom: 3px ridge gold;
      }
      .logo-text {
        font-family: "Crimson Text", serif;
        height: 100%;
        font-size: 2em;
      }
      .nav-menu {
        align-items: center;
        justify-context: flex-end;
      }
      .menu-list {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
      }
      .menu-list li {
        padding: 0 0.5rem;
        font-size: 1.5em;
        line-height: 1em;
        padding: 0.25em 0.25;
        margin-right: 4px;
      }
      .menu-list li a {
        transition: 0.4s;
        padding: 0.25em;
        transition: 0.3s;
        cursor: pointer;
        border-bottom: 0px solid black;
      }
      .menu-list li a:hover {
        color: red;
        border-bottom: 1px solid red;
      }
      .menu-list li a:active {
        opacity: 0.6;
      }
    `}</style>
  </nav>
);

export default NavBar;
