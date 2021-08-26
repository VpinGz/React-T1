import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from "../../store/actions/invoiceActions";
import moment from "moment";
import { Link } from "react-router-dom";

const InvoiceList = () => {
  const invoices = useSelector((state) => state.invoices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  return (
    <>
      <h2>Invoice List</h2>
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
          {invoices.map((inv) => {
            return (
              <tr key={inv.InvoiceNo}>
                <td>
                  <Link to={"/invoice/" + inv.InvoiceNo}>{inv.InvoiceNo}</Link>
                </td>
                <td>{moment(inv.InvoiceDate).format("D/MMM/yyyy")}</td>
                <td>{inv.CustomerName}</td>
                <td>
                  {inv.TotalAmount.toLocaleString({ minimumFractionDigits: 2 })}
                </td>
                <td>{inv.PaidAmount}</td>
                <td>{inv.RemainAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default InvoiceList;
