import * as actionTypes from '../../constants/actionTypes'
import {users} from '../userReducers'

describe('user reducers', () => {
  it('should return the initial states', () => {
    expect(users(undefined, {})).toEqual({
      users: [],
      userProfile: {},
      getUsersError: null,
      getUserProfileError: null,
      updateUserError: null,
      deleteUserError: null
    })
  })

  it('should handle FETCH_USERS_SUCCESS', () => {
    expect(users([], {
      type: actionTypes.FETCH_USERS_SUCCESS,
      users: [{id: 0, name: "abcdef"}]
    })).toEqual({
      users: [{id: 0, name: "abcdef"}]
    })
  })

  it('should handle DELETE_USER_SUCCESS', () => {
    expect(users([], {
      type: actionTypes.DELETE_USER_SUCCESS,
    })).toEqual({
    })
  })
})