import articleRequests from '../requests/articleRequests';
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

export function getArticles(userDetails) {
  return (dispatch) => {
    return (
      articleRequests.getArticles(userDetails)
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


