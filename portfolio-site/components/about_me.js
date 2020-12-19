import styles from "../styles/Home.module.css";

const About_Me = () => {
  return (
    <div className="home_container">
      <section className="about_container">
        <div className="pic_container">
          <img id="my_pic" src="/Self_Pic.png" alt="my picture" />
        </div>

        <article className="article_container">
          <div className="article_title_container">
            <p className="article_title">Hi, I'm Rizwan. Nice to meet you!</p>
          </div>

          <div className="article_main_container">
            <p className="article_main">
              I enjoy conjuring novel concepts in my head and see what can be
              done to both implement and improve upon them. I also love to build
              easy-to-use and stylish interfaces with elegant user experiences
              while delivering clear and concise code.
              <br />
              <br />
              I cherish working with others even more than working by myself.
              There is nothing like the thrill of evolving an idea to make it
              even better than before.
              <br />
              <br />
              Let's work together to build something great.
            </p>
          </div>
        </article>
      </section>

      <section id="branding video"></section>

      <style jsx>{`
        .about_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0.9;
          padding: 3vh 0 5vh 0;
          background: -webkit-linear-gradient(360deg, #a6c9ae 40%, #cce0d1 60%);
          background-size: cover;
        }
        #my_pic {
          height: 250px;
          border-radius: 150px;
          z-index: 10;
        }
        .pic_container {
          margin: 1vw 0;
          animation: fadein 1s ease-out;
        }
        .article_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation: fadein 1s ease-out;
        }
        .article_title_container {
          margin-bottom: 0.3em;
          width: 80%;
          text-align: center;
          padding: 0 1em;
        }
        .article_title {
          font-size: 1.6em;
          margin-bottom: 0.5em;
        }
        .article_main_container {
          width: 80%;
        }
        .article_main {
          font-size: 1.2em;
          text-align: center;
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
          #my_pic {
            height: 180px;
            border-radius: 90px;
            z-index: 10;
          }
          .article_title_container {
            text-align: center;
            padding: 0 0.75em;
          }
          .article_title {
            font-size: 1.1em;
            margin-bottom: 0.5em;
          }
          .article_main {
            font-size: 0.9em;
          }
        }
      `}</style>
    </div>
  );
};

export default About_Me;
