import * as actionTypes from '../constants/actionTypes'

const initialState = {
  showInputError: null,
  errorMessageFromServer: null,
  successMessageFromServer: null,
  isLoading: false
}

export const recoverPassword = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PASSWORD_RECOVERY_SUCCESS:
      return {...state, successMessageFromServer: action.message, errorMessageFromServer: null, showInputError: null, isLoading: false  }
    case actionTypes.PASSWORD_RECOVERY_ERROR:
      return {...state, errorMessageFromServer: action.error, showInputError: null, successMessageFromServer: null, isLoading: false }
    case actionTypes.PASSWORD_RECOVERY_INPUT_ERROR:
      return {...state, showInputError: action.inputError, errorMessageFromServer: null, successMessageFromServer: null, isLoading: false }
    case actionTypes.LOADING_PWD_RECOVERY_EMAIL:
      return {...state,  isLoading: true }
    default:
      return state
  }
}