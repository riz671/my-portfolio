import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer-container">
      <p className="footer-text">&copy; 2020 Rizwan Choudhury</p>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&display=swap");
        .footer-container {
          display: flex;
          background-color: #696969;
          width: 100vw;
          height: 5em;
          justify-content: center;
          align-items: center;
          top: 2em;
        }
        .footer-text {
          font-family: "Crimson Text", serif;
          font-size: 1.25em;
          color: #efefc8;
        }
      `}</style>
    </footer>
  );
}
