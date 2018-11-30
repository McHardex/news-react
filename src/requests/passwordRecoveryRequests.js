import getApi from '../lib/api';

export default {
  // forgot password email verification
  forgotPassword(userData) {
    return getApi('POST', 'http://localhost:5000/api/forgotPassword', userData)
  },
}
