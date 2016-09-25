export const signInUser = function(user) {
  return {
    type: 'SIGNIN',
    user
  }
}
