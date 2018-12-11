import getApi from '../lib/api';

export default {
  // forgot password request
  forgotPassword(userData) {
    return getApi('POST', 'https://mchnews.herokuapp.com/api/forgotPassword', userData)
  },

  // comfirm reset token
  confirmReqToken(token) {
    return getApi('GET', `https://mchnews.herokuapp.com/api/reset/${token}`)
  },

   // update password request
   updatePassword(userData, token) {
    return getApi('PUT', `https://mchnews.herokuapp.com/api/updatePasswordViaEmail/${token}`, userData, token)
  },
}
