import React from 'react';
// import LoginForm from './LoginForm';
import { Link } from 'react-router';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Link to="/">User form</Link> <br/>
        <Link to="/confirm">Confirm</Link> <br/>
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
}

export default Main;

// <LoginForm/>
