import styles from "../styles/Home.module.css";
import JobCatalogue from "./job_catalogue.js";

const HomeSection = () => {
  return (
    <div className="main_container">
      <section className="about_container">
        <p className="top_title">Rizwan Choudhury</p>

        <JobCatalogue />

        <div className="pic_container">
          <img id="my_pic" src="/Self_Pic.png" alt="my picture" />
        </div>

        <div className="article_title_container">
          <p className="article_title">Hi, I'm Rizwan. Nice to meet you!</p>
        </div>
      </section>

      <style jsx>{`
        .about_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0.9;
          padding: 3vh 0 5vh 0;
          min-height: 90vh;
          max-height: 90vh;
        }
        #my_pic {
          height: 200px;
          border-radius: 100px;
          z-index: 10;
        }
        .top_title {
          font-size: 4em;
          text-align: center;
          padding: 0;
          width: 80%;
          font-family: "Lora", serif;
          margin: 3vw;
          animation: fadeInFromLeft 0.75s ease-out;
        }
        .pic_container {
          margin: 5vw 0 2vw 0;
          animation: fadeInFromLeft 1.25s ease-out;
        }
        .article_title_container {
          margin: 1em 0 0.4em 0;
          width: 80%;
          text-align: center;
          padding: 0 1em;
          animation: fadeInFromLeft 1.5s ease-out;
        }
        .article_title {
          font-size: 1.6em;
          margin-bottom: 0.5em;
        }

        @keyframes fadeInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media screen and (max-width: 768px) {
          .about_container {
            justify-content: space-around;
          }
          #my_pic {
            height: 180px;
            border-radius: 90px;
            z-index: 10;
          }
          .top_title {
            font-size: 1.5em;
          }
          .article_title_container {
            text-align: center;
            padding: 0 0.75em;
          }
          .article_title {
            font-size: 1.1em;
            margin-bottom: 0.5em;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSection;
