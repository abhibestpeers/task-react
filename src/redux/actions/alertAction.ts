import { ActionTypes, AlertAction } from '../types/types';

export const setAlert = (message: string): AlertAction =>{
  return {
    type: ActionTypes.SET_ALERT,
    payload: message,  
  }
}