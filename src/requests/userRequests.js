import getApi from '../lib/api';

export default {
  // get all users
  getUsers() {
    return getApi('GET', 'https://mchnews.herokuapp.com/api/users')
  },

  // get personal data
  getUserProfile(accessToken) {
    return getApi('GET', 'https://mchnews.herokuapp.com/api/users/me', {}, accessToken)
  },
  
  // edit a user
  editUser(userId, userData, accessToken) {
    return getApi('PUT', `https://mchnews.herokuapp.com/api/users/${userId}`, userData, accessToken)
  },

  // delete a user
  deleteUser(userId, accessToken) {
    return getApi('DELETE', `https://mchnews.herokuapp.com/api/users${userId}`, {}, accessToken)
  }
}