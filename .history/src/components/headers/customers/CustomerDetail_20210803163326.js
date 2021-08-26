import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomerById } from "../../../store/actions/customerActions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
            <Col>Tel.</Col>
            <Col>{customer.CustomerTelephone1}</Col>
          </Row>
          <Row>
          <Col>Customer Type</Col>
          <Col>{customer.CustomerType}</Col>
          <Col></Col>
          <Col></Col>
          </Row>
          <Row>
          <Col>CurrencyCode</Col>
          <Col>{customer.CurrencyCode}</Col>
          <Col></Col>
          <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      <footer>
        <h2>Customer Account</h2>
        <Container>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
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
