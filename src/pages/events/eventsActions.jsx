import * as types from "./eventsActionTypes";
import * as eventsApi from "./evenetsApi";
import Axios from "axios";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export function getEvents() {
  return function (dispatch) {
    return eventsApi
      .GetEvents(dispatch)
      .then((response) => {
        if (response.request.status !== 200 || !response.data) {
          throw "Error retrieving events";
        }
        dispatch({
          type: types.GET_EVENTS,
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch({
          type: types.GET_EVENTS_FAILED,
        });
      });
  };
}

export function createEvent(eventInformation) {
  return async function (dispatch) {
    await Axios.post(
      "https://localhost:44353/api/Events/CreateEvent",
      eventInformation,
      config
    ).then((response) => {
      dispatch({
        type: types.CREATE_EVENT,
        payload: response.statusText,
      });
    });
  };
}
