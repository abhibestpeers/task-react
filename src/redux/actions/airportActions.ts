import { ThunkAction } from "redux-thunk";
import apiClient from "../../config/axios.config";
import { RootState } from "../store";
import { PortAction, PortData, PortError, ActionTypes } from "../types/types";

export const getAllAirports = (): ThunkAction<
  void,
  RootState,
  null,
  PortAction
> => {
  return async (dispatch) => {
    await apiClient
        .get("/airports")
        .then((response) => {
          const resData: PortData[] = response.data;
          dispatch({
            type: ActionTypes.GET_ALL_AIRPORTS,
            payload: resData,
          });
        })
        .catch((err) => {
          dispatch({
            type: ActionTypes.SET_ERROR,
            payload: err.message,
          });
        });
    } 
  };

export const getConnection = (
  portNumber: number
): ThunkAction<void, RootState, null, PortAction> => {
  return async (dispatch) => {
    await apiClient
        .get("/connections")
        .then((response) => {
          const resData: PortData = response.data;
          dispatch({
            type: ActionTypes.GET_CONNECTION,
            payload: resData,
          });
        })
        .catch((err) => {
          dispatch({
            type: ActionTypes.SET_ERROR,
            payload: err.message,
          });
        });
  };
};

export const setLoading = (): PortAction => {
  return {
    type: ActionTypes.SET_LOADING,
  };
};

export const setError = (): PortAction => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: "",
  };
};
