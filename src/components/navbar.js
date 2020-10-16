import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'
import ENT3RLogo from '../files/logo.png'
import '../style/navbar.css'

class SBNavbar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" fixed="top" >
                <Link to="/" className="navbar-brand">
                    <img
                        alt="logo"
                        // src="https://sberbom.s3.eu-north-1.amazonaws.com/ENT3R-ny-farge.svg"
                        src={ENT3RLogo}
                        width="140"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Elevkveld</Link>
                        <Link className="nav-link" to="/opplegg">Opplegg</Link>
                        <Nav.Link target="_blank" href="http://ent3r.no">ENT3R.no</Nav.Link>
                        <Nav.Link target="_blank" href="https://www.instagram.com/ent3r_trondheim/?hl=nb">Instagram</Nav.Link>
                        <NavDropdown title="Tidligere elevkvelder" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to="/elevkveld040320">Elevkveld med programmering</Link>
                            <Link className="dropdown-item" to="/inspirasjonskveld20">Inspirasjonskveld 2020</Link>
                            <Link className="dropdown-item" to="/elevkveld240920">Elevkveld med Stian Sandø</Link>
                        </NavDropdown>
                        <NavDropdown title="Tidligere oppplegg" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to="/opplegg040320">Programmering</Link>
                            <Link className="dropdown-item" to="/inspirasjonskveld20Opplegg">Inspirasjonskveld 2020</Link>
                            <Link className="dropdown-item" to="/opplegg240920">Ballongbil</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            )}
        }
        
export default withRouter(SBNavbar);