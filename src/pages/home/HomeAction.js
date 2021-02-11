import * as Types from "./HomeActionTypes";

export const GetOurFocus = (ourFocus) => (dispatch) => {
  dispatch(UpdateHomeStore(Types.GET_OUR_FOCUS, ourFocus));
};

export const SetOurFocus = (ourFocus) => (dispatch) => {
  dispatch(UpdateHomeStore(Types.SET_OUR_FOCUS, ourFocus));
};

export const UpdateHomeStore = (type, data) => {
  return {
    type: type,
    data,
  };
};
