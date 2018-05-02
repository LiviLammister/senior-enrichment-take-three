import campuses from './campuses';
import students from './students';
import { createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({ campuses, students });
console.log('reducer:', reducer)
// const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
// console.log('middleware: ', middleware)
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
)

export default store;
