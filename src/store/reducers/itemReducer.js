import {
    GET_ITEMS_LIST,
    GET_ITEM_DETAIL,
    SAVE_ITEM,
} from "../actions/actionTypes";
import initialState from "../initialState";

export default function itemReducer(state = initialState.items, action) {
    switch (action.type) {
        case GET_ITEMS_LIST:
            return action.items;
        case GET_ITEM_DETAIL:
            return action.item;
        case SAVE_ITEM:
            return state; 
        default:
            return state;
    }
}