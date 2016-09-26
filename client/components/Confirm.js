import React from 'react';
import { connect } from 'react-redux';


class Confirm extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log('props', this.props);
    this.setState({
      email: this.props.user.email,
      password: this.props.user.password
    })
  }

  render() {
    return (
      <div>
        {this.props.user.email} <br/>
        {this.props.user.password}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

// export default LoginForm;
export default connect(mapStateToProps, null)(Confirm);
