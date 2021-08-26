import * as types from "./actionTypes";
import { baseApiUrl } from "../../helpers/apiHelper";
import axios from "axios";

export function loadCustomerSuccess(customers) {
  return { type: types.GET_CUSTOMERS_LIST, customers };
}

export function getCustomers() {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${baseApiUrl}/customer`);
      dispatch(loadCustomerSuccess(res.data));
    } catch (error) {
      dispatch({ type: types.API_ERROR, payload: console.log(error) });
    }
  };
}
export function loadCustomerSuccess(customers) {
  return { type: types.GET_CUSTOMER_DETAIL, customers };
}

export function editCustomer(){
  return async function (dispatch){
    try{
      const res = await axios.get(`${baseApiUrl}/customer/`)
    }
    catch (error) {
      dispatch({ type: types.API_ERROR, payload: console.log(error) });
    }
  }
}