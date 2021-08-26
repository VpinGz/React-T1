import { combineReducers } from "redux";
import invoices from "./invoiceReducer";
import customers frome "./customerReducer"

const rootReducer = combineReducers({
  invoices,
  customers,
});

export default rootReducer;
