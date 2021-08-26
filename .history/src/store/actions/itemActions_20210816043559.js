import * as types from "./actionTypes";
import { baseApiUrl } from "../../helpers/apiHelper";
import axios from "axios";

export function loadItemSuccess(items) {
    return { type: types.GET_ITEMS_LIST, items };
}

export function loadItemByIdSuccess(item) {
    return { type: types.GET_ITEM_DETAIL, item };
}

export function loadSaveItemSuccess(item) {
    return { type: types.SAVE_ITEM, item};
}

export function getItems() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${baseApiUrl}/item`);
            dispatch(loadItemSuccess(res.data));
        } catch (error) {
            dispatch ({ type: types.API_ERROR, payload: console.log(error)});
        }
    };
}

export function getItemById(itemId) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${baseApiUrl}/item/${itemId}`);
            dispatch(loadItemByIdSuccess(res.data));
        } catch (error) {
            dispatch ({ type: types.API_ERROR, payload: console.log(error) });
        }
    };
}

export function addItemById(item) {
    return async function (dispatch) {
        try {
            const res = await axios.post(`${baseApiUrl}/item` , {
                method: "POST" ,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            });
            dispatch(loadSaveItemSuccess(res.data));
        } catch (error) {
            dispatch ({type: types.API_ERROR, payload: console.log(error) });
        }
    };
}