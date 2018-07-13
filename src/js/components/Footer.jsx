import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/Footer.css';

export default class Footer extends Component {
    componentWillMount() {
        console.log("Application loading: Footer");
      }
      
    componentDidMount() {
        console.log("Application loaded: Footer");
    }
    
    render() {
        return (
            <div>
                <Row className="show-grid socialfooter text-center">
                    <Col xs={12} sm={3}>
                    </Col>
                    <Col xs={12} sm={3}>
                        <p>Chat with Oliver</p>
                    </Col>
                    <Col xs={12} sm={3}>
                        <ul>
                            <li>Follow Us!</li>
                            <li>
                                <a href="http://www.facebook.com" className="btn btn-social-icon btn-facebook">
                                    FB
                                </a>
                            </li>
                            <li>
                                <a href="http://www.instagram.com" className="btn btn-social-icon btn-instagram">
                                    IN
                                </a>
                            </li>
                            <li>
                                <a href="http://www.twitter.com" className="btn btn-social-icon btn-twitter">
                                    TW
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={3}>
                        <p></p>
                    </Col>
                </Row>
                <Row className="show-grid homefooter text-center">
                    <Col xs={12} sm={3}>
                        <ul>
                            <li className="footer-heading">Navigation</li>
                            <li>
                                <Link to="/about">
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={3}>
                        <ul>
                            <li className="footer-heading">Site Map</li>
                            <li>
                                <Link to="/about">
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={3}>
                        <ul>
                            <li className="footer-heading">Things</li>
                            <li>
                                <Link to="/about">
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={3}>
                        <ul>
                            <li className="footer-heading">Stuff</li>
                            <li>
                                <Link to="/about">
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}