import * as actionTypes from '../constants/actionTypes'

const initialState = {
  articles: [],
  articlesError: null,
  postArticleSuccess: false,
  deleteArticleError: null,
  updateArticleError: null,
  unauthorized: false,
  isLoading: false,
  isLoadingArticles: false
}

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return {...state, articles: action.articles, articlesError: null, isLoading: false, isLoadingArticles: false}
    case actionTypes.FETCH_ARTICLES_ERROR:
      return {...state, articlesError: action.error, isLoading: false, isLoadingArticles: false}
    case actionTypes.POST_ARTICLE_ERROR:
      return {...state, articlesError: action.error, isLoading: false}
    case actionTypes.UNAUTHORIZED:
      return {...state, deleteArticleError: action.error, unauthorized: true, isLoading: false }
    case actionTypes.CLEAR_FORM_ERRORS:
      return {...state, articlesError: null, deleteArticleError: null, postArticleSuccess: false, isLoading: false}
    case actionTypes.UPDATE_ARTICLE_ERROR:
      return {...state, updateArticleError: action.error, unauthorized: true, isLoading: false }
    case actionTypes.LOADING_CONTENT:
      return {...state, isLoading: true }
    case actionTypes.LOADING_ARTICLES:
      return {...state, isLoadingArticles: true }
    default:
      return state
  }
}