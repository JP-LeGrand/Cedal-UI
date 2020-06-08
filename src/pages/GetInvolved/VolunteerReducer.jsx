import InitialState from "../../modules/redux/InitialState";
import * as Types from "./VolunteerActionTypes";

const HomeReducer = (
    state = InitialState.volunteerDetails, action) => {
    switch (action.type) {
        case Types.GET_VOLUNTEERS:
            return {
                ...state.volunteers,
                volunteers: state.volunteers.concat(action.payload)
            };
        case Types.STORE_BASIC_INFORMATION:
            return {
                ...state.basicInformation,
                ...action.payload
            };
        case Types.STORE_EXPERIENCE_INFORMATION:
            return {
                ...state.experienceInformation,
                ...action.payload
            };
        case Types.STORE_REFERENCE_INFORMATION:
            return {
                ...state.referenceInformation,
                ...action.payload
            };
        case Types.STORE_SCREENING_INFROMATION:
            return {
                ...state.screeningInformation,
                ...action.payload
            };
        default:
            return state;
    }
};

export default HomeReducer;
