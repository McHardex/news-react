import getApi from '../lib/api';

export default {
  // forgot password request
  forgotPassword(userData) {
    return getApi('POST', 'http://localhost:5000/api/forgotPassword', userData)
  },

  // comfirm reset token
  confirmReqToken(token) {
    return getApi('GET', `http://localhost:5000/api/reset/${token}`)
  },

   // update password request
   updatePassword(userData, token) {
    return getApi('PUT', `http://localhost:5000/api/updatePasswordViaEmail/${token}`, userData, token)
  },
}
