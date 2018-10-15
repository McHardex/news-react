import * as actionTypes from '../constants/actionTypes'

const initialState = {
  users: [],
  userProfile: {},
  getUsersError: null,
  getUserProfileError: null
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
    case actionTypes.FETCH_USER_PROFILE_SUCCESS:
      return {...state, userProfile: action.user}
    case actionTypes.FETCH_USER_PROFILE_ERROR:
      return {...state, getUserProfileError: action.error}
    default:
      return state
  }
}