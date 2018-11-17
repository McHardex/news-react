import authRequests from '../requests/authRequests';
import * as actionTypes from '../constants/actionTypes';
import { strip } from '../lib/stringHelper'

export const signUpSuccess = (user) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    user
  }
}

export const signUpError = (error) => {
  return {
    type: actionTypes.SIGN_UP_ERROR,
    error
  }
}

export const loginSuccess = (token) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token
  }
}

export const loginError = (error) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    error
  }
}

export const logOutSuccess = () => {
  return {
    type: actionTypes.LOG_OUT_SUCCESS
  }
}

export function signUpUser(userDetails, succesCallBack) {
  return (dispatch) => {
    return (
      authRequests.createUser(userDetails)
        .then(response => response.json())
        .then(res => {
          if(res.errors){
            dispatch(signUpError(strip(res.errors)))
          } else {
            dispatch(signUpSuccess(res.user))
            succesCallBack()
          }
        })
    )
  }
}

export function loginUser(userDetails) {
  return (dispatch) => {
    return (
      authRequests.login(userDetails)
        .then(response => response.json())
        .then(res => {
          if(res.errors){
            dispatch(loginError(strip(res.errors)))
          } else {
            localStorage.setItem('user-token', JSON.stringify(res.token));
            dispatch(loginSuccess(res.token))
          }
        })
    )
  }
}

export function logOutUser() {
  localStorage.removeItem('user-token');
  if (!localStorage.getItem('user-token')) window.location.hash = 'login' 
  return(dispatch) => {
    dispatch(logOutSuccess())
  }
}

