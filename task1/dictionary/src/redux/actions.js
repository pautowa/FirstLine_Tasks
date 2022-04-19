import {SEARCH_WORD, FAVORITES,NOT_FOUND} from './types';

export function searchWord(definitions){
    return {
        type: SEARCH_WORD,
        payload: definitions
    };
};

export function addFavoritesWord(favoritesWord){
    return {
        type: FAVORITES,
        payload: favoritesWord
    };
};

export function notFound(message){
    return {
        type: NOT_FOUND,
        payload: message
    };
};