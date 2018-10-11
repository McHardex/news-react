import * as actionTypes from '../constants/actionTypes'

const initialAuthState = {
  user: {},
  loginError: null,
  signUpError: null,
  signUpSuccess: false
}

export const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_SUCCESS:
      return {...state, user: action.user, signUpSuccess: true, signUpError: false}
    case actionTypes.SIGN_UP_ERROR:
      return {...state, signUpError: action.error}
    case actionTypes.LOGIN_SUCCESS:
      return {...state, user: {token: action.token}, loginError: false}
    case actionTypes.LOGIN_ERROR:
      return {...state, loginError: action.error}
    default:
      return state
  }
}