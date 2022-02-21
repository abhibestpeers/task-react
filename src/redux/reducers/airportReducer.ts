 import { PortState, PortAction, ActionTypes } from '../types/types';

 const initialState: PortState = {
   data: null,
   loading: false,
   error: '',
 }

 export const airportReducer = (
  state: PortState = initialState,
  action: PortAction
) =>{ 
  switch (action.type){
    case ActionTypes.GET_ALL_AIRPORTS:
      console.log(action)
      return {
        data: action.payload ,
        loading:false,
        error: '',
      }
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: 
    return state;
  }
}






























// import { ActionType } from "../types/actionTypes";
// import { Action, payload } from "../actions/index";

// interface portState {
//   allAirports: payload[];
// }

// const initialState = {
//   allAirports: [],
// };

// export const airportReducer = (
//   state: portState = initialState,
//   action: Action
// ) => {
//   switch (action.type) {
//     case ActionType.SET_ALL_AIRPORTS:
//       return { ...state, allAirports: action.payload };
//     case ActionType.SET_AIRPORT:
//       return { ...state, airport: action.payload };
//     default:
//       return state;
//   }
// };
