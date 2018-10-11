import * as actionTypes from '../constants/actionTypes'

export function clearFormErrors(accessToken) {
  return (dispatch) => {
    return (
      dispatch({type: actionTypes.CLEAR_FORM_ERRORS})
    )
  }
}