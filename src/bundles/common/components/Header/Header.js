import React from 'react';
import Ionia from '../../../assets/images/Ionia.png';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.scss'

export default class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className="navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home" className="navbar-justified mr-5"><img src={Ionia} href="#" width="60" height="60"></img></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                    <Nav.Link href="#home" className="items mr-4">Profile</Nav.Link>
                    <Nav.Link href="#link" className="items">Builds</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}