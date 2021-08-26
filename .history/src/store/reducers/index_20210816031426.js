import { combineReducers } from "redux";
import invoices from "./invoiceReducer";
import customers from "./customerReducer";
import items from "./itemReducer";

const rootReducer = combineReducers({
  invoices,
  customers,
  items
});

export default rootReducer;
