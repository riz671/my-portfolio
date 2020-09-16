import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar.js";
import Contact from "../components/contact_form.js";
import Footer from "../components/footer.js";

const Contact_Page = () => {
  return (
    <div className={styles.container}>
      <section id="navbar">
        <NavBar />
      </section>

      <div className={styles.fadeIn}>
        <section id="contact_me">
          <Contact />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Contact_Page;
