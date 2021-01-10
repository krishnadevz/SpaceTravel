import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Container, Row, Col, Button, Accordion, Card } from "react-bootstrap";
import styles from "./Space.module.css";
import { useSpeechSynthesis } from "react-speech-kit";
import { useState, useEffect } from "react";
import ReactGlobe from "react-globe";
import Navbar from "./Navlinks";

function Space() {
  const [setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const [spaceData, setSpaceData] = useState({ apod: null, randomAPOD: null });

  useEffect(() => {
    const fetchData = async () => {
      const getAPOD = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=hETQq0FPsZJnUP9C3sUEFtwmJH3edb4I5bghfWDM`
      );
      const getRandomAPOD = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=hETQq0FPsZJnUP9C3sUEFtwmJH3edb4I5bghfWDM&count=5`
      );

      setSpaceData({
        apod: await getAPOD.json(),
        randomAPOD: await getRandomAPOD.json(),
      });
    };

    fetchData();
  }, []);

  console.log("render", spaceData);

  if (!spaceData.apod) return <div />;

  return (
    <Container fluid={true} className={styles.space}>
      <ReactGlobe height="50vh" width="100%" />
      <div className={styles.spaceContainer}>
        <Navbar />
        <h2>Astronomy Picture of the Day</h2>
        <Row className={styles.row_1}>
          <Col xs={12} sm={12} md={12} lg={6}>
            {spaceData.apod.media_type === "image" ? (
              <img src={spaceData.apod.url} alt={spaceData.apod.title} />
            ) : (
              <iframe
                title="space-video"
                src={spaceData.apod.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
              />
            )}
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <h3>
              {spaceData.apod.title}
              <button
                className={styles.button}
                onClick={() => speak({ text: spaceData.apod.explanation })}
              >
                🔊
              </button>
            </h3>
            <p>{spaceData.apod.date}</p>
            <p
              value={spaceData.apod.explanation}
              onChange={(event) => setValue(event.target.explanation)}
            >
              {spaceData.apod.explanation}
            </p>
          </Col>
        </Row>
      </div>

      <h2 className={styles.h2}>Random Astronomy Pictures</h2>
      <Accordion defaultActiveKey="0" className={styles.accordionContainer}>
        {spaceData.randomAPOD.map((item) => {
          return (
            <Card key={item.title}>
              <Card.Header className={styles.cardHeader}>
                <Accordion.Toggle
                  className={styles.accordionLink}
                  as={Button}
                  variant="link"
                  eventKey={item.title}
                >
                  {item.title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={item.title}>
                <Card.Body>
                  <Row>
                    <Col xs={12} sm={12} md={4}>
                      {item.media_type === "video" ? (
                        <iframe
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                          src={item.url}
                          frameBorder="0"
                        />
                      ) : (
                        <img src={item.url} alt={item.title} />
                      )}
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                      <p>Date: {item.date}</p>
                      <div>{item.explanation}</div>
                      {item.copyright ? (
                        <span>&copy;{item.copyright}</span>
                      ) : (
                        <span>--</span>
                      )}
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </Container>
  );
}
export default Space;
