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

export function getUsers() {
  return (dispatch) => {
    return (
      userRequests.getUsers()
        .then(response => response.json())
        .then(res => {
          console.log(res)
          if(res.errors){
            dispatch(getUsersError(strip(res.errors)))
          } else {
            console.log('got here')
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
          console.log(res)
          if(res.error){
            dispatch(getProfileError(strip(res.error)))
          } else {
            dispatch(getProfileSuccess(res.user))
          }
        })
    )
  }
}
