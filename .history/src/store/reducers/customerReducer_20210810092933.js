import {
  GET_CUSTOMERS_LIST,
  GET_CUSTOMER_DETAIL,
  POST_CUSTOMER,
  SAVE_CUSTOMER,
} from "../actions/actionTypes";
import initialState from "../initialState";
  
export default function customerReducer(state = initialState.customers, action) {
  switch (action.type) {
    case GET_CUSTOMERS_LIST:
      return action.customers;
    case GET_CUSTOMER_DETAIL:
      return action.customer;
    case POST_CUSTOMER:
      return action.customer_form;
    case SAVE_CUSTOMER:
      return state;
    default:
      return state;
  }
}
  