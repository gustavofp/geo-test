import axios from 'axios';
import constants from '../config/constants';

export const STORES_FETCH_STARTED = 'STORES_FETCH_STARTED';
export const STORES_FETCH_SUCCESS = 'STORES_FETCH_SUCCESS';
export const STORES_FETCH_ERROR = 'STORES_FETCH_ERROR';
export const fetchStores = () => dispatch => {
    dispatch({ type: STORES_FETCH_STARTED });

    axios.get(`${constants.API_URL}/stores`)
        .then(stores => {
            dispatch({
                type: STORES_FETCH_SUCCESS,
                payload: stores.data
            })
        })
        .catch(err => {
            dispatch({
                type: STORES_FETCH_ERROR,
                payload: err
            })
        })

}