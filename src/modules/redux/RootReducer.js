import HomeReducer from "../../pages/home/HomeReducer";
import EventsReducer from "../../pages/events/eventsReducer";
import VolunteerReducer from "../../pages/GetInvolved/VolunteerReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  homePageDetails: HomeReducer,
  volunteerDetails: VolunteerReducer,
  eventDetails: EventsReducer
});

export default RootReducer;
