import axios from "axios";

export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE";
export const FETCH_CARDS_START = "FETCH_CARDS_START";

export const fetchData = () => {
    return (dispatch) => {

        dispatch({ type: FETCH_CARDS_START });

        axios
        .get("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
        .then((res) => {
            dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data.cards });
        })
        .catch((err) => {
            console.log(err.message);
            dispatch({ type: FETCH_CARDS_FAILURE, payload: err.message });
        }); 
    };
};