import React, {useState,useEffect} from "react"

function Search() {

  const [ keyword, setKeyword] = useState('');
  const [photoData,setPhotoData]=useState(null);
  useEffect(()=>{
    fetchPhoto();
    async function fetchPhoto(){
      const res = await fetch(`http://images-api.nasa.gov/search?q=sun`); //i am trying to build here something like when we type 
      // sun then sun image will be shown can you work on this https://www.youtube.com/watch?v=GiIQce7Rx4Y&t=647s
      const data=await res.json();
      setPhotoData(data);
      console.log(data);
    }
  },[]);
  
  return (
<h1>hello</h1>
  )

}

export default Search;