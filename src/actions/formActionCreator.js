import * as actionTypes from '../constants/actionTypes'

export function clearFormErrors() {
  return (dispatch) => {
    return (
      dispatch({type: actionTypes.CLEAR_FORM_ERRORS})
    )
  }
}