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

export const confirmTokenSuccess = (message) => {
  return {
    type: actionTypes.CONFIRM_PASSWORD_REQUEST_TOKEN_SUCCESS,
    message
  }
}

export const confirmTokenError = (error) => {
  return {
    type: actionTypes.CONFIRM_PASSWORD_REQUEST_TOKEN_ERROR,
    error
  }
}

export const updatePasswordSuccess = (message) => {
  return {
    type: actionTypes.UPDATE_PASSWORD_SUCCESS,
    message
  }
}

export const updatePasswordError = (error) => {
  return {
    type: actionTypes.UPDATE_PASSWORD_ERROR,
    error
  }
}

export const loadingPasswordUpdate = () => {
  return {
    type: actionTypes.LOADING_PASSWORD_UPDATE,
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

export function confirmReqToken(token) {
  return (dispatch) => {
    return (
      pwdRecoveryRequest.confirmReqToken(token)
        .then(response => response.json())
        .then(res => {
          if(res.error){
            dispatch(confirmTokenError(res.error))
          } else {
            dispatch(confirmTokenSuccess(res.message))
          }
        })
    )
  }
}


export function updatePassword(userData, token) {
  return (dispatch) => {
    dispatch(loadingPasswordUpdate())
    return (
      pwdRecoveryRequest.updatePassword(userData, token)
        .then(response => response.json())
        .then(res => {
          if(res.error){
            dispatch(updatePasswordError(strip(res.error)))
          } else {
            dispatch(updatePasswordSuccess(res.message))
          }
        })
    )
  }
}