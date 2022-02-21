import { AlertState, AlertAction, ActionTypes } from "../types/types";

const initialState: AlertState = {
  message: ""
}

export const alertReducer = (
  state: AlertState = initialState,
  action: AlertAction
) => {
  switch(action.type) {
    case ActionTypes.SET_ALERT:
      return{
        message: action.message
      }
    default:
      return state
  }
}