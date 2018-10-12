import getApi from '../lib/api';

export default {
  // get all users
  getUsers() {
    return getApi('GET', 'https://mchnews.herokuapp.com/api/users')
  },

  // get personal data
  getSingleUsers() {
    return getApi('GET', 'https://mchnews.herokuapp.com/api/users/me')
  },
  
  // edit a user
  editUser(userId, accessToken) {
    return getApi('PUT', `https://mchnews.herokuapp.com/api/users${userId}`, {}, accessToken)
  },

  // delete a user
  deleteUser(userId, accessToken) {
    return getApi('DELETE', `https://mchnews.herokuapp.com/api/users${userId}`, {}, accessToken)
  }
}