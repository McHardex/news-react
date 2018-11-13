import * as actions from '../articleActionCreator'
import * as actionTypes from '../../constants/actionTypes'

describe('article action creators', () => {
  describe('article action creators success and failure call', () => {
    it('should create an action to get articles', () => {
      const articles = {id: 0, title: "abcdef"}
      const expectedAction = {
        type: actionTypes.FETCH_ARTICLES_SUCCESS,
        articles
      }
      expect(actions.getArticlesSuccess(articles)).toEqual(expectedAction)
    })

    it('should create an action to show article fetch error', () => {
      const error = new Error('can not fetch article');
      const expectedAction = {
        type: actionTypes.FETCH_ARTICLES_ERROR,
        error
      }
      expect(actions.getArticlesError(error)).toEqual(expectedAction)
    })

    it('should create an action to post article error', () => {
      const error = new Error('can not post article');
      const expectedAction = {
        type: actionTypes.POST_ARTICLE_ERROR,
        error
      }
      expect(actions.postArticleError(error)).toEqual(expectedAction)
    })

    it('should create an action to delete article error', () => {
      const error = new Error('can not delete article');
      const expectedAction = {
        type: actionTypes.UNAUTHORIZED,
        error
      }
      expect(actions.deleteArticleError(error)).toEqual(expectedAction)
    })

    it('should create an action to update article error', () => {
      const error = new Error('can not update article');
      const expectedAction = {
        type: actionTypes.UPDATE_ARTICLE_ERROR,
        error
      }
      expect(actions.updateArticleError(error)).toEqual(expectedAction)
    })
  })
})