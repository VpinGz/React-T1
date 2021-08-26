import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomerById } from "../../../store/actions/customerActions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CustomerDetail = () => {
  let history = useHistory();
  const customer = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const { customerID } = useParams();

  useEffect(() => {
    console.log(customerID);
    dispatch(getCustomerById(customerID));
    
  }, [customer]);



  return (
    <>
      <h2>Customer Form</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="1">
        Customer
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
     </Col>
     <Form.Label column sm="1">
        Company
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
     </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="1">
        Email
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
     </Col>
     <Form.Label column sm="1">
        Company
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
     </Col>
     
        </Form.Group>
     </Form>





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
