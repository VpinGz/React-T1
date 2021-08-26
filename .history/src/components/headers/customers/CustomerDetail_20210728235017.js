import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomers } from "../../../store/actions/customerActions";


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
          <Container fluid="md">
            <Row>
             <Col>{cus.CustomerID}</Col>
           </Row>
          </Container>

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
