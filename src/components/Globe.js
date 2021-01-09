import React from "react";
import styles from "./Globe.module.css";
import ReactGlobe from "react-globe";
import useSound from "use-sound";
import sound from "../Missle_Launch-Kibblesbob-2118796725.mp3";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from './Navlinks'

function Globe() {
  const [play] = useSound(sound);

  return (
    <Container className={styles.globe} fluid={true} style={{ padding: 0 }}>
      <ReactGlobe height="50vh" width="100%" />
      <div className={styles.homeContent}>
        <Navbar/>
        <h1>Welcome To The Space Travel</h1>
        <div className={styles.buttons}>
          <Link to="/space">
            <button onClick={play} className={styles.button}>
              Liftoff! 🚀
            </button>
          </Link>
        </div>
        <Container className={styles.aboutContent}>
          <p>⭐🌟☄🌠🌟☀🌌🪐🌍🌚🌙🌕</p>
          <h4>About</h4>
          <p>
            SpaceTravel app is built with ReactJS and other libraries like 3JS
            etc. It is also using the NASA API/Unsplash for displaying the
            contents(images/text), which is also used for the text-to-speech
            functionality and many more things.
          </p>
          <p>For more details about the project check the Article series.🌠</p>
        </Container>
      </div>
    </Container>
  );
}

export default Globe;
