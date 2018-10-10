import articleRequests from '../requests/articleRequests';
import * as actionTypes from '../constants/actionTypes';
import { strip } from '../lib/stringHelper'

const getArticlesSuccess = (articles) => {
  return {
    type: actionTypes.FETCH_ARTICLES_SUCCESS,
    articles
  }
}

const getArticlesError = (error) => {
  return {
    type: actionTypes.FETCH_ARTICLES_ERROR,
    error
  }
}

export function getArticles() {
  return (dispatch) => {
    return (
      articleRequests.getArticles()
        .then(response => response.json())
        .then(res => {
          console.log(res)
          if(res.errors){
            dispatch(getArticlesError(strip(res.errors)))
          } else {
            dispatch(getArticlesSuccess(res.articles))
          }
        })
    )
  }
}


