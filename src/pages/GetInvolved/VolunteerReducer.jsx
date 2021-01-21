import InitialState from "../../modules/redux/InitialState";
import * as Types from "./VolunteerActionTypes";

const VolunteerReducer = (state = InitialState.volunteerDetails, action) => {
    switch (action.type) {
        case Types.GET_VOLUNTEERS:
            return {
                ...state.volunteers,
                volunteers: state.volunteers.concat(action.data)
            };
        case Types.STORE_PERSONAL_INFORMATION:
            return {
                ...state,
                personalInformation:action.data
            };
        case Types.STORE_CONTRIBUTION_INFORMATION:
            return {
                ...state,
                contributionInformation:action.data
            };
        case Types.STORE_REFERENCE_INFORMATION:
            return {
                ...state,
                referenceInformation:action.data
            };
        case Types.STORE_SCREENING_INFROMATION:
            return {
                ...state,
                screeningInformation:action.data
            };
        default:
            return state;
    }
};

export default VolunteerReducer;
