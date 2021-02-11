import * as ApiCallsBase from "./ApiCallBase";

const apiUrl = () => {
  let url = "";
  if (window.origin === "http://localhost:3000") {
    url = `https://localhost:44353/api/`;
  } else {
    url = `https://cedal-backend20200623204421.azurewebsites.net/api/`;
  }
  return url;
};

export function getApiUrl() {
  return `${apiUrl()}`;
}

export function get(uri, dispatch) {
  const url = `${apiUrl()}${uri}`;
  return ApiCallsBase.get(url, dispatch);
}

export function post(uri, params, dispatch) {
  const url = `${apiUrl()}${uri}`;
  return ApiCallsBase.post(url, params, dispatch);
}
