import * as actionTypes from '../constants/actionTypes'

const initialState = {
  users: [],
  getUsersError: null
  // articlesError: null,
  // postArticleSuccess: false,
  // deleteArticleError: null
}

export const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
      return {...state, users: action.users}
    case actionTypes.FETCH_USERS_ERROR:
      return {...state, getUsersError: action.error}
    default:
      return state
  }
}