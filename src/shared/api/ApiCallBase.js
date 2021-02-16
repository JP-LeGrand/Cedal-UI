import Axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import history from "../../history";
import * as types from "../../pages/home/HomeActionTypes";

let cancelToken = Axios.CancelToken;
let source = cancelToken.source();
let axiosConfig = {
  withCredentials: false,
  cancelToken: source.token,
};

export function cancelRequests(msg) {
  source.cancel(msg);
  cancelToken = Axios.CancelToken;
  source = cancelToken.source();
  axiosConfig.cancelToken = source.token;
}

export function get(url, dispatch) {
  startLoader(dispatch);
  const promise = Axios.get(url, axiosConfig);

  promise.then(
    () => {
      stopLoader(dispatch);
    },
    (error) => {
      stopLoader(dispatch);

      if (dispatch && error.response && error.response.status === 401) {
        handleSessionExpired(dispatch);
      }
    }
  );

  return promise.then(
    (result) => {
      return result;
    },
    (error) => {
      return error;
    }
  );
}

export function post(url, params, dispatch) {
  startLoader(dispatch);
  const promise = Axios.post(url, params, axiosConfig);

  promise.then(
    () => {
      stopLoader(dispatch);
    },
    (error) => {
      stopLoader(dispatch);

      if (
        dispatch &&
        error &&
        error.response &&
        error.response.status === 401
      ) {
        handleSessionExpired(dispatch);
      }
    }
  );

  return promise;
}

function startLoader(dispatch) {
  if (dispatch) {
    dispatch(showLoading());
  }
}

function stopLoader(dispatch) {
  if (dispatch) {
    dispatch(hideLoading());
  }
}

function handleSessionExpired(dispatch) {
  dispatch({ type: types.LOGON_VERIFY_USER_AUTHENTICATED_STATUS_ERROR });
  setTimeout(() => {
    history.push("/");
  }, 0);
}
