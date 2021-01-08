import React from "react";
import styles from "./Globe.module.css";
import ReactGlobe from "react-globe";
import useSound from "use-sound";
import sound from "../Missle_Launch-Kibblesbob-2118796725.mp3";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Footer from './Footer'

function Globe() {
  const [play] = useSound(sound);

  return (
    ///make this container smaller as i mentioned in twitter dms
    <Container className={styles.globe} fluid={true} style={{padding: 0}}> 
      <ReactGlobe height="50vh" width="100%"/>
      <div className={styles.homeContent}>
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
              SpaceTravel app is built with ReactJS and other libraries like 3JS. It  
              is also using the NASA API for displaying the contents, which is also used 
              for the text-to-speech functionality and many more things.
          </p>
          <p>Check the live demo and description of the project.🌠</p>

          {/* insert link here for the project's preview link */}
          
        </Container>
        <Footer />
      </div>
    </Container>
  );
}

export default Globe;

