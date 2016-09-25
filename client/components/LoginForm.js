import React from 'react';
import { Form, FormControl, FormGroup, Col, Button, ControlLabel } from 'react-bootstrap'

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {email: '', password: ''};
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeEmail(e) {
    this.setState({ email: e.target.value});
  }

  changePass(e) {
    this.setState({password: e.target.value});
  }

  submitForm(e) {
    e.preventDefault();
    console.log('Submitted form');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
        <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" onChange={this.changeEmail}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" onChange={this.ChangePass}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default LoginForm;
