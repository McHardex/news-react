import * as actionTypes from '../../constants/actionTypes'
import * as action from '../writerActionCreator'

describe('writers actions', () => {
  describe('writers actions success and failure call', () => {
    it('should create an action that gets all writers successfully', () => {
      const writers = {id: 0, name: "abcdef"}
      const expectedAction = {
        type: actionTypes.FETCH_WRITERS_SUCCESS,
        writers
      }
      expect(action.getWritersSuccess(writers)).toEqual(expectedAction)
    })

    it('should create an action for failure fetching writers', () => {
      const error = new Error('can not fetch writers')
      const expectedAction = {
        type: actionTypes.FETCH_WRITERS_ERROR,
        error
      }
      expect(action.getWritersError(error)).toEqual(expectedAction)
    })
  })
})