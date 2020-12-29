import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import HomeSection from "../components/home_section.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <section id="navbar">
        <NavBar />
      </section>

      <div>
        <section id="about_me">
          <HomeSection />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
