import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../../assets/css/Home.css';

class Home extends Component {
    render() {
        console.log(this.props.item);
        return (
            <Grid fluid={true}>
                <Jumbotron>
                    <h2>Only the Best Pet Food!</h2>
                    <p>Find the best food at the best prices</p>
                    <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/food1.jpg" circle className="profile-pic" />
                        <h3>Item 1</h3>
                        <p>Some flavor text</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/food2.jpg" circle className="profile-pic" />
                        <h3>Item 2</h3>
                        <p>Some flavor text</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/food3.jpg" circle className="profile-pic" />
                        <h3>Item 3</h3>
                        <p>Some flavor text</p>
                    </Col>
                </Row>
                <Row className="show-grid text-center footer">
                    <Col xs={12} sm={4} className="">
                        <h3>Nutrition</h3>
                        <p>Find out how healthy these treats are.</p>
                        <p><Link to={'/'}>Find out more about cat calories</Link></p>
                    </Col>
                    <Col xs={12} sm={4} className="">
                        <h3>Pet-ercise</h3>
                        <p>Tips on walking your pet to make sure your furry friend doesn't get too fat.</p>
                        <p><Link to={'/'}>Learn some pet workout tips</Link></p>
                    </Col>
                    <Col xs={12} sm={4} className="">
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