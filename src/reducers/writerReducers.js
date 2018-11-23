import * as actionTypes from '../constants/actionTypes'

const initialState = {
  writers: [],
  writersError: null,
  isLoadingWriter: false
}

export const writers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WRITERS_SUCCESS:
      return {...state, writers: action.writers, isLoadingWriter: false}
    case actionTypes.FETCH_WRITERS_ERROR:
      return {...state, writersError: action.error, isLoadingWriter: false}
    case actionTypes.WRITERS_LOADING:
      return {...state, isLoadingWriter: true }
    default:
      return state
  }
}