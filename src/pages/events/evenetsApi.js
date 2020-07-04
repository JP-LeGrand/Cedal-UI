import * as defaultApi from "../../shared/api/DefaultApi"

export function GetEvents(dispatch) {
    const apiRoute = `events/AllEvents`
    return defaultApi.get(apiRoute, dispatch)
}

export function CreateEvent(eventInformation,dispatch) {
    const apiRoute = `events/CreateEvent`
    return defaultApi.post(apiRoute,eventInformation,dispatch)
}