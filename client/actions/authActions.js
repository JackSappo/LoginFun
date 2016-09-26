export const signInUser = function(user) {
  console.log('returning action');
  console.log('action user is', user);
  return {
    type: 'SIGNIN',
    user
  }
}
