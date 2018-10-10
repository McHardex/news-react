import * as actionTypes from '../constants/actionTypes'

const initialAuthState = {
  user: {},
  loginSuccess: null,
  loginError: null,
  signUpSuccess: null,
  signUpError: null
}

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_SUCCESS:
      return {...state, user: action.user}
    case actionTypes.SIGN_UP_ERROR:
      return {...state, signUpError: action.error}
    case actionTypes.LOGIN_SUCCESS:
      return {...state, loginSuccess: action.user}
    case actionTypes.LOGIN_ERROR:
      return {...state, loginError: action.error}
    default:
      return state
  }
}