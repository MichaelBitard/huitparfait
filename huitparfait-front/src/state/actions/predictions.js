import {
    fetchPredictions as apiFetchPredictions,
    savePrediction as apiSavePrediction,
} from '../../WebApi'

export const FETCH_PREDICTIONS = 'FETCH_PREDICTIONS'
function fetchPredictionsAttempt() {
    return {
        type: FETCH_PREDICTIONS,
    }
}

export const FETCH_PREDICTIONS_SUCCESS = 'FETCH_PREDICTIONS_SUCCESS'
function fetchPredictionsSuccess(predictions) {
    return {
        type: FETCH_PREDICTIONS_SUCCESS,
        predictions,
    }
}

export const FETCH_PREDICTIONS_FAILURE = 'FETCH_PREDICTIONS_FAILURE'
function fetchPredictionsFailure() {
    return {
        type: FETCH_PREDICTIONS_FAILURE,
    }
}

export function fetchPredictions() {

    return (dispatch) => {

        dispatch(fetchPredictionsAttempt())

        return apiFetchPredictions()
            .then((predictions) => dispatch(fetchPredictionsSuccess(predictions)))
            .catch(() => dispatch(fetchPredictionsFailure()))
    }
}

export const SAVE_PREDICTION = 'SAVE_PREDICTION'
function savePredictionAttempt(prediction) {
    return {
        type: SAVE_PREDICTION,
        prediction,
    }
}

export const SAVE_PREDICTION_SUCCESS = 'SAVE_PREDICTION_SUCCESS'
function savePredictionSuccess(group) {
    return {
        type: SAVE_PREDICTION_SUCCESS,
    }
}

export const SAVE_PREDICTION_FAILURE = 'SAVE_PREDICTION_FAILURE'
function savePredictionFailure() {
    return {
        type: SAVE_PREDICTION_FAILURE,
    }
}

export function savePrediction(prediction) {

    return (dispatch) => {

        dispatch(savePredictionAttempt(prediction))

        return apiSavePrediction(prediction)
            .then(() => dispatch(savePredictionSuccess()))
            .catch(() => dispatch(savePredictionFailure()))
    }
}
