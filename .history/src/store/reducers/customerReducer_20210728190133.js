import {
    GET_CUSTOMERS_LIST,
    GET_CUSTOMER_DETAIL,
    SAVE_CUSTOMER,
  } from "../actions/actionTypes";
  import initialState from "../initialState";
  
  export default function customerReducer(state = initialState.customers, action) {
    switch (action.type) {
      case GET_CUSTOMERS_LIST:
        return action.invoices;
      case GET_CUSTOMER_DETAIL:
        return state.map((cus) =>
          cus.CustomerID === action.customer.CustomerID ? cus : null
        );
      case SAVE_CUSTOMER:
        return state;
      default:
        return state;
    }
  }
  