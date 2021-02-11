import * as Types from "./NewsletterActionTypes";
import * as HomeApi from "../HomeApi";

export const Subscribe = (subscriberInformation) => (dispatch) => {
  return HomeApi.SubscribeToNewsLetter(subscriberInformation)
    .then((response) => {
      dispatch(UpdateNewsletterStore(Types.SUBSCRIBE, { subscribed: true }));
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const UpdateNewsletterStore = (type, data) => {
  return {
    type: type,
    data,
  };
};
