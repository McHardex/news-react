import * as actionTypes from '../constants/actionTypes'

const initialState = {
  users: [],
  userProfile: {},
  getUsersError: null,
  getUserProfileError: null,
  updateUserError: null,
  deleteUserError: null,
  userLoading: false,
  isLoadingProfile: false,
  isLoadingProfileEdit: false,
}

export const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
      return {...state, users: action.users, userLoading: false }
    case actionTypes.FETCH_USERS_ERROR:
      return {...state, getUsersError: action.error, userLoading: false }
    case actionTypes.FETCH_USER_PROFILE_SUCCESS:
      return {...state, userProfile: action.user, isLoadingProfile: false, isLoadingProfileEdit: false}
    case actionTypes.FETCH_USER_PROFILE_ERROR:
      return {...state, getUserProfileError: action.error, isLoadingProfile: false, isLoadingProfileEdit: false }
    case actionTypes.UPDATE_USER_PROFILE_ERROR:
      return {...state, updateUserError: action.error , isLoadingProfileEdit: false}
    case actionTypes.DELETE_USER_SUCCESS:
      return {...state }
    case actionTypes.DELETE_USER_ERROR:
      return {...state, deleteUserError: action.error }
    case actionTypes.USER_LOADING:
      return {...state, userLoading: true }
    case actionTypes.USER_PROFILE_LOADING:
      return {...state, isLoadingProfile: true }
    case actionTypes.USER_EDIT_PROFILE_LOADING:
      return {...state, isLoadingProfileEdit: true }
    default:
      return state
  }
}