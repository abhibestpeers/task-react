import { SET_AIRPORTS } from "../type/airportTypes";

interface props {
  airports: unknown[];
}

export const setAirports = (airports: props) => ({
  type: SET_AIRPORTS,
  payload: airports
});

