var axios = require('axios');

export const signInUser = function(user) {
  console.log('returning action');
  console.log('action user is', user);

  axios.post('/api/login', {
    email: user.email,
    password: user.password
  })
  .then(function (response) {
    console.log('response received');
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: 'SIGNIN',
    user
  }
}
