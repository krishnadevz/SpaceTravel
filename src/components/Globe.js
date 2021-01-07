import React from "react";
import styles from "./Globe.module.css";
import ReactGlobe from "react-globe";
import useSound from "use-sound";
import sound from "../Missle_Launch-Kibblesbob-2118796725.mp3";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'

function Globe() {
  const [play] = useSound(sound);

  return (
    <Container className="Globe" fluid={true}>
      <ReactGlobe height="99vh" width="100%"/>
      <div className={styles.homeContent}>
        <h1>
          <span>⭐🌟☄🌠🌟☀🌌🪐🌍🌚🌙🌕</span>
          <br/>Welcome To The Space Travel
        </h1>
        <div className={styles.buttons}>
            <Link to="/space">
              <button onClick={play} className={styles.button}>
                Liftoff!
              </button>
            </Link>
        </div>
      </div>
    </Container>
  );
}

export default Globe;

