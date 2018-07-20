import React, { Component } from 'react';
import { Grid, Col, Button, ControlLabel, Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import '../../css/SignIn.css';
import axios from 'axios';

export default class SignIn extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          emailtext: '',
          passwordtext: '',
          emailvalidation: null,
          passvalidation: null,
          error: '',
          statusbar: 'showstatus',
          login: false,
          loginname: ''
        };
    }

    // e is short for event
    handleEmailChange(e) {
        this.setState({ emailtext: e.target.value });
        if ( e.target.value === '') {
          this.setState({ emailvalidation: ''});
        } else if ( e.target.value.includes('@')) {
          this.setState({ emailvalidation: 'success'});
        } else {
          this.setState({ emailvalidation: 'error'});
        }
      }


    handlePasswordChange(e) {
      if (e.target.value.length === 0 ) {
        this.setState({ passvalidation: ''});
      } else if (e.target.value.length < 6 ) {
        this.setState({ passvalidation: 'warning' });
      } else {
        this.setState({ passvalidation: 'success'});
      }
    }

    handleSubmit(e) {
      console.log('trying...');
      const API_URL = 'http://petstore-penguinimus.c9users.io:8081/api';
      const payload = {
        "email": this.state.emailtext,
        "password": this.state.passwordtext
      }
      axios.post(`${API_URL}/login`, payload)
      .then((response) => {
         console.log(response);
         if(response.data.code === 200) {
           console.log('login successful');
         } else if (response.data.code === 204) {
           console.log('Username and password don\'t match');
         } else {
           console.log('Username doesn\'t exist');
         }
       });
       e.preventDefault();
       console.log('Did or didn\'t do the thing...');
     }

    render() {
      console.log(`Login: ${this.state.login}`);
        return (
            <Grid>
                    <Form horizontal onSubmit={this.handleSubmit}>
                      <h1 className="text-center">Sign In</h1>
                      <FormGroup controlId="formHorizontalEmail" validationState={this.state.emailvalidation}>
                        <Col componentClass={ControlLabel} xs={3}>
                          Email
                        </Col>
                        <Col sm={6}>
                          <FormControl type="email" placeholder="Email" value={this.state.emailtext} onChange={this.handleEmailChange} />
                          <FormControl.Feedback />
                        </Col>
                      </FormGroup>

                      <FormGroup controlId="formHorizontalPassword" validationState={this.state.passvalidation}>
                        <Col componentClass={ControlLabel} xs={3}>
                          Password
                        </Col>
                        <Col sm={6}>
                          <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                          <FormControl.Feedback />
                        </Col>
                      </FormGroup>

                      <FormGroup>
                        <Col smOffset={3} xs={10}>
                          <Checkbox>Remember me</Checkbox>
                        </Col>
                      </FormGroup>

                      <FormGroup>
                        <Col smOffset={3} xs={10}>
                          <Button type="submit" value="Submit">Sign in</Button>
                        </Col>
                      </FormGroup>
                    </Form>
            </Grid>
        );
    }
}
