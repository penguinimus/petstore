import React, { Component } from 'react';
import { Row, Grid, Col, Jumbotron, Button } from 'react-bootstrap';
import '../../css/About.css';

import Footer from './Footer.jsx';

export default class About extends Component {
    componentWillMount() {
        console.log("Application loading: About");
      }
      
    componentDidMount() {
        // console.log("Application loaded: About");
    }
    
    
    render() {
        return (
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12} sm={8} smOffset={2}>
                            <Jumbotron>
                              <h1>About Page</h1>
                              <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                              </p>
                              <p>
                                <Button bsStyle="primary">Learn more</Button>
                              </p>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} sm={8} smOffset={2}>
                            <p>Paint anything you want on the canvas. Create your own world. Let your heart be your guide. These little son of a guns hide in your brush and you just have to push them out. There is immense joy in just watching - watching all the little creatures in nature.</p>
                            <p>I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. There comes a nice little fluffer. We need dark in order to show light. We don't have to be committed. We are just playing here. Now, we're going to fluff this cloud. Let's put some happy little clouds in our world.</p>
                            <p>Let's have a little bit of fun today. Let all these things just sort of happen. It's life. It's interesting. It's fun.</p>
                            <p>How to paint. That's easy. What to paint. That's much harder. Use absolutely no pressure. Just like an angel's wing. Use what you see, don't plan it. You have freedom here. The only guide is your heart. You can create anything that makes you happy. A tree needs to be your friend if you're going to paint him.</p>
                            <p>The shadows are just like the highlights, but we're going in the opposite direction. Don't fiddle with it all day. Don't hurry. Take your time and enjoy. Learn when to stop. Let's have a nice tree right here. Just beat the devil out of it.</p>
                            <p>Work that paint. Trees live in your fan brush, but you have to scare them out. Let all these little things happen. Don't fight them. Learn to use them. Now we can begin working on lots of happy little things.</p>
                            <p>I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Let's get crazy. Talent is a pursued interest. That is to say, anything you practice you can do. See. We take the corner of the brush and let it play back-and-forth. All kinds of happy little splashes.</p>
                        </Col>
                    </Row>
                    <Footer />
                </Grid>
        );
    }
}