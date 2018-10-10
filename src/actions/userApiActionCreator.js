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

export function signUpUser(userDetails) {
  return (dispatch) => {
    return (
      userRequests.createUser(userDetails)
        .then(response => response.json())
        .then(res => {
          if(res.status !== 200 ){
            dispatch(signUpError(strip(res.error)))
          } else {
            dispatch(signUpSuccess(res.user))
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

