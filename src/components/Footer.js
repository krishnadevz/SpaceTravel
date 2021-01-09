import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container className={styles.footerContainer}>
      <Container fluid={true} className={styles.footerContainer}></Container>
      <Row>
        <Col xs={12} sm={12} md={4} lg={3}>
          <h4>Authors</h4>
          <ul className={styles.ul}>
            <li>Krishna</li>
            <li>Hally</li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={4} lg={3}>
          <h4>Blog</h4>
          <ul className={styles.ul}>
            <li>
              <a
                title="Read this article"
                href="https://dev.to/krishnakakade/d1-idea-fixing-and-brainstorming-for-digitalocean-hackathon-4535"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article 1
              </a>
            </li>
            <li>
              <a
                title="Read this article"
                href="https://dev.to/krishnakakade/d2-the-first-component-of-spacetravel-is-ready-and-fixed-one-headache-issue-n5d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article 2
              </a>
            </li>
            <li>
              <a
                title="Read this article"
                href="https://dev.to/krishnakakade/day-3-almost-80-of-work-of-the-second-component-is-completed-and-fetched-content-from-nasa-api-and-more-stuff-dohackathon-fi3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article 3
              </a>
            </li>
            <li>
              <a
                title="Read this article"
                href="https://dev.to/krishnakakade/day-4-text-to-speech-is-done-for-second-component-and-more-about-about-dohackathon-19ll"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article 4
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <span className={styles.copyright}>
        Copyright &copy; 2020-2021 All Rights Reserved.
      </span>
    </Container>
  );
};

export default Footer;
