import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import { loginReducer } from './reducer/loginReducer';
import {thunk} from 'redux-thunk';
import { logger } from 'redux-logger';
import {quizReducer} from './reducer/quizReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    quiz: quizReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk,logger));