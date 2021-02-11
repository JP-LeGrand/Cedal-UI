import InitialState from "../../modules/redux/InitialState";
import * as Types from "./HomeActionTypes";

const sessionErrorMessage =
  "Your session has expired. Please log in to continue.";
const HomeReducer = (state = InitialState.homePageDetails, action) => {
  switch (action.type) {
    case Types.GET_OUR_FOCUS:
      return {
        ...state,
        ourFocus: action.data,
      };
    case Types.SET_OUR_FOCUS:
      return {
        ...state,
        ourFocus: action.data,
      };
    case Types.LOGON_VERIFY_USER_AUTHENTICATED_STATUS_ERROR:
      return {
        ...state,
        errorMessage: sessionErrorMessage,
      };
    default:
      return state;
  }
};

export default HomeReducer;
