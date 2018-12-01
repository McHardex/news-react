import getApi from '../lib/api';

export default {
  // get all articles
  getArticles() {
    return getApi('GET', 'http://localhost:5000/api/articles')
  },

  // get a single article
   getSingleArticle(articleId, accessToken) {
    return getApi('GET', `http://localhost:5000/api/articles$/${articleId}`, {}, accessToken)
  },

  // post an article
  postArticle(articleData, accessToken) {
    return getApi('POST', `http://localhost:5000/api/articles`, articleData, accessToken)
  },

  // edit an article
  editArticle(articleId, articleData, accessToken) {
    return getApi('PUT', `http://localhost:5000/api/articles/${articleId}`, articleData, accessToken)
  },
  
  // delete an article
  deleteArticle(articleId, accessToken) {
    return getApi('DELETE', `http://localhost:5000/api/articles/${articleId}`, {}, accessToken)
  }
}