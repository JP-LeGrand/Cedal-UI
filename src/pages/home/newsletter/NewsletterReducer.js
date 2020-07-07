import InitialState from "../../../modules/redux/InitialState";
import * as Types from "./NewsletterActionTypes";

const sessionErrorMessage = 'Your session has expired. Please log in to continue.'
const NewsletterReducer = (state = InitialState.homePageDetails, action) => {
    switch (action.type) {
        case Types.SUBSCRIBE:
            return {
                ...state,
                ourFocus: action.data
            };
        default:
            return state;
    }
};

export default NewsletterReducer;
