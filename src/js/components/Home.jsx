import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image, Button, Jumbotron, Carousel } from 'react-bootstrap';
import '../../css/Home.css';

class Home extends Component {
    render() {
        return (
                <Grid fluid>
                    <Row className="text-left">
                            <Carousel controls={false} className="hidden-xs">
                                <Carousel.Item className="banner">
                                        <Carousel.Caption className="caption-text">
                                            <h1>Only the Best</h1>
                                            <h1>Pet Supplies</h1>
                                            <h2>Find the best supplies at the best prices</h2>
                                            <p>You can't have light without dark. You can't know happiness unless you've known sorrow. If it's not what you want - stop and change it. Don't just keep going and expect it will get better. Automatically, all of these beautiful, beautiful things will happen. Trees live in your fan brush, but you have to scare them out.</p>                                
                                            <Link to="/about">
                                                <Button bsStyle="info">Find Food</Button>
                                            </Link>
                                        </Carousel.Caption>
                                    <Image alt="Corgi" src='./assets/BannerCorgi.jpg' className="banner-img" responsive />
                                </Carousel.Item>
                                <Carousel.Item className="banner">
                                        <Carousel.Caption className="caption-text">
                                            <h3>Introducing Monty</h3>
                                            <p>Monty is your personal feline assistant, here to help you shop!</p>
                                        </Carousel.Caption>
                                    <Image alt="Monty" src='./assets/BannerCatMonty.jpg' className="banner-img"  responsive />
                                </Carousel.Item>
                            </Carousel>
                            <div className="hidden-sm hidden-md hidden-lg">
                                <Image alt="BannerSmallScreen" src="./assets/BannerWomanKittenXS.jpg" responsive />
                                <Jumbotron>
                                    <h1>Only the Best</h1>
                                    <h1>Pet Supplies</h1>
                                    <h2>Find the best supplies at the best prices</h2>
                                    <p>You can't have light without dark. You can't know happiness unless you've known sorrow. If it's not what you want - stop and change it. Don't just keep going and expect it will get better. Automatically, all of these beautiful, beautiful things will happen. Trees live in your fan brush, but you have to scare them out.</p>                                
                                    <Link to="/about">
                                        <Button bsStyle="info">Find Food</Button>
                                    </Link>
                                </Jumbotron>
                            </div>
                    </Row>
                    <Row>
                        <Col xs={12} sm={8} smOffset={2}>
                            <h3>Yum food</h3>
                            <p>We have no limits to our world. We're only limited by our imagination. Everybody needs a friend. Here's something that's fun. You have to make those little noises or it won't work. This is the way you take out your flustrations. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer.</p>
                            <p>This is probably the greatest thing to happen in my life - to be able to share this with you. Don't forget to tell these special people in your life just how special they are to you. Put your feelings into it, your heart, it's your world. Learn when to stop. Now we can begin working on lots of happy little things.</p>
                            <p>It's important to me that you're happy. With something so strong, a little bit can go a long way. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown.</p>
                            <p>But they're very easily killed. Clouds are delicate. That's what painting is all about. It should make you feel good when you paint. You're the greatest thing that has ever been or ever will be. You're special. You're so very special. Tree trunks grow however makes them happy.</p>
                            <p>We wash our brush with odorless thinner. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue Be so very light. Be a gentle whisper.</p>
                            <p>Just go out and talk to a tree. Make friends with it. You don't want to kill all your dark areas they are very important. Remember how free clouds are. They just lay around in the sky all day long.</p>
                            <p>Get away from those little Christmas tree things we used to make in school. I think there's an artist hidden in the bottom of every single one of us. But we're not there yet, so we don't need to worry about it.</p>
                            <Image src="assets/food2.jpg" className="about-profile-pic" rounded responsive />
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