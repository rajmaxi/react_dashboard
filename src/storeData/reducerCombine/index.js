import { combineReducers } from 'redux';
import logReducer from '../../reducerCombine/log'
const rootreducer = combineReducers({
    log: logReducer,
  
});
export default rootreducer;