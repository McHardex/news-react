import getApi from '../lib/api';

export default {
  // sign up
  createUser(userData) {
    return getApi('POST', 'http://localhost:5000/api/users', userData)
  },

  // login
  login(loginData, accessToken) {
    return getApi('POST', 'http://localhost:5000/api/auth', loginData, accessToken)
  }
}
