import React from 'react'
import {Container} from 'react-bootstrap'
import ReactGlobe from "react-globe";
import spaceship from '../assets/spaceship.svg'
import Navbar from './Navlinks'
import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <Container className={styles.notFound} fluid={true} style={{ padding: 0 }}>
            <ReactGlobe height="50vh" width="100%" />
            <Container className={styles.nfContainer}>
                <Navbar/>
                <h2>Page Not Found</h2>
                <img className={styles.img} src={spaceship} alt="spaceship"/>
            </Container>
        </Container>
    )
}