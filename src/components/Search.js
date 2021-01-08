import React, {useState} from "react"
import Unsplash, { toJson } from "unsplash-js";
function Search() {
  const [query, setQuery] = useState("");
  const unsplash = new Unsplash({
    accessKey: "Xhyev2ttVhtveYdQhiRjp4WT1Pe_69kQI4hWOUn81y8",
  });
  const [pics, setPics] = useState([]);

 
const searchPhotos = async (e) => {
  e.preventDefault();
  unsplash.search
      .photos(query, 1, 20)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
  });
};
  return (
    <>
    <div className="container">
        <h1 className="title">Space Photo Search</h1>
      </div>
      <form className="form" onSubmit={searchPhotos}>
              <label className="label" htmlFor="query"> 
        {" "}
        📷
      </label>
      <input
        type="text"
        name="query"
        className="input"
        placeholder={`Try anything related to space`}
        value={query}
    onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
    <div className="card-list">
        {pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>)}
      </div>
    </>
  );
}

export default Search;
