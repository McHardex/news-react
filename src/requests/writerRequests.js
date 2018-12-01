import getApi from '../lib/api'

export default {
  // get all writers
  getWriters() {
    return getApi('GET', 'http://localhost:5000/api/writers')
  },

  // get a singe writer
  getSingleWriters(writerId) {
    return getApi('GET', `http://localhost:5000/api/writers/${writerId}`)
  }
}