import * as actions from '../authActionCreator'
import * as actionTypes from '../../constants/actionTypes'

describe('auth action creators', () => {
  describe('auth action creators success and failure call', () => {
    it('should create an action for signup success', () => {
      const user = {id: 0, name: "abcdef"}
      const expectedAction = {
        type: actionTypes.SIGN_UP_SUCCESS,
        user
      }
      expect(actions.signUpSuccess(user)).toEqual(expectedAction)
    })

    it('should create an action for signup error', () => {
      const error = new Error('can not signUp user')
      const expectedAction = {
        type: actionTypes.SIGN_UP_ERROR,
        error
      }
      expect(actions.signUpError(error)).toEqual(expectedAction)
    })

    it('should create an action for login success', () => {
      const token = "1234567898765465"
      const expectedAction = {
        type: actionTypes.LOGIN_SUCCESS,
        token
      }
      expect(actions.loginSuccess(token)).toEqual(expectedAction)
    }) 

    it('should create an action for login success', () => {
      const error = new Error('can not log in user')
      const expectedAction = {
        type: actionTypes.LOGIN_ERROR,
        error
      }
      expect(actions.loginError(error)).toEqual(expectedAction)
    }) 

    it('should create an action to logout user', () => {
      const expectedAction = {
        type: actionTypes.LOG_OUT_SUCCESS,
      }
      expect(actions.logOutSuccess()).toEqual(expectedAction)
    }) 
  })
})