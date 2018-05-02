import { combineReducers } from 'redux';

import campuses from './campuses';
import students from './students';
import { logger } from 'redux-logger'
import { createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({ campuses, students });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))

const store = createStore(
  reducer,
  middleware
)

export default store;

