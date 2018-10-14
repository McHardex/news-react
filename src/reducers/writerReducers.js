import * as actionTypes from '../constants/actionTypes'

const initialState = {
  writers: [],
  writersError: null
}

export const writers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WRITERS_SUCCESS:
      return {...state, writers: action.writers}
    case actionTypes.FETCH_WRITERS_ERROR:
      return {...state, writersError: action.error }
    default:
      return state
  }
}