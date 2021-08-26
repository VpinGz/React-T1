import InvoiceList from "./components/invoices/InvoiceList";
import InvoiceDetail from "./components/invoices/InvoiceDetail";
import Header from "./components/headers/Header";
import { Route, Switch } from "react-router-dom";
import ItemList from "./components/items/ItemList";
import CustomerList from "./components/headers/customers/CustomerList";
import CustomerDetail from "./components/headers/customers/CustomerDetail";
import CustomerForm from "./components/headers/customers/CustomerForm";
import ItemDetail from "./components/items/ItemDetail";

function App() {
  return (
    <div class="container">
      <Header />
      <Switch>
        <Route exact path="/" component={InvoiceList} />
        <Route exact path="/invoices" component={InvoiceList} />
        <Route path="/invoice/:invoiceNo" component={InvoiceDetail} />
        <Route path="/customers" component={CustomerList} />
        <Route path="/customer/:customerID" component={CustomerDetail} />
        <Route path="/items" component={ItemList} />
        <Route path="/item/:itemID" component={ItemDetail} />
        <Route exact path="/add">
          <CustomerForm />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
