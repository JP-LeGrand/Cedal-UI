import InitialState from "../../modules/redux/InitialState";
import * as Types from "./EventsActionTypes";

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
    default:
      return state;
  }
};
export default EventReducer;
