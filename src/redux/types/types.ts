
export enum ActionTypes { 
   GET_ALL_AIRPORTS = "GET_ALL_AIRPORTS",
  GET_CONNECTION = "GET_CONNECTION",
   SEARCH_CONNECTION= "SEARCH_CONNECTION",
   SET_LOADING = "SET_LOADING",
   SET_ERROR = "SET_ERROR",
  SET_ALERT = "SET_ALERT",
}


export type Iimages = {
  thumb: string;
  small: string;
  full: string;
}

export interface PortData {
  averageRating: number;
  code: string;
  country: string;
  id: number;
  images: Iimages;
  name: string;
}

export interface PortError {
  message: string;
}

export interface PortState {
  data: PortData[] | null,
  loading: boolean,
  error: string,
}

export interface AlertState {
  message: string;
}

interface GetPortsAction {
  type: typeof ActionTypes.GET_ALL_AIRPORTS;
  payload: PortData[];
}

interface SetLoadingAction {
  type: typeof ActionTypes.SET_LOADING
}

interface SetErrorAction {
  type: typeof ActionTypes.SET_ERROR
  payload: string
}

interface GetConnectionAction {
  type: typeof ActionTypes.GET_CONNECTION;
  payload: PortData;
}

export interface AlertAction {
  type: typeof ActionTypes.SET_ALERT
  message: string;
}

export type PortAction = GetPortsAction | SetLoadingAction | SetErrorAction | GetConnectionAction
