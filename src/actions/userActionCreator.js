import userRequests from '../requests/userRequests';
import * as actionTypes from '../constants/actionTypes';
import { strip } from '../lib/stringHelper'


export const getUsersSuccess = (users) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users
  }
}

export const getUsersError = (error) => {
  return {
    type: actionTypes.FETCH_USERS_ERROR,
    error
  }
}

export const getProfileSuccess = (user) => {
  return {
    type: actionTypes.FETCH_USER_PROFILE_SUCCESS,
    user
  }
}

export const getProfileError = (error) => {
  return {
    type: actionTypes.FETCH_USER_PROFILE_ERROR,
    error
  }
}

export const updateUserError = (error) => {
  return {
    type: actionTypes.UPDATE_USER_PROFILE_ERROR,
    error
  }
}

export const deleteUserSuccess = () => {
  return {
    type: actionTypes.DELETE_USER_SUCCESS,
  }
}

export const deleteUserError = (error) => {
  return {
    type: actionTypes.DELETE_USER_ERROR,
    error
  }
}

export const userLoading = () => {
  return {
    type: actionTypes.USER_LOADING
  }
}

export const loadingProfile = () => {
  return {
    type: actionTypes.USER_PROFILE_LOADING
  }
}

export const loadingProfileEdit = () => {
  return {
    type: actionTypes.USER_EDIT_PROFILE_LOADING
  }
}

export function getUsers() {
  return (dispatch) => {
    dispatch(userLoading())
    return (
      userRequests.getUsers()
        .then(response => response.json())
          .then(res => {
            if(res.errors){
              dispatch(getUsersError(strip(res.errors)))
            } else {
              dispatch(getUsersSuccess(res.users))
            }
          })
    )
  }
}

export function getUserProfile() {
  return (dispatch) => {
    dispatch(loadingProfile())
    const accessToken = JSON.parse(localStorage.getItem('user-token'))
    return (
      userRequests.getUserProfile(accessToken)
        .then(response => response.json())
          .then(res => {
            if(res.error){
              dispatch(getProfileError(strip(res.error)))
            } else {
              dispatch(getProfileSuccess(res.user))
            }
          })
    )
  }
}

export function updateUserProfile(userId, userData, accessToken, succesCallBack) {
  return (dispatch) => {
    dispatch(loadingProfileEdit())
    return (
      userRequests.editUser(userId, userData, accessToken)
        .then(response => response.json())
          .then(res => {
            if(res.errors){
              dispatch(updateUserError(strip(res.errors)))
            } else {
              dispatch(getUserProfile())
              succesCallBack()
            }
          })
    )
  }
}

export function deleteUser(userId, accessToken) {
  return (dispatch) => {
    return (
      userRequests.deleteUser(userId, accessToken)
        .then(res => {
          if(res.statusText === 'No Content'){
            dispatch(deleteUserError(strip(res.statusText)))
          } else {
            dispatch(deleteUserSuccess)
          }
        }
      )
    )
  }
}