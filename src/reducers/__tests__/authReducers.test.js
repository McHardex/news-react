import * as actionTypes from '../../constants/actionTypes'
import {auth} from '../authReducers'

describe('auth reducers', () => {
  it('should return the initial states', ()=> {
    expect(auth(undefined, {})).toEqual({
      user: {},
      loginError: null,
      signUpError: null,
      signUpSuccess: false,
      deleteArticleError: null
    })
  })

  it('should handle SIGN_UP_SUCCESS', () => {
    expect(auth([], {
      type: actionTypes.SIGN_UP_SUCCESS,
      user: {name: "abcdef", password: "mchardex"}
    })).toEqual({
      user: {name: "abcdef", password: "mchardex"}, 
      signUpSuccess: true, 
      signUpError: false
    })
  })

  it('should handle LOGIN_SUCCESS', () => {
    expect(auth([], {
      type: actionTypes.LOGIN_SUCCESS,
      user: {token: undefined}
    })).toEqual({
      user: {token: undefined},
      loginError: false
    })
  })

  it('should handle LOG_OUT_SUCCESS', () => {
    expect(auth([], {
      type: actionTypes.LOG_OUT_SUCCESS,
      user: {}
    })).toEqual({
      user: {},
      loginError: null,
      signUpError: null
    })
  })

  it('should clear form errors', () => {
    expect(auth([], {
      type: actionTypes.CLEAR_FORM_ERRORS,
      loginError: null, 
      signUpError: null, 
      signUpSuccess: false
    })).toEqual({
      loginError: null, 
      signUpError: null, 
      signUpSuccess: false
    })
  })
});