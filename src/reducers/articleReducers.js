import * as actionTypes from '../constants/actionTypes'

const initialAuthState = {
  articles: {},
  articlesError: null
}

export const articles = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return {...state, articles: action.articles}
    case actionTypes.FETCH_ARTICLES_ERROR:
      return {...state, articlesError: action.error}
    default:
      return state
  }
}