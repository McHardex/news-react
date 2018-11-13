import * as actions from '../articleActionCreator'
import * as actionTypes from '../../constants/actionTypes'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios)

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

  // describe('asyn article actions', () => {
  //   afterEach(() => {
  //     mock.reset()
  //   })

  //   it('should dispatch get all articles action', () => {
  //     mock.onGet('https://mchardex.herokuapp.com/articles').reply(200, {
  //       articles: [
  //         {
  //           title: "when the river is blue",
  //           subheading: "we can never anticipate",
  //           leadParagraph: "the accidental call of joshua",
  //           body: "fight for me",
  //           imageUrl: "https://imageurl.com",
  //           article_id: 1,
  //           user_id: 3
  //         }
  //       ]
  //     });

  //     const expectedActions = [
  //       {
  //         type: actionTypes.FETCH_ARTICLES_SUCCESS,
  //         type: actionTypes.FETCH_ARTICLES_ERROR,
  //         articles:
  //         [
  //           {
  //             title: "when the river is blue",
  //             subheading: "we can never anticipate",
  //             leadParagraph: "the accidental call of joshua",
  //             body: "fight for me",
  //             imageUrl: "https://imageurl.com",
  //             article_id: 1,
  //             user_id: 3
  //           }
  //         ]
  //       }
  //     ];
  //     const store = mockStore({ data: [] })
  //     store.dispatch(actions.getArticles())
  //     .then(() => {
  //       expect(store.getActions()).toBe(expectedActions);
  //     })
  //   })
  // })
})