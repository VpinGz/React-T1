
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../store/actions/customerActions";
import moment from "moment";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <>
      <h2>Customer List</h2>;
      <table className="table table-border table-hover">
        <thead>
          <tr>
            <th>Invoice No.</th>
            <th>Invoice Date</th>
            <th>Customer Name</th>
            <th>Total Amount</th>
            <th>Paid</th>
            <th>Remain</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cus) => {
            return (
              <tr key={cus.InvoiceNo}>
                <td>
                  <Link to={"/customer/" + cus.InvoiceNo}>{cus.InvoiceNo}</Link>
                </td>
                <td>{moment(cus.InvoiceDate).format("D/MMM/yyyy")}</td>
                <td>{cus.CustomerName}</td>
                <td>
                  {cus.TotalAmount.toLocaleString({ minimumFractionDigits: 2 })}
                </td>
                <td>{cus.PaidAmount}</td>
                <td>{cus.RemainAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
  
};

export default CustomerList;
