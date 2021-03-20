import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './navbar.css'

const NavigationBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-3" sticky="top">
        <Navbar.Brand href="/">Clozd Coding Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;
