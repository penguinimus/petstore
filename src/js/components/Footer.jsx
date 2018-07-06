import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/Footer.css';

export default class Footer extends Component {
    render() {
        return (
                <Row className="footerbottom text-center">
                        <Col xs={12} sm={4}>
                            <ul>
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
                        <Col xs={12} sm={4}>
                            <p></p>
                        </Col>
                        <Col xs={12} sm={4}>
                            <ul>
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
                    </Row>
        );
    }
}