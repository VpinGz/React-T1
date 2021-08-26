import {
    GET_CUSTOMER_LIST,
    GET_CUSTOMER_DETAIL,
    SAVE_CUSTOMER,
  } from "../actions/actionTypes";
  import initialState from "../initialState";s
  
  export default function invoiceReducer(state = initialState.invoices, action) {
    switch (action.type) {
      case GET_CUSTOMER_LIST:
        return action.invoices;
      case GET_CUSTOMER_DETAIL:
        return state.map((inv) =>
          inv.InvoiceNo === action.invoice.InvoiceNo ? inv : null
        );
      case SAVE_CUSTOMER:
        return state;
      default:
        return state;
    }
  }
  