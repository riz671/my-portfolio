import "../styles/globals.css";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/carousel.css"; //requires a loader
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
