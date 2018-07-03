import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid, Row, Col, Button, Carousel } from 'react-bootstrap';
import '../../assets/css/Home.css';

class Home extends Component {
    render() {
        console.log(this.props.item);
        return (
            <Grid fluid={true}>
                <Row className="show-grid text-center">
                    <Col className="person-wrapper noBottomMargin">
                        <Carousel interval={null}>
                          <Carousel.Item className="jumbotron">
                            <img width={480} height={320} alt="480x320" src="/assets/surprisedcat-jumbotron.jpg" />
                            <Carousel.Caption>
                                <h2>Only the Best Pet Food!</h2>
                                <p>Find the best food at the best prices</p>
                                <Link to="/about">
                                    <Button bsStyle="primary">About</Button>
                                </Link>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img width={480} height={320} alt="480x320" src="/assets/food1.jpg" />
                            <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img width={480} height={320} alt="480x320" src="/assets/food2.jpg" />
                            <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img width={480} height={320} alt="480x320" src="/assets/food3.jpg" />
                            <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="show-grid text-center footer">
                    <Col xs={12} sm={4}>
                        <h3>Nutrition</h3>
                        <p>Find out how healthy these treats are.</p>
                        <p><Link to={'/'}>Find out more about cat calories</Link></p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h3>Pet-ercise</h3>
                        <p>Tips on walking your pet to make sure your furry friend doesn't get too fat.</p>
                        <p><Link to={'/'}>Learn some pet workout tips</Link></p>
                    </Col>
                    <Col xs={12} sm={4}>
                		<h3>Accessories</h3>
                		<p>Walking your cat can be a drag.  Fortunately, we have some of the best pet harnesses to keep you and your four-legged pal happy and active.</p>
                		<p><Link to={'/'}>Shop our selection of outdoor cat equipment</Link></p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStatetoProps(state) {
    return {
        item: state.item
    };
}

export default connect(mapStatetoProps)(Home);