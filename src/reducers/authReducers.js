import * as actionTypes from '../constants/actionTypes'

const initialState = {
  user: {},
  loginError: null,
  signUpError: null,
  signUpSuccess: false,
  isLoading: false
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_SUCCESS:
      return {...state, user: action.user, signUpSuccess: true, signUpError: false, isLoading: false}
    case actionTypes.SIGN_UP_ERROR:
      return {...state, signUpError: action.error, isLoading: false}
    case actionTypes.LOGIN_SUCCESS:
      return {...state, user: {token: action.token}, loginError: false, isLoading: false }
    case actionTypes.LOGIN_ERROR:
      return {...state, loginError: action.error, isLoading: false}
    case actionTypes.LOG_OUT_SUCCESS:
      return {...state, user: {}, loginError: null, signUpError: null, isLoading: false}
    case actionTypes.CLEAR_FORM_ERRORS:
      return {...state, loginError: null, signUpError: null, signUpSuccess: false, isLoading: false}
    case actionTypes.LOADING_CONTENT:
      return {...state, isLoading: true }
    default:
      return state
  }
}