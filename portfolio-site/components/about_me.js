import styles from "../styles/Home.module.css";
import JobCatalogue from "./job_catalogue.js";

const AboutSection = () => {
  return (
    <div className="about_container">
      <article className="article_container">
        <div className="article-title_container">
          <p className="article-title">About Me</p>
        </div>

        <div className="article_main_container">
          <p className="article_main">
            I am a software engineer who enjoys brainstorming ideas in my head
            and bringing them to life. When working, I emphasize building
            easy-to-use and stylish features with incredible user experience. I
            value delivering clear and concise code as well.
            <br />
            <br />
            I cherish working with others even more than working by myself.
            There is nothing like the thrill of discussing and implementing
            ideas with others to me.
            <br />
            <br />
            Let's work together to build something great. I am motivated to be
            better than I was yesterday with you.
          </p>
        </div>
      </article>

      <section className="pic_container">
        <img
          id="about_pic"
          src="/About_Pic.jpg"
          alt="Picture next to about me section"
        />
      </section>

      <style jsx>{`
        .about_container {
          display: flex;
          flex-direction: row;
          padding: 0 3vw 0 1vw;
          min-height: 100vh;
        }
        .article_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0.9;
          flex: 2;
          padding: 3vh 0 5vh 0;
          animation: fadein 1s ease-out;
        }
        .article-title_container {
          margin: 1em 0;
          border-bottom: 1px solid black;
          text-align: center;
          padding: 0 1em;
        }
        .article-title {
          font-size: 1.6em;
          margin-bottom: 0.5em;
        }
        .article_main_container {
          width: 80%;
        }
        .article_main {
          font-size: 1.2em;
          text-align: center;
          margin: 0;
        }
        .pic_container {
          margin: 5vw 0 2vw 0;
          animation: fadein 1s ease-out;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }
        #about_pic {
          width: 80%;
          border-radius: 25px;
          border: 0.5px solid #70bdd7;
          box-shadow: 5px 4px transparent;
          transition: 0.5s;
        }
        #about_pic:hover {
          box-shadow: 10px 10px #28768f;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media screen and (max-width: 768px) {
          .about_container {
            display: flex;
            flex-direction: column-reverse;
            padding: 0 3vw;
          }
          .article_container {
            flex: none;
            padding-top: 0;
          }
          .article-title_container {
            padding: 0 0.75em;
            margin-top: 0;
          }
          .article-title {
            font-size: 1.1em;
            margin-bottom: 0.5em;
          }
          .article_main {
            font-size: 0.8em;
          }
          #about_pic {
            width: 200px;
            border-radius: 25px;
          }
        }

        @media screen and (max-width: 420px) {
          #about_pic {
            width: 150px;
            border-radius: 25px;
          }
        }

        @media screen and (max-width: 250px) {
          #about_pic {
            width: 80px;
            border-radius: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
