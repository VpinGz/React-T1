import {
  GET_INVOICES_LIST,
  GET_INVOICE_DETAIL,
  SAVE_INVOICE,
} from "../actions/actionTypes";
import initialState from "../initialState";

export default function invoiceReducer(state = initialState.invoices, action) {
  switch (action.type) {
    case GET_INVOICES_LIST:
      return action.invoices;
    case GET_INVOICE_DETAIL:
      return state.map((inv) =>
        inv.InvoiceNo === action.invoice.InvoiceNo ? inv : null
      );
    case SAVE_INVOICE:
      return state;
    default:
      return state;
  }
}
