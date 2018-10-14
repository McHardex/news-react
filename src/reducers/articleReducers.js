import * as actionTypes from '../constants/actionTypes'

const initialState = {
  articles: [],
  articlesError: null,
  postArticleSuccess: false,
  deleteArticleError: null,
  unauthorized: false
}

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return {...state, articles: action.articles, articlesError: null, unauthorized: false }
    case actionTypes.FETCH_ARTICLES_ERROR:
      return {...state, articlesError: action.error}
    case actionTypes.POST_ARTICLE_ERROR:
      return {...state, articlesError: action.error, unauthorized: false}
    case actionTypes.DELETE_ARTICLE_SUCCESS:
      return {...state, unauthorized: false}
    case actionTypes.UNAUTHORIZED:
      return {...state, deleteArticleError: action.error, unauthorized: true}
    case actionTypes.CLEAR_FORM_ERRORS:
      return {...state, articlesError: null, deleteArticleError: null, postArticleSuccess: false}
    default:
      return state
  }
}