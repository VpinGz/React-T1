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
      <div class="container">
     <div class="row">
          <div class="col"> 1 of 2</div>
          <div class="col"> 2 of 2</div>
     </div>
     <div class="row">
          <div class="col"> 1 of 3</div>
          <div class="col"> 2 of 3</div>
          <div class="col"> 3 of 3</div>
     </div>
</div>
        {customers.map((cus) => {
          <div class="container">
          <div class="row">
               <div class="col"> 1 of 2</div>
               <div class="col"> 2 of 2</div>
          </div>
          <div class="row">
               <div class="col"> 1 of 3</div>
               <div class="col"> 2 of 3</div>
               <div class="col"> 3 of 3</div>
          </div>
     </div>
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
