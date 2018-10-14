import * as actionTypes from '../constants/actionTypes'

const initialState = {
  articles: [],
  articlesError: null,
  postArticleSuccess: false,
  deleteArticleError: null,
  // unauthorized: false,
  updateArticleError: null,
}

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return {...state, articles: action.articles, articlesError: null }
    case actionTypes.FETCH_ARTICLES_ERROR:
      return {...state, articlesError: action.error}
    case actionTypes.POST_ARTICLE_ERROR:
      return {...state, articlesError: action.error}
    case actionTypes.DELETE_ARTICLE_SUCCESS:
      return {...state }
    case actionTypes.UNAUTHORIZED:
      return {...state, deleteArticleError: action.error }
    case actionTypes.CLEAR_FORM_ERRORS:
      return {...state, articlesError: null, deleteArticleError: null, postArticleSuccess: false}
    case actionTypes.UPDATE_ARTICLE_SUCCESS:
      return {...state }
    case actionTypes.UPDATE_ARTICLE_ERROR:
      return {...state, updateArticleError: action.error }
    default:
      return state
  }
}