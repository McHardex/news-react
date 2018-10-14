import getApi from '../lib/api';

export default {
  // sign up
  createUser(userData) {
    return getApi('POST', 'https://mchnews.herokuapp.com/api/users', userData)
  },

  // login
  login(loginData, accessToken) {
    return getApi('POST', 'https://mchnews.herokuapp.com/api/auth', loginData, accessToken)
  }
}
