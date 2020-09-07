import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar.js";
import Contact from "../components/contact_form.js";
import Footer from "../components/footer.js";

const Contact_Page = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rizwan Choudhury</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section id="navbar">
        <NavBar />
      </section>

      <section id="contact me">
        <Contact />
      </section>
    </div>
  );
};

export default Contact_Page;
