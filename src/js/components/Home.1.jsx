import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import '../../css/Home.css';

class Home extends Component {
    render() {
        console.log(this.props.item);
        return (
            <div className="borderOn">
                <Grid fluid>
                    <Row className="show-grid text-center no-border">
                        <Col xs={12} className="person-wrapper jumbotron">
                            <div>
                                <h2>Only the Best Pet Food!</h2>
                                <p>Find the best food at the best prices</p>
                                <Link to="/about">
                                    <Button bsStyle="primary">Find Food</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className="show-grid text-center">
                        <Col xs={12} md={8} className="panel-left carousel-image">
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item>
                                    <Image alt="PlaceholderLeft" src='./assets/blank450.png' />
                                    <Carousel.Caption className="caption">
                                        <h3>Nutrition</h3>
                                        <p>Find out how healthy these treats are.</p>
                                        <p><Link to={'/'}>Find out more about cat calories</Link></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image alt="PlaceholderLeft" src='./assets/blank450.png' />
                                    <Carousel.Caption className="caption">
                                        <h3>Pet-ercise</h3>
                                        <p>Tips on walking your pet to make sure your furry friend doesn't get too fat.</p>
                                        <p><Link to={'/'}>Learn some pet workout tips</Link></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image alt="PlaceholderLeft" src='./assets/blank450.png' />
                                    <Carousel.Caption className="caption">
                                		<h3>Accessories</h3>
                                		<p>Walking your cat can be a drag.  Fortunately, we have some of the best pet harnesses to keep you and your four-legged pal happy and active.</p>
                                		<p><Link to={'/'}>Shop our selection of outdoor cat equipment</Link></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col xs={12} md={4} className="panel-right">
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item className="carousel">
                                    <Image alt="PlaceholderRight" src="./assets/blank450.png" className="panel-right-image" />
                                    <Carousel.Caption className="caption">
                                        <h3>Introducing Monty</h3>
                                        <p>Monty is your personal feline assistant, here to help you shop!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {
        item: state.item
    };
}

export default connect(mapStatetoProps)(Home);