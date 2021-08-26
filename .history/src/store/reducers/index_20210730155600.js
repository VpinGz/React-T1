import { combineReducers } from "redux";
import invoices from "./invoiceReducer";
import customers from "./customerReducer";

const rootReducer = combineReducers({
  invoices,
  customers,
  customer,
});

export default rootReducer;
