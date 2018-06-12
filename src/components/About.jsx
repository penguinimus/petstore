import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/surprisedcat.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/food2.jpg" className="about-profile-pic" rounded />
                        <h3>Yum food</h3>
                        <p>We have no limits to our world. We're only limited by our imagination. Everybody needs a friend. Here's something that's fun. You have to make those little noises or it won't work. This is the way you take out your flustrations. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer.</p>
                        <p>This is probably the greatest thing to happen in my life - to be able to share this with you. Don't forget to tell these special people in your life just how special they are to you. Put your feelings into it, your heart, it's your world. Learn when to stop. Now we can begin working on lots of happy little things.</p>
                        <p>It's important to me that you're happy. With something so strong, a little bit can go a long way. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown.</p>
                        <p>But they're very easily killed. Clouds are delicate. That's what painting is all about. It should make you feel good when you paint. You're the greatest thing that has ever been or ever will be. You're special. You're so very special. Tree trunks grow however makes them happy.</p>
                        <p>We wash our brush with odorless thinner. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue Be so very light. Be a gentle whisper.</p>
                        <p>Just go out and talk to a tree. Make friends with it. You don't want to kill all your dark areas they are very important. Remember how free clouds are. They just lay around in the sky all day long.</p>
                        <p>Get away from those little Christmas tree things we used to make in school. I think there's an artist hidden in the bottom of every single one of us. But we're not there yet, so we don't need to worry about it.</p>
                    </Col>
                </Grid>
            </div>
        );
    }
}