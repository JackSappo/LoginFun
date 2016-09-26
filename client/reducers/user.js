const user = function(state = [], action) {
  switch(action.type) {
    case 'SIGNIN':
      console.log('reducer triggered');
      console.log('action.user', action.user);
      // return Object.assign({}, state);
      return Object.assign({}, state, action.user);
      // console.log('state', ...state);
      // return {...state}


    default:
      return state;
  }
}

export default user;
