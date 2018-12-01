import getApi from '../lib/api';

export default {
  // get all users
  getUsers() {
    return getApi('GET', 'http://localhost:5000/api/users')
  },

  // get personal data
  getUserProfile(accessToken) {
    return getApi('GET', 'http://localhost:5000/api/users/me', {}, accessToken)
  },
  
  // edit a user
  editUser(userId, userData, accessToken) {
    return getApi('PUT', `http://localhost:5000/api/users/${userId}`, userData, accessToken)
  },

  // delete a user
  deleteUser(userId, accessToken) {
    return getApi('DELETE', `http://localhost:5000/api/users/${userId}`, {}, accessToken)
  }
}