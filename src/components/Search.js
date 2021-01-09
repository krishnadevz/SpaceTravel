import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import ReactGlobe from "react-globe";
import styles from "./Search.module.css";
import {Row, Col, Container, Button, Form, FormControl, Nav} from 'react-bootstrap'
import Navbar from './Navlinks'
import {BrowserRouter as Router} from 'react-router-dom'
import ModalImage from "react-modal-image-responsive";
import {Download} from 'react-bootstrap-icons'

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
      <ReactGlobe height="50vh" width="100%" />
      <Container className={styles.searchContainer}>
        <Navbar/>
        <h1 className={styles.title}>Space Photo Search🛸</h1>
        <Form onSubmit={searchPhotos}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" name="query" value={query}
          onChange={(e) => setQuery(e.target.value)}/>
            <Button className={styles.searchBtn} type="submit">Search🔍</Button>
          </Form>
      </Container>

      {/* card list className={styles.cardlist}*/}
      <Container className={styles.searchContainer}>
        
        {console.log('url pic', pics)}
        <Container className={styles.imgContainer}>
        {pics.map((pic) => (
          <div key={pic.id}>
            <ModalImage
                  small={pic.urls.small}
                  large={pic.urls.full}
                  alt={pic.alt_description}
                  hideDownload={true}
                  hideZoom={true}
                  className={styles.smallPic}
                  variant="top"
                  title="Click to preview"
                />
                <a href={pic.links.download + "?force=true"} rel="noopener noreferrer" download>
                  <Button className={styles.dlBtn}>Download Image <Download/></Button>
                </a>
          </div>
        ))}
        
        </Container>  
      </Container>
    </div>
  );
}

export default Search;
