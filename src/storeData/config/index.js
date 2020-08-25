import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import apiReducer from '../reducerCombine';
import thunk from 'redux-thunk';
const logger = createLogger();
let middleware = [];
middleware = [...middleware,thunk, logger];
export default createStore(
    apiReducer,
    compose(applyMiddleware(...middleware))
);