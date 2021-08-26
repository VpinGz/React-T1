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
      <form className="container">
        {customers.map((cus) => {
          <div class="container">
            <div class="row">
              <div class="col">{cus.CustomerCode}</div>
              <div class="col">Column</div>
              <div class="w-100"></div>
              <div class="col">Column</div>
              <div class="col">Column</div>
            </div>
         </div>

        })}
        
      </form>



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
