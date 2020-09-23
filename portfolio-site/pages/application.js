import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import About from "../components/about_me.js";
import ApplicationContainer from "../components/application_container";

export default function Home() {
  return (
    <div className={styles.container}>
      <section id="navbar">
        <NavBar />
      </section>

      <div className={styles.fadeIn}>
        <section id="about_me">
          <ApplicationContainer />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
