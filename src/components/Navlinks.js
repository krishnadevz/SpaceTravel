import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from "react-router-dom";

export default function Navlinks() {
    return (
        <React.Fragment>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Link to="/">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/space">
                        <Nav.Link href="/space">Explore Space</Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/search">
                        <Nav.Link href="/search">Search</Nav.Link>
                    </Link>
                </Nav.Item>
            </Nav>
        </React.Fragment>
    )
}
