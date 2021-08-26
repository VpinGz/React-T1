import { useHistory } from "react-router-dom";

const CustomerDetail = () => {
  let history = useHistory();
  return (
    <>
      <h2>Customer Detail</h2>
      <div>Customer ID</div>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
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
