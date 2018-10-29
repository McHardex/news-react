import * as actionTypes from '../constants/actionTypes'

const initialState = {
  articles: [],
  articlesError: null,
  postArticleSuccess: false,
  deleteArticleError: null,
  updateArticleError: null,
  authorized: false
}

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return {...state, articles: action.articles, articlesError: null}
    case actionTypes.FETCH_ARTICLES_ERROR:
      return {...state, articlesError: action.error}
    case actionTypes.POST_ARTICLE_ERROR:
      return {...state, articlesError: action.error}
    case actionTypes.UNAUTHORIZED:
      return {...state, deleteArticleError: action.error, authorized: true }
    case actionTypes.CLEAR_FORM_ERRORS:
      return {...state, articlesError: null, deleteArticleError: null, postArticleSuccess: false}
    case actionTypes.UPDATE_ARTICLE_ERROR:
      return {...state, updateArticleError: action.error, authorized: true }
    default:
      return state
  }
}