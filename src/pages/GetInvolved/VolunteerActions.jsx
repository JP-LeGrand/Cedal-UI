import * as types from './VolunteerActionTypes'

export const SavePersonalInformation = (personalInformation) => (dispatch) => {
    dispatch(UpdateVolunteerStore(types.STORE_PERSONAL_INFORMATION, personalInformation))
};

export const SaveContributionInformation = (contributionInformation) => (dispatch) => {
    dispatch(UpdateVolunteerStore(types.STORE_CONTRIBUTION_INFORMATION, contributionInformation))
};

export const UpdateVolunteerStore = (type, data) => {
    return {
        type: type,
        data
    }
};