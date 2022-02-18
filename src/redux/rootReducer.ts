import { combineReducers } from 'redux';
import { airportReducer } from './reducers';

const rootReducer = combineReducers({    
  airportReducer,
});

export default rootReducer;