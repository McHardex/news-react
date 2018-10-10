import getApi from '../lib/api';

export default {
  // login
  login(loginData, accessToken) {
    return getApi('POST', 'https://mchnews.herokuapp.com/api/auth', loginData, accessToken)
  },

  // sign up
  createUser(userData) {
    return getApi('POST', 'https://mchnews.herokuapp.com/api/users', userData)
  }
}
