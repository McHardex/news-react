import loginRequest from '../requests/requests';
import * as actionTypes from '../constants/actionTypes';


export const loginUser = (loginData) => {
  return(dispatch) => {
    return (
      loginRequest.login(loginData)
        .then(response => JSON.stringify(response))
        .then(response => dispatch(loginSuccess(response)))
        .catch(err => console.log(err))
    )
  }
}


const loginSuccess = (result) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    articles: result
  }
}

const loginError = (result) => {
  return {
    type: actionTypes.SIGN_UP_ERROR,
    articles: result
  }
}