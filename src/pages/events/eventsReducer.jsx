import InitialState from "../../modules/redux/InitialState";
import * as Types from "./eventsActionTypes";

const EventReducer = (state = InitialState.eventDetails, action) => {
  switch (action.type) {
    case Types.CREATE_EVENT:
      return {
        ...state,
        ...action.payload
      };
    case Types.GET_EVENTS:
      return {
        ...state,
        cedalEvents: action.payload
      };
    case Types.GET_EVENTS_FAILED:
      return {
        ...state,
        isEventsLoading: false,
        hasEvents: false,
        errorLoadingInformation: true
      }
    default:
      return state;
  }
};
export default EventReducer;
