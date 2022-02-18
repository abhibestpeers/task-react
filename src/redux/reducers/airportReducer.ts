import { SET_AIRPORTS } from "../type/airportTypes";

const initialState = {
  allAirports: [], 
};

export const airportReducer = (state = initialState, props: { type: string, payload: unknown[] }) => {
  switch (props.type) {
    case SET_AIRPORTS:
      return { ...state, allAirports: props.payload };     
    default:
      return state;    
}}; 

// export const loginReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case SET_LOGIN_FLAG:
//       return { ...state, isLoggedIn: payload };     
//     default:
//       return state;    
// }}; 
