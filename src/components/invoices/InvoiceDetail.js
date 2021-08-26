import { useHistory } from "react-router-dom";

const InvoiceDetail = () => {
  let history = useHistory();
  return (
    <>
      <h2>Invoice Detail</h2>
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

export default InvoiceDetail;
