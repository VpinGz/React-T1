import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../store/actions/customerActions";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <>
      <h2>Customer List</h2>
      <table className="table table-border table-hover">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Telephone</th>
            <th>Total Balance</th>
            <th>Currency Code</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cus) => {
            return (
              <tr key={cus.CustomerCode}>
                <td>
                  <Link to={"/customer/" + cus.CustomerID}>{cus.CustomerCode}</Link>
                </td>
                <td>{cus.CustomerName}</td>
                <td>{cus.Telephone1}</td>
                <td>
                  {cus.CustomerBalance.toLocaleString({ minimumFractionDigits: 2 })}
                </td>
                <td>{cus.CurrencyCode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
  
};

export default CustomerList;
