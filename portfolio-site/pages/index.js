import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import HomeSection from "../components/home_section.js";
import AboutSection from "../components/about_me.js";
// import dynamic from "next/dynamic";

// const TypewriterScript = dynamic(() => import("../scripts/typewriter.js"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <TypewriterScript /> */}
      <section id="navbar">
        <NavBar />
      </section>
      <div>
        <section id="home" className={styles.fadeIn}>
          <HomeSection />
        </section>

        <section id="about_me" className={styles.fadeIn}>
          <AboutSection />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
