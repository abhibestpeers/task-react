import { combineReducers } from "redux";
import { airportReducer, alertReducer } from "./reducers/index";

const rootReducer = combineReducers({
  ports: airportReducer,
  alert: alertReducer
});

export default rootReducer;
