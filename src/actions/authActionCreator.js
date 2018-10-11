import userRequests from '../requests/requests';
import * as actionTypes from '../constants/actionTypes';
import { strip } from '../lib/stringHelper'

const signUpSuccess = (user) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    user
  }
}

const signUpError = (error) => {
  return {
    type: actionTypes.SIGN_UP_ERROR,
    error
  }
}

const loginSuccess = (token) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token
  }
}

const loginError = (error) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    error
  }
}

export function signUpUser(userDetails) {
  return (dispatch) => {
    return (
      userRequests.createUser(userDetails)
        .then(response => response.json())
        .then(res => {
          console.log(res)
          if(res.errors){
            dispatch(signUpError(strip(res.errors)))
          } else {
            dispatch(signUpSuccess(res.user))
          }
        })
    )
  }
}

export function loginUser(userDetails) {
  return (dispatch) => {
    return (
      userRequests.login(userDetails)
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

// export const editUser = () => {
//   return(dispatch) => {
//     return (
//       userRequests
//       .editUser()
//       .then(response => response.json())
//       .then(response => dispatch(editUserSuccess(response)))
//       .catch(err => console.log(error))
//     )
//   }
// }

// export const removeUser = () => {
//   return(dispatch) => {
//     return (
//       userRequests
//         .deleteUser()
//         .then(response => response.json())
//         .then(response => dispatch(deleteUserSuccess(response)))
//         .catch(err => console.log(error))
//     )
//   }
// }

