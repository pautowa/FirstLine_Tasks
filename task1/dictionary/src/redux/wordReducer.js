import {SEARCH_WORD, NOT_FOUND} from './types';

const initialState = {
    definitions: {},
    notFoundMessage: {}
};

export const wordReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_WORD:
            return {...state, definitions: action.payload, notFoundMessage: {}};
        case NOT_FOUND:
            return {...state, notFoundMessage: action.payload, definitions: {}};
        default:
            return state;
    }
};