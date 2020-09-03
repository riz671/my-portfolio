import styles from "../styles/Home.module.css";

const Home = () => {
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
              experience in Javascript, React, Node.js, Express, PostgreSQL and
              more.
            </p>

            <p className="my_article_text">
              The process of building has always been my passion. After
              discovering software engineering, I began to wonder if I had found
              my true calling. As I gained a deeper understanding behind
              fullstack app development, I knew I wanted to build using software
              engineering as my muse.
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
          max-width: 10em;
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

export default Home;
