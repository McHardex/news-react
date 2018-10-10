import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';

export default createStore(
  reducers,
  compose(applyMiddleware(thunk))
)