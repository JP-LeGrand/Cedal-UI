import HomeReducer from "../../pages/home/HomeReducer";
import NewsletterReducer from "../../pages/home/newsletter/NewsletterReducer";
import EventsReducer from "../../pages/events/eventsReducer";
import VolunteerReducer from "../../pages/GetInvolved/VolunteerReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  homePageDetails: HomeReducer,
  volunteerDetails: VolunteerReducer,
  eventDetails: EventsReducer,
  subscriptionLetter: NewsletterReducer,
});

export default RootReducer;
