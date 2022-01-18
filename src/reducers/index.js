import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
    cards: [],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return({
                ...state,
                cards: [],
                isFetching: true,
                error: ''
            })
        case FETCH_SUCCESS:
            return({
                ...state,
                cards: action.payload,
                isFetching: false,
                error: ''
            })
        case FETCH_FAIL:
            return({
                ...state,
                cards: [],
                isFetching: false,
                error: action.payload
            })
        default: 
            return state;
    }
}