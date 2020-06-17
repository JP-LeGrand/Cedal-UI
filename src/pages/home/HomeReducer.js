import InitialState from "../../modules/redux/InitialState";
import * as Types from "./HomeActionTypes";

const HomeReducer = (state = InitialState.homePageDetails, action) => {
  switch (action.type) {
    case Types.GET_OUR_FOCUS:
      return {
        ...state,
        ourFocus: action.data
      };
      case Types.SET_OUR_FOCUS:
      return {
        ...state,
        ourFocus: action.data
      };
    default:
      return state;
  }
};

export default HomeReducer;
