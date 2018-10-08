import * as articleRequests from '../requests/requests';
import * as actionTypes from '../constants/actionTypes';

export const fetchArticles = () => {
  return(dispatch) => {
    return (
      articleRequests
        .getArticles()
        .then(response => response.json())
        .then(response => dispatch(fetchArticleSuccess(response)))
        .catch(err => console.log(error))
    )
  }
}

export const fetchSingleArticles = (id) => {
  return(dispatch) => {
    return (
      articleRequests
        .getSingleArticle(id)
        .then(response => response.json())
        .then(response => dispatch(fetchSingleArticleSuccess(response)))
        .catch(err => console.log(error))
    )
  }
}

export const createArticle = () => {
  return(dispatch) => {
    return (
      articleRequests
      .postArticle()
      .then(response => response.json())
      .then(response => dispatch(createArticleSuccess(response)))
      .catch(err => console.log(error))
    )
  }
}

export const editArticles = () => {
  return(dispatch) => {
    return (
      articleRequests
      .editArticle()
      .then(response => response.json())
      .then(response => dispatch(editArticleSuccess(response)))
      .catch(err => console.log(error))
    )
  }
}

export const removeArticles = () => {
  return(dispatch) => {
    return (
      articleRequests
      .deleteArticle()
      .then(response => response.json())
      .then(response => dispatch(deleteArticleSuccess(response)))
      .catch(err => console.log(error))
    )
  }
}

const fetchArticleSuccess = (result) => {
  return {
    type: actionTypes.FETCH_ARTICLES_SUCCESS,
    articles: result
  }
}

const fetchArticleError = (result) => {
  return {
    type: actionTypes.FETCH_ARTICLES_ERROR,
    articles: result
  }
}

const fetchSingleArticleSuccess = (result) => {
  return {
    type: actionTypes.FETCH_SINGLE_ARTICLES_SUCCESS,
    articles: result
  }
}

const fetchSingleArticleError = (result) => {
  return {
    type: actionTypes.FETCH_SINGLE_ARTICLES_ERROR,
    articles: result
  }
}