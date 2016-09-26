import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { signInUser } from '../actions/authActions.js';
import { bindActionCreators } from 'redux';

import { Form, FormControl, FormGroup, Col, Button, ControlLabel } from 'react-bootstrap'

class LoginForm extends React.Component {
  constructor() {
    super();

    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    console.log('props', this.props);
    this.setState({
      email: this.props.user.email,
      password: this.props.user.password
    })
  }

  changeEmail(e) {
    this.setState({ email: e.target.value});
  }

  changePass(e) {
    this.setState({ password: e.target.value});
  }

  submitForm(e) {
    e.preventDefault();

    //Update state
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.plsSignInUser(user);

    //Update DB
    axios.post('/api/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log('response received');
    })
    .catch(function (error) {
      console.log(error);
    });
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
              <FormControl value={this.state.email} placeholder="Email" onChange={this.changeEmail}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl value={this.state.password} type="password" placeholder="Password" onChange={this.changePass}/>
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
        <br/><br/>

        {this.props.user.email} -- {this.props.user.password}
        <br/>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    plsSignInUser: (user) => {
      dispatch(signInUser(user))
    }
  }
}

// export default LoginForm;
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
