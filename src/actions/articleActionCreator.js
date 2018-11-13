import articleRequests from '../requests/articleRequests';
import * as actionTypes from '../constants/actionTypes';
import { strip } from '../lib/stringHelper'


export const getArticlesSuccess = (articles) => {
  return {
    type: actionTypes.FETCH_ARTICLES_SUCCESS,
    articles
  }
}

export const getArticlesError = (error) => {
  return {
    type: actionTypes.FETCH_ARTICLES_ERROR,
    error
  }
}

export const postArticleError = (error) => {
  return {
    type: actionTypes.POST_ARTICLE_ERROR,
    error
  }
}

export const deleteArticleError = (error) => {
  return {
    type: actionTypes.UNAUTHORIZED,
    error
  }
}

export const updateArticleError = (error) => {
  return {
    type: actionTypes.UPDATE_ARTICLE_ERROR,
    error
  }
}

export function getArticles() {
  return (dispatch) => {
    return (
      articleRequests.getArticles()
        .then(response => response.json())
        .then(res => {
          if(res.errors){
            dispatch(getArticlesError(strip(res.errors)))
          } else {
            dispatch(getArticlesSuccess(res.articles))
          }
        })
    )
  }
}

export function createArticle(articleData, accessToken, successCallback) {
  return (dispatch) => {
    return (
      articleRequests.postArticle(articleData, accessToken)
        .then(response => response.json())
        .then(res => {
          if(res.errors){
            dispatch(postArticleError(strip(res.errors)))
          } else {
            dispatch(getArticles())
            successCallback()
          }
        })
    )
  }
}

export function removeArticle(articleId, accessToken) {
  return (dispatch) => {
    return (
      articleRequests.deleteArticle(articleId, accessToken)
      .then(res => {
        if(res.statusText === 'Unauthorized'){
          dispatch(deleteArticleError(strip(res.statusText)))
        } else {
          dispatch(getArticles())
        }
      })
    )
  }
}

export function updateArticle(articleId, articleData, accessToken) {
  return (dispatch) => {
    return (
      articleRequests.editArticle(articleId, articleData, accessToken)
      .then(response => response.json())
      .then(res => {
        if(res.errors){
          dispatch(updateArticleError(strip(res.errors)))
        } else {
          dispatch(getArticles())
        }
      })
    )
  }
}