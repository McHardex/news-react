import * as actionTypes from '../../constants/actionTypes'
import { writers } from '../writerReducers'

describe('writers reducers', () => {
  it('should return the initial states', () => {
    expect(writers(undefined, {})).toEqual({
      writers: [],
      writersError: null
    })
  }) 

  it('should handle FETCH_WRITERS_SUCCESS', () => {
    expect(writers([], {
      type: actionTypes.FETCH_WRITERS_SUCCESS,
      writers: [{article: "when the loner comers", articleCount: 2}]
    })).toEqual({
      writers: [{article: "when the loner comers", articleCount: 2}]
    })
  })
});