import HomeReducer from "../../pages/home/HomeReducer";
import EventsReducer from "../../pages/events-and-news/eventsReducer";
import VolunteeeReducer from "../../pages/get-involved/volunteerReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  homePageDetails: HomeReducer,
  volunteerDetails: VolunteeeReducer,
  eventDetails: EventsReducer
});

export default RootReducer;
