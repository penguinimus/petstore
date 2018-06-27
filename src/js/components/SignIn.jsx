import React, { Component } from 'react';
import { Grid, Col, Button, ControlLabel, Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import '../../css/SignIn.css';

export default class SignIn extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          emailtext: '',
          emailvalidation: '',
          passvalidation: '',
          error: '',
          statusbar: 'showstatus'
        };
    }
    
    // e is short for event
    handleEmailChange(e) {
        this.setState({ emailval: e.target.value });
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
    
    render() {
      console.log(this.state.emailval);
        return (
            <Grid>
                    <Form horizontal>
                      <FormGroup controlId="formHorizontalEmail" validationState={this.state.emailvalidation}>
                        <Col componentClass={ControlLabel} xs={3}>
                          Email
                        </Col>
                        <Col sm={6}>
                          <FormControl type="email" placeholder="Email" value={this.state.emailval} onChange={this.handleEmailChange} />
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
                          <Button type="submit">Sign in</Button>
                        </Col>
                      </FormGroup>
                    </Form>     
            </Grid>
        );
    }
}