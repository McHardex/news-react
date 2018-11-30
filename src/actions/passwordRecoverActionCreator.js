import pwdRecoveryRequest from '../requests/passwordRecoveryRequests';
import * as actionTypes from '../constants/actionTypes';
import { strip } from '../lib/stringHelper'

export const forgotPasswordSuccess = (message) => {
  return {
    type: actionTypes.PASSWORD_RECOVERY_SUCCESS,
    message
  }
}

export const forgotPasswordError = (error) => {
  return {
    type: actionTypes.PASSWORD_RECOVERY_ERROR,
    error
  }
}

export const forgotPasswordinputError = (inputError) => {
  return {
    type: actionTypes.PASSWORD_RECOVERY_INPUT_ERROR,
    inputError
  }
}

export const loading = () => {
  return {
    type: actionTypes.LOADING_PWD_RECOVERY_EMAIL,
  }
}

export function forgotPassword(userDetails, successCallback) {
  return (dispatch) => {
    dispatch(loading())
    return (
      pwdRecoveryRequest.forgotPassword(userDetails)
        .then(response => response.json())
        .then(res => {
          if(res.error){
            dispatch(forgotPasswordError(res.error))
          } else if(res.inputError) {
            dispatch(forgotPasswordinputError(strip(res.inputError)))
          } else {
            dispatch(forgotPasswordSuccess(res.message))
            successCallback()
          }
        })
    )
  }
}