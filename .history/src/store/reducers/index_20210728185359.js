import { combineReducers } from "redux";
import invoices from "./invoiceReducer";

const rootReducer = combineReducers({
  invoices,
  customers,
});

export default rootReducer;
