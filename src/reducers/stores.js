import { STORES_FETCH_STARTED, STORES_FETCH_SUCCESS, STORES_FETCH_ERROR } from '../actions/stores';
const INITIAL_STATE = {
    data: [],
    error: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case STORES_FETCH_SUCCESS:
            return { ...state, data: action.payload }
        case STORES_FETCH_ERROR:
            return { ...state, error: action.payload }
        default:
            return { ...state }

    }
}
