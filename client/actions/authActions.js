export const signInUser = function(user) {
  console.log('returning action');
  return {
    type: 'SIGNIN',
    user
  }
}
