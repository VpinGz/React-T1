import { useHistory } from "react-router-dom";

const CustomerDetail = () => {
  let history = useHistory();
  return (
    <>
      <h2>Customer Detail</h2>
      
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
