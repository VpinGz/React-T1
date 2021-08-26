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
          <Row>
            <Col>Customer ID :</Col >
            <Col>{customer.CustomerID}</Col>
            <Col>Customer Name :</Col>    
            <Col>{customer.CustomerName}</Col>     
         </Row>
          <Row>
            <Col>Tax ID.</Col>
            <Col>{customer.TaxID}</Col>
            <Col>Head Office/Branch</Col>
            <Col>{customer.CustomerHeadOffice}</Col>
          </Row>
          <Row>
          <Col>Customer Type</Col>
          <Col>{customer.CustomerType}</Col>
          <Col>Customer Group</Col>
          <Col></Col>
          </Row>
          <Row>
          <Col>Currency</Col>
          <Col>{customer.CurrencyCode}</Col>
          <Col>Payment Term</Col>
          <Col></Col>
          </Row>
          <Row>
            <Col>Contact Name</Col>
            <Col></Col>
            <Col>Email</Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>Telephone No.1</Col>
            <Col></Col>
            <Col>Sales PIC</Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>Fax</Col>
            <Col></Col>
            <Col>Website</Col>
            <Col></Col>
          </Row>
        </Container>
      <footer>
        <h2>Customer Account</h2>
        <Container>
        <Row>
            <Col>Account Receivable</Col>
            <Col></Col>
          </Row>
        </Container>
        <h2>Address Information</h2>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Container>
          <Row>
            <Col>Billing Address</Col>
            <Col></Col>
            <Col>Additional Address</Col>
            <Col></Col>
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
