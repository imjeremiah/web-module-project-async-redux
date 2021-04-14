import { FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE, FETCH_CARDS_START } from "../actions";

const initialState = {
  isLoading: false,
    cards: [],
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CARDS_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_CARDS_SUCCESS:
        return {
          ...state, 
          cards: action.payload,
          isLoading: false,
          error: ""
        };
      case FETCH_CARDS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };