import { combineReducers } from "redux";

import { wordReducer } from "./wordReducer";
import { favoritesReducer } from "./favoritesReducer";

export const rootReducer = combineReducers({
    word: wordReducer,
    favorites: favoritesReducer
});