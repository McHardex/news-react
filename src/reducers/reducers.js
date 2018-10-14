import { combineReducers } from 'redux';
import { auth } from './authReducers';
import { articles } from './articleReducers';
import { users } from './userReducers';
import { writers } from './writerReducers';

const reducers = combineReducers({ auth, articles, users, writers })

export default reducers;