import * as Types from "./HomeActionTypes";
import Axios from "axios";

var blobLink = "";

export const GetDetails = link => {
  blobLink = link;

  return async function(dispatch) {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };
    await Axios.get(link, config)
      .then(response => {
        dispatch({
          type: Types.GET_DETAILS,
          payload: response.data
        });
      })
      .catch(error => {
        "error";
      });
  };
};
