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

      <section className={styles.main}>
        <NavBar />
      </section>

      <section id="about_me">
        <About />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
