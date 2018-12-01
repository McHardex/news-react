import getApi from '../lib/api';

export default {
  // get all articles
  getArticles() {
    return getApi('GET', 'https://mchnews.herokuapp.com/api/articles')
  },

  // get a single article
   getSingleArticle(articleId, accessToken) {
    return getApi('GET', `https://mchnews.herokuapp.com/api/articles$/${articleId}`, {}, accessToken)
  },

  // post an article
  postArticle(articleData, accessToken) {
    return getApi('POST', `http://localhost:5000/api/articles`, articleData, accessToken)
  },

  // edit an article
  editArticle(articleId, articleData, accessToken) {
    return getApi('PUT', `https://mchnews.herokuapp.com/api/articles/${articleId}`, articleData, accessToken)
  },
  
  // delete an article
  deleteArticle(articleId, accessToken) {
    return getApi('DELETE', `https://mchnews.herokuapp.com/api/articles/${articleId}`, {}, accessToken)
  }
}