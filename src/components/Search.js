import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import styles from "./Search.module.css";

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
    <div className={styles.bg}>
      <div className={styles.container}>
        <h1 className={styles.title}>Space Photo Search🛸</h1>
      </div>
      <form className={styles.form} onSubmit={searchPhotos}>
        <label className={styles.label} htmlFor="query">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className={styles.input}
          placeholder={`Try anything related to space`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search🔍
        </button>
      </form>
      <div className={styles.cardlist}>
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className={styles.cardimage}
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
