import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import About from "../components/about_me.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rizwan Choudhury</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section id="navbar">
        <NavBar />
      </section>

      <div className={styles.fadeIn}>
        <section id="about_me">
          <About />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
