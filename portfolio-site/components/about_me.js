import styles from "../styles/Home.module.css";

const About_Me = () => {
  return (
    <div className="home_container">
      <section className="about_container">
        <div className="about_picture">
          <img id="my_pic" src="/Self_Pic.png" alt="" />
        </div>

        <article className="about_article_container">
          <div className="about_header_container">
            <p className="about_header">
              <strong>About</strong>
            </p>
          </div>
          <div className="my_article_text_container">
            <p className="my_article_text">
              I am Rizwan Choudhury, a Fullstack Software Engineer with
              experience in Javascript, React, Nginx, Node.js, Express,
              PostgreSQL and more.
            </p>

            <p className="my_article_text">
              My greatest passion is to build. I inspire to engineer software
              applications. Combine these two, you get my ultimate destination -
              to design performant applications.
            </p>

            <p className="my_article_text">
              Let's work together to build something great.
            </p>
          </div>
        </article>
      </section>

      <section id="branding video"></section>

      <style jsx>{`
        .home_container {
          display: flex;
          flex-direction: column;
          width: 100vw;
          margin: 1em 0 2em 0;
          justify-content: center;
          align-items: center;
        }
        .about_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90vw;
          margin-bottom: 2em;
        }
        #my_pic {
          height: 200px;
          border-radius: 150px;
          margin: 1.5em;
        }
        .about_article_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .about_header_container {
          margin-bottom: 0.3em;
          text-align: center;
          border-bottom: 3px solid black;
          padding: 0 1em;
        }
        .about_header {
          font-family: "Open Sans", sans-serif;
          font-size: 1.5em;
          margin-bottom: 0.5em;
        }
        .my_article_text_container {
          width: 80%;
        }
        .my_article_text {
          font-size: 1.5em;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default About_Me;
