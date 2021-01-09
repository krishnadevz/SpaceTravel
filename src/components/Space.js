import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Space.module.css";
import { useSpeechSynthesis } from "react-speech-kit";
import { useState, useEffect } from "react";
import bg from "../assets/space-bg.jpeg";
import { ArrowLeft } from "react-bootstrap-icons";

function Space() {
  const [setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=hETQq0FPsZJnUP9C3sUEFtwmJH3edb4I5bghfWDM`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []); //empty array for running only once then empty array for that

  if (!photoData) return <div />;

  return (
    <Container
      fluid={true}
      className={styles.space}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <a href="/">
        <ArrowLeft />
      </a>
      <Row className={styles.row_1}>
        <Col xs={12} sm={12} md={12} lg={6}>
          {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} />
          ) : (
            <iframe
              title="space-video"
              src={photoData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          )}
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <h1>
            {photoData.title}
            <button
              className={styles.button}
              onClick={() => speak({ text: photoData.explanation })}
            >
              🔊
            </button>
          </h1>
          <p>{photoData.date}</p>
          <p
            value={photoData.explanation}
            onChange={(event) => setValue(event.target.explanation)}
          >
            {photoData.explanation}
          </p>
        </Col>
      </Row>
      <Link to="/search">
        <center>
          <Button className={styles.textcenter} size="lg" variant="primary">
            Search🔍📷
          </Button>
        </center>
      </Link>
    </Container>
  );
}
export default Space;