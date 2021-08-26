import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomers } from "../../../store/actions/customerActions";


const CustomerDetail = () => {
  let history = useHistory();

  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <>
      <h2>Customer Detail</h2>
        {customers.map((cus) => {
          <div class="container">
            <div class="row">
              <div class="col">{cus.CustomerID}</div>
              <div class="col">{cus.CustomerName}</div>
              <div class="w-100">{cus.Telephone1}</div>
              <div class="col">Column</div>
              <div class="col">Column</div>
            </div>
         </div>

        })}
        
      



      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => history.goBack()}
      >
        Back
      </button>
    </>
  );
};

export default CustomerDetail;
