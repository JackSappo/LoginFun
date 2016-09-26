const user = function(state = [], action) {
  switch(action.type) {
    case 'SIGNIN':
      console.log('reducer triggered');
      return Object.assign({}, state);
      // return {...state}


    default:
      return state;
  }
}

export default user;
