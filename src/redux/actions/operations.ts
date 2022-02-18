import apiClient from '../../config/axios.config';
import actions from '../actions'

export const fetchAllPorts = (ports) => (dispatch) => {
  return apiClient
    .get(ports)
    .then((res) => {
      if (res && res.data) {
        return { success: true, data: res.data };
      } else {
        dispatch(actions.setForgotPasswordError(res.message));
      }
    })
    .catch((error) => {
      dispatch(actions.setForgotPasswordError(error));
      setTimeout(() => {
        dispatch(actions.setForgotPasswordError(null));
      }, 5000);
      console.log("Forgot Password error", error);
    });
};