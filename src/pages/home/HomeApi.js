import * as defaultApi from "../../shared/api/DefaultApi"

export function SubscribeToNewsLetter(subscriberInformation, dispatch) {
    const apiRoute = `subscriptionLetters/addSubscriber`
    return defaultApi.post(apiRoute, subscriberInformation, dispatch)
}