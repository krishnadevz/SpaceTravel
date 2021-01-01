import React from "react";
import styles from "./Globe.module.css";
import ReactGlobe from "react-globe";
import useSound from "use-sound";
import sound from "../Missle_Launch-Kibblesbob-2118796725.mp3";
import { Link } from "react-router-dom";

function Globe() {
  const [play] = useSound(sound);

  return (
    <div className="Globe">
      <ReactGlobe height="90vh" width="100vw" />
      <div className={styles.buttons}>
        <div>
          <span>⭐🌟☄🌠🌟☀🌌🪐🌍🌚🌙🌕</span>
        </div>
        <div>
          <Link target={"_blank"} to="/Space">
            <button onClick={play} className={styles.button}>
              Welcome To The Space Travel🌌
            </button>
          </Link>
      </div></div>
    </div>
  );
}

export default Globe;

