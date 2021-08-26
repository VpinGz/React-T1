import * as types from "./actionTypes";
import { baseApiUrl } from "../../helpers/apiHelper";
import axios from "axios";

export function loadCustomerSuccess(customers) {
  return { type: types.GET_CUSTOMERS_LIST, customers };
}

export function loadCustomerByIdSuccess(customer) {
  return { type: types.GET_CUSTOMER_DETAIL, customer };
}
export function loadCustomerByFormSuccess(customer_form) {
  return { type: types.POST_CUSTOMER, customer_form };
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

export function getCustomerById(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${baseApiUrl}/customer/${id}`);
      dispatch(loadCustomerByIdSuccess(res.data));
    } catch (error) {
      dispatch({ type: types.API_ERROR, payload: console.log(error) });
    }
  };
}

export function addCustomerById(Id) {
  return async function (dispatch, getState) {
    try {
      const res = await axios.post(`${baseApiUrl}/customer`);
      dispatch(loadCustomerByFormSuccess(res.data));
    } catch (error) {
      dispatch({ type: types.API_ERROR, payload: console.log(error) });
    }
  };
}