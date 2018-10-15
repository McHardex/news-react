import userRequests from '../requests/userRequests';
import * as actionTypes from '../constants/actionTypes';
import { strip } from '../lib/stringHelper'


const getUsersSuccess = (users) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users
  }
}

const getUsersError = (error) => {
  return {
    type: actionTypes.FETCH_USERS_ERROR,
    error
  }
}

const getProfileSuccess = (user) => {
  return {
    type: actionTypes.FETCH_USER_PROFILE_SUCCESS,
    user
  }
}

const getProfileError = (error) => {
  return {
    type: actionTypes.FETCH_USER_PROFILE_ERROR,
    error
  }
}

const updateUserError = (error) => {
  return {
    type: actionTypes.UPDATE_USER_PROFILE_ERROR,
    error
  }
}

const deleteUserSuccess = () => {
  return {
    type: actionTypes.DELETE_USER_SUCCESS,
  }
}

const deleteUserError = (error) => {
  return {
    type: actionTypes.DELETE_USER_ERROR,
    error
  }
}

export function getUsers() {
  return (dispatch) => {
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

export function updateUserProfile(userId, userData, accessToken) {
  return (dispatch) => {
    return (
      userRequests.editUser(userId, userData, accessToken)
        .then(response => response.json())
          .then(res => {
            if(res.errors){
              dispatch(updateUserError(strip(res.errors)))
            } else {
              dispatch(getUserProfile())
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
              console.log('got here')
              dispatch(deleteUserSuccess)
            }
          })
    )
  }
}