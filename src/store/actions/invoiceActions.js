import * as types from "./actionTypes";
import { baseApiUrl } from "../../helpers/apiHelper";
import axios from "axios";

export function loadInvoiceSuccess(invoices) {
  return { type: types.GET_INVOICES_LIST, invoices };
}

export function getInvoices() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${baseApiUrl}/invoice`);
      dispatch(loadInvoiceSuccess(res.data));
    } catch (error) {
      dispatch({ type: types.API_ERROR, payload: console.log(error) });
    }
  };
}
