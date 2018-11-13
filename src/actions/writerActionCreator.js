import writerRequests from '../requests/writerRequests';
import * as actionTypes from '../constants/actionTypes';
import { strip } from '../lib/stringHelper'


export const getWritersSuccess = (writers) => {
  return {
    type: actionTypes.FETCH_WRITERS_SUCCESS,
    writers
  }
}

export const getWritersError = (error) => {
  return {
    type: actionTypes.FETCH_WRITERS_ERROR,
    error
  }
}

export function getWriters() {
  return (dispatch) => {
    return (
      writerRequests.getWriters()
        .then(response => response.json())
        .then(res => {
          if(res.errors){
            dispatch(getWritersError(strip(res.errors)))
          } else {
            dispatch(getWritersSuccess(res.writers))
          }
        })
    )
  }
}
