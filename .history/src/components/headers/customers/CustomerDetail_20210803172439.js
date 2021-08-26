import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomerById } from "../../../store/actions/customerActions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

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
      <h2>Customer Detail</h2>
         <h2>{customer.CustomerName}</h2>
            <Container>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Row sm="3">
            <Col column sm="2">Customer ID </Col >
            <Col sm="3">{customer.CustomerID}</Col>
            <Col sm="3">Customer Name </Col>    
            <Col sm="3">{customer.CustomerName}</Col>     
         </Row></Form.Group>
         <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Row>
            <Col column sm="2">Tax ID.</Col>
            <Col sm="3">{customer.TaxID}</Col>
            <Col sm="3">Head Office/Branch</Col>
            <Col sm="3">{customer.CustomerHeadOffice}</Col>
          </Row></Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Row>
          <Col column sm="2">Customer Type</Col>
          <Col sm="3">{customer.CustomerType}</Col>
          <Col sm="3">Customer Group</Col>
          <Col sm="3"></Col>
          </Row></Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Row>
          <Col column sm="2">Currency</Col>
          <Col sm="3">{customer.CurrencyCode}</Col>
          <Col sm="3">Payment Term</Col>
          <Col sm="3"></Col>
          </Row></Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Row>
            <Col column sm="2">Contact Name</Col>
            <Col sm="3"></Col>
            <Col sm="3">Email</Col>
            <Col sm="3"></Col>
          </Row></Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Row>
            <Col column sm="2">Telephone No.1</Col>
            <Col sm="3"></Col>
            <Col sm="3">Sales PIC</Col>
            <Col sm="3"></Col>
          </Row></Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Row>
            <Col column sm="2">Fax</Col>
            <Col sm="3"></Col>
            <Col sm="3">Website</Col>
            <Col sm="3"></Col>
          </Row></Form.Group>
        </Container>
      <footer>
        <h2>Customer Account</h2>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Container>
        <Row>
            <Col sm="3">Account Receivable</Col>
            <Col sm="3"></Col>
          </Row>
        </Container></Form.Group>
        <h2>Address Information</h2>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Container>
          <Row>
            <Col sm="3">Billing Address</Col>
            <Col sm="3"></Col>
            <Col sm="3">Additional Address</Col>
            <Col sm="3"></Col>
          </Row>
        </Container></Form.Group>
      </footer>

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
