import getApi from '../lib/api'

export default {
  // get all writers
  getWriters() {
    return getApi('GET', 'https://mchnews.herokuapp.com/api/writers')
  },

  // get a singe writer
  getSingleWriters(writerId, accessToken) {
    return getApi('GET', `https://mchnews.herokuapp.com/api/writers/${writerId}`)
  }
}