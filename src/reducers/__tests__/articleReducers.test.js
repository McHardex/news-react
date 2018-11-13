import {articles} from '../articleReducers'
import * as actionTypes from '../../constants/actionTypes'

describe('Articles reducer', () => {
  it('should return the initial state', () => {
    expect(articles(undefined, {})).toEqual(
      {
        articles: [], 
        articlesError: null, 
        deleteArticleError: null, 
        postArticleSuccess: false, 
        unauthorized: false, 
        updateArticleError: null
      }
    )
  });

  it('should handle FETCH_ARTICLES_SUCCESS', () => {
    expect(articles([], {
      type: actionTypes.FETCH_ARTICLES_SUCCESS,
      articles: [{title: "abcdef"}]
    })).toEqual({
      articles: [{title: "abcdef"}], 
      articlesError: null
    })
  })

  it('should handle CLEAR_FORM_ERRORS', () => {
    expect(articles([], {
      type: actionTypes.CLEAR_FORM_ERRORS,
      articlesError: null
    })).toEqual({
      articlesError: null,
      deleteArticleError: null,
      postArticleSuccess: false
    })
  })
});