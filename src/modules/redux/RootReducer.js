import HomeReducer from "../../pages/home/HomeReducer";
import EventsReducer from "../../pages/events/EventsReducer";
import VolunteerReducer from "../../pages/getInvolved/VolunteerReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  homePageDetails: HomeReducer,
  volunteerDetails: VolunteerReducer,
  eventDetails: EventsReducer
});

export default RootReducer;
