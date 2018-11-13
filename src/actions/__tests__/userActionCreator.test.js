import * as actions from '../userActionCreator'
import * as actionTypes from '../../constants/actionTypes'

describe('user action creators', () => {
  describe('user action creators success and failure call', () => {
    it('should create an action to get users', () => {
      const users = {id: 0, name: "abcdef"}
      const expectedAction = {
        type: actionTypes.FETCH_USERS_SUCCESS,
        users
      }
      expect(actions.getUsersSuccess(users)).toEqual(expectedAction)
    })

    it('should create an action for error while fetching users', () => {
      const error = new Error('can not fetch users')
      const expectedAction = {
        type: actionTypes.FETCH_USERS_ERROR,
        error
      }
      expect(actions.getUsersError(error)).toEqual(expectedAction)
    })

    it('should create an action to get users profile', () => {
      const user = {id: 0, name: "abcdef"}
      const expectedAction = {
        type: actionTypes.FETCH_USER_PROFILE_SUCCESS,
        user
      }
      expect(actions.getProfileSuccess(user)).toEqual(expectedAction)
    })

    it('should create an action for error while fetching users', () => {
      const error = new Error('can not fetch user profile')
      const expectedAction = {
        type: actionTypes.FETCH_USER_PROFILE_ERROR,
        error
      }
      expect(actions.getProfileError(error)).toEqual(expectedAction)
    })
    
    it('should create an action for error while updating users', () => {
      const error = new Error('can not update user profile')
      const expectedAction = {
        type: actionTypes.UPDATE_USER_PROFILE_ERROR,
        error
      }
      expect(actions.updateUserError(error)).toEqual(expectedAction)
    })

    it('should create an action for user profile successfully deleted', () => {
      const expectedAction = {
        type: actionTypes.DELETE_USER_SUCCESS,
      }
      expect(actions.deleteUserSuccess()).toEqual(expectedAction)
    })

    it('should create an action for user profile unable to delete', () => {
      const error = new Error('can not delete user account')
      const expectedAction = {
        type: actionTypes.DELETE_USER_ERROR,
        error
      }
      expect(actions.deleteUserError(error)).toEqual(expectedAction)
    })
  })
});