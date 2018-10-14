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
