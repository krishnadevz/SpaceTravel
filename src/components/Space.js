import React from "react";
import {useState,useEffect} from "react";
function Space() {
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
    <div className="Space">
      <img
      src={photoData.url}
      alt={photoData.title}
      className="photo"
      />
      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
}

export default Space;
