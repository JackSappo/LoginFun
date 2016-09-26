import React from 'react';
import { connect } from 'react-redux';

// import signInUser from '../actions/authActions.js';
import Main from './Main';


  // NON-REDUX
// class App extends React.Component {
//   constructor() {
//     super();
//   }
//
//   render() {
//     return (
//       <div>
//         <Main/>
//       </div>
//     )
//   }
// }

  //CONNECT AND PASS DOWN FROM MAIN
// function mapStateToProps(state) {
//   return {
//     email: state.email,
//     password: state.password,
//     user: state.user
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     signInUser: () => {
//       dispatch(signInUser())
//     }
//   }
// }
//
// const App = connect(mapStateToProps, mapDispatchToProps)(Main);
//
// export default App;

  //RELY ON SUBCOMPONENTS TO CONNECT
export default Main;
