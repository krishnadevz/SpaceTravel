import React from "react";
import styles from "./Space.module.css";
import { useSpeechSynthesis } from 'react-speech-kit';
import {useState,useEffect} from "react";
function Space() {
  const [ setValue] = useState('');
  const { speak } = useSpeechSynthesis();
  const [photoData,setPhotoData]=useState(null);
  useEffect(()=>{
fetchPhoto();
async function fetchPhoto(){
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=hETQq0FPsZJnUP9C3sUEFtwmJH3edb4I5bghfWDM`);
  const data=await res.json();
  setPhotoData(data);
  console.log(data);
}
  },[]); //empty array for running only once then empty array for that 
 

  if (!photoData) return <div />;
  
  return (
    <>
    <div className={styles.space}>
      {photoData.media_type === "image" ? (
        <img 
          src={photoData.url}
          alt={photoData.title}
          className={styles.space}
        />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className={styles.space}
        />
      )}
      <div>
        <h1>{photoData.title}</h1>
        <p className={styles.space.date}>{photoData.date}</p>
        <p className={styles.space.explanation} value={photoData.explanation}
        onChange={(event) => setValue(event.target.explanation)}>{photoData.explanation}</p>
      </div>
    </div> 
    <div>
    <button className={styles.button} onClick={() => speak({ text: photoData.explanation })}>Listen 🔊</button>
    </div>
    
    </>
  );
}
export default Space;
