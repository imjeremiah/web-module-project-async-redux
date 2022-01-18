import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getCards = () => {
    return(dispatch) => {
        dispatch(fetchStart());
        axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=5`)
            .then(res => {
                dispatch(fetchSuccess(res.data.cards));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            })
    }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (cards) => {
    return({type: FETCH_SUCCESS, payload: cards});
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
}