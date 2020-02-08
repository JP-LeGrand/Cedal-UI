import * as types from "./eventsActionTypes";
import Axios from "axios";

const config = {
  headers: {
    "content-type": "application/json"
  }
};

export function getEvents() {
  return async function(dispatch) {
    await Axios.get(
      "https://localhost:44353/api/Events/AllEvents",
      config
    ).then(response => {
      dispatch({
        type: types.GET_EVENTS,
        payload: response.data
      });
    });
  };
}

export function createEvent(eventInformation) {
  return async function(dispatch) {
    await Axios.post(
      "https://localhost:44353/api/Events/CreateEvent",
      eventInformation,
      config
    ).then(response => {
      dispatch({
        type: types.CREATE_EVENT,
        payload: response.statusText
      });
    });
  };
}
