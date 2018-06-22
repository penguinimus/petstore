import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">OTB!</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                            News
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        );
    }
}