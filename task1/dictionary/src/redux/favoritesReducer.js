import {FAVORITES} from './types';

const initialState = {
    favoritesWords: (sessionStorage.getItem('favoritesWords') ? JSON.parse(sessionStorage.getItem('favoritesWords')) : [])
};

export const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case FAVORITES:
            if(!state.favoritesWords.find(el => el.word === action.payload.word)){
                let newFaroritesWords = state.favoritesWords.concat(action.payload);
                sessionStorage.setItem('favoritesWords',JSON.stringify(newFaroritesWords));
                return {...state, favoritesWords: newFaroritesWords};
            }
            else
                return state;
        default:
            return state;
    }
};