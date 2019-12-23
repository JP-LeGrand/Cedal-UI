import InitialState from "../../modules/redux/InitialState";
import * as Types from "./HomeActionTypes";

const HomeReducer = (
  state = InitialState.HomePageDetails,
  action
) => {
  switch (action.type) {
    case Types.GET_DETAILS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default HomeReducer;
