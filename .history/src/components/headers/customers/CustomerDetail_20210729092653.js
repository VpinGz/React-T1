import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomers } from "../../../store/actions/customerActions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CustomerDetail = () => {
  let history = useHistory();

  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <>
      <h2>Customer Detail</h2>
      
        {customers.map((cus) => {
          return(
            <Container>
          <Row>
            <Col>{cus.CustomerID}</Col >
            <Col>2 of 2</Col>
          </Row>
          <div className="Row">
            <div className="Col">1 of 3</div>
            <div className="Col">2 of 3</div>
            <div className="Col">3 of 3</div>
          </div>
        </div>
          )
          
        })}
      

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
