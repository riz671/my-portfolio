import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rizwan Choudhury</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <NavBar />
      </main>
    </div>
  );
}