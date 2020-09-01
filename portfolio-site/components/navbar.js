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
        <li id="Home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li id="Apps">
          <Link href="/">
            <a>Apps</a>
          </Link>
        </li>
        <li id="Resume">
          <Link href="/My_Resume.pdf">
            <a>Resume</a>
          </Link>
        </li>
        <li id="Contact">
          <Link href="/">
            <a>Contact Me</a>
          </Link>
        </li>
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
        background-color: #696969;
        align-items: center;
        padding: 0 2em;
      }
      .logo-container {
        align-items: center;
        justify-content: center;
        padding: 0 0.25em;
        border-bottom: 3px ridge #efefc8;
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
        padding: 0.25em 0.5em;
        margin-right: 4px;
        opacity: 1;
        transition: 0.4s;
      }
      .menu-list li:hover {
        opacity: 0.6;
        background-color: rgb(140, 140, 140);
        border-radius: 2px;
      }
      .menu-list li::selection {
        background-color: purple;
      }
      #logo {
        color: #efefc8;
      }
      .menu-list li a {
        transition: 0.4s;
        color: white;
      }
    `}</style>
  </nav>
);

export default NavBar;
