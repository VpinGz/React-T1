import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const CustomerDetail = () => {
  let history = useHistory();
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();


  return (
    <>
      <h2>Customer Detail</h2>
      <div>Customer ID</div>
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
