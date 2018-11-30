import { combineReducers } from 'redux';
import { auth } from './authReducers';
import { articles } from './articleReducers';
import { users } from './userReducers';
import { writers } from './writerReducers';
import { recoverPassword } from './passwordRecoveryReducers';

const reducers = combineReducers({ auth, articles, users, writers, recoverPassword })

export default reducers;