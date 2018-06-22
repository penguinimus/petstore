import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import '../../css/News.css';

export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/sadcat.jpg" className="header-image" />
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>All you need to paint is a few tools, a little instruction, and a vision in your mind. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. Let's make some happy little clouds in our world. I can't think of anything more rewarding than being able to express yourself to others through painting. There isn't a rule. You just practice and find out which way works best for you.</p>
                            <p>Work that paint. If what you're doing doesn't make you happy - you're doing the wrong thing. Even the worst thing we can do here is good.</p>
                            <p>It looks so good, I might as well not stop. When things happen - enjoy them. They're little gifts. Don't kill all your dark areas - you need them to show the light.</p>
                            <p>Van Dyke Brown is a very nice brown, it's almost like a chocolate brown. You have to make those little noises or it won't work. Let's go up in here, and start having some fun In this world, everything can be happy. See. We take the corner of the brush and let it play back-and-forth. God gave you this gift of imagination. Use it.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/surprisedcat-jumbotron.jpg" className="" />
                            <p>We spend so much of our life looking - but never seeing. You can get away with a lot. Get tough with it, get strong.</p>
                            <p>You can spend all day playing with mountains. This is a happy place, little squirrels live here and play. There is immense joy in just watching - watching all the little creatures in nature.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}