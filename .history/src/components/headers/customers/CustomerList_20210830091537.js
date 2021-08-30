import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../store/actions/customerActions";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const CustomerList = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <>
      <h2>Customer List</h2>
      <Link to="/add">
        <button className="btn btn-outline-info">New</button>
      </Link>
      <Link to="/add2">
        <button className="btn btn-outline-info">New2</button>
      </Link>
      <table className="table table-border table-hover">
        <thead>
          <tr>
            <th>Customer Code</th>
            <th>Customer Name</th>
            <th>Telephone</th>
            <th>Total Balance</th>
            <th>Currency Code</th>
            <th>!!!!!!</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cus) => {
            return (
              <tr key={cus.CustomerID}>
                <td>
                  <Link to={"/customer/" + cus.CustomerID}>{cus.CustomerCode}</Link>
                </td>
                <td>{cus.CustomerName}</td>
                <td>{cus.Telephone1}</td>
                <td>
                  {/* {cus.CustomerBalance.toLocaleString({ minimumFractionDigits: 2 })} */}
                </td>
                <td>{cus.CurrencyCode}</td>
                <td><button
                type="button"
                className="btn btn-outline-info">
                Edit
                </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
  
};

export default CustomerList;
