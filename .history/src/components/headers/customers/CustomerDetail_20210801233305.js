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
            <Col>Customer ID</Col >
            <Col>{customer.CustomerID}</Col>
            <Col>Customer Name</Col>    
            <Col>{customer.CustomerName}</Col>     
         </Row>
          <Row>
            <Col>Tax ID.{customer.TaxID}</Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
      

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
