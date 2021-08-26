import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomerById } from "../../../store/actions/customerActions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CustomerDetail = () => {
  let history = useHistory();

  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const { customerID } = useParams();

  useEffect(() => {
    dispatch(getCustomerById(customerID));
  }, [dispatch]);
  
  return (
    <>
      <h2>Customer Detail</h2>
        
          return(
            <Container>
          <Row>
            <Col>Customer ID{customer.CustomerName}</Col >
            <Col>Customer Name{customer.CustomerName}</Col>
          </Row>
          <Row>
            <Col>Tax ID.{customer.TaxID}</Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
          )

      

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
