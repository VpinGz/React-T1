import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addCustomer } from "../../../store/actions/customerActions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TextInput from "../customers/TextInput";
import SelectInput from "../customers/SelectInput";
import Select from 'react-select';

const CustomerForm = () => {
  const initalCustomer = {
    CustomerCode : "",
    CustomerName : "",
    CustomerType : "",
    taxID : ""
  };
  const [validated, setValidated] = useState(false);
  // options = [
  //   { label: "legal entity", value: "legal entity"},
  //   { label: "natural person", value: "natural person"}
  // ]

  const [Customer,setCustomer] = useState(initalCustomer);

  let history = useHistory();
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch(); 
  const { customerID } = useParams();
  
  useEffect(() => {
    console.log(customerID);
  }, [customerID]);

  const handleChange = (e) =>{
    setCustomer(e.target.value);
    console.log(Customer.CustomerType)
    // debugger;
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

  };

    dispatch(addCustomer(customerID));
     console.log(Customer);
  

  return (
    <>
    
      <h2>Customer Form</h2>
      <h2>General Information</h2>

      {/* <form onSubmit={handleSubmit}>
      <h2>{customerID ? "Edit" : "Add"} Course</h2>
      
      <TextInput
        name="setCustomer"
        label="Customer Code"
        value={setCustomer}
        onChange={handleChange}
        
      />

      <SelectInput
        name="Customer Type"
        label="Customer Type"
        value={Customer.customerType || ""}
        defaultOption={"A","B"}
        onChange={handleChange}
      />  

      <TextInput
        name="CustomerName"
        label="CustomerName"
        value={Customer.customerCode}
        onChange={handleChange}
      />

      <TextInput
        name="CustomerName"
        label="CustomerName"
        value={Customer.customerCode}
        onChange={handleChange}
      />

      <TextInput
        name="CustomerName"
        label="CustomerName"
        value={Customer.customerCode}
        onChange={handleChange}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form> */}
        
      <Form onSubmit={handleSubmit} >
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2" >Customer Code</Form.Label>
      <Col sm="3">
        
        <Form.Control
         type="text"
         name="customerCode"
         value={Customer.CustomerCode}
         onChange={handleChange}
        //  required isInvalid placeholder=" " 
         />
      </Col>

      <Form.Label column sm="2">
        Company Name
      </Form.Label>
      <Col sm="3">
      <Form.Control
         type="text"
         name="customerName"
         value={Customer.customerName}
         onChange={handleChange}
        //  required isInvalid placeholder=" " 
         />
      </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Tax ID
      </Form.Label>
      <Col sm="3">
      <Form.Control
         type="text"
         name="taxID"
         value={Customer.taxID}
         onChange={handleChange}
        //  required isInvalid placeholder=" " 
         />
      </Col>
      <Form.Label column sm="2">
        Head Office/Branch
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
      </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Customer Type
      </Form.Label>
      <Col sm="3">
        <Form.Select aria-label="Default select example">
          <option>--เลือก--</option>
          <option value="นิติบุคคล">นิติบุคคล</option>
          <option value="บุคคลทั่วไป">บุคคลทั่วไป</option>
        </Form.Select>
      </Col>

      <Form.Label column sm="2">
        Customer Group
      </Form.Label>
      <Col sm="3">
      <Form.Select aria-label="Default select example">
          <option>--เลือก--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
        </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Currency
      </Form.Label>
      <Col sm="3">
      <Form.Select 
      value={Customer.customerType} 
      onChange={handleChange}
      aria-label="Default select example">
          <option>--เลือก--</option>
          <option value="THB">THB</option>
          <option value="DIV">DIV</option>
          <option value="Three">Three</option>
        </Form.Select>
      </Col>
      <Form.Label column sm="2">
        Payment Term
      </Form.Label>
      <Col sm="3">
      <Form.Select aria-label="Default select example">
          <option>--เลือก--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
        </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Contact Name
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
      </Col>
      <Form.Label column sm="2">
        Email
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder="example@gmail.com" />
      </Col>
        </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Telephone No.1  
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
      </Col>
      <Form.Label column sm="2">
        Sales PIC
      </Form.Label>
      <Col sm="3">
      <Form.Select aria-label="Default select example">
          <option>--เลือก--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
        </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Fax
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
      </Col>
      <Form.Label column sm="2">
        Website
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
      </Col>
        </Form.Group>
      <h2>Customer Account</h2>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Account Receivable
      </Form.Label>
      <Col sm="3">
      <Form.Select aria-label="Default select example">
          <option>--เลือก--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
        </Form.Group>
      </Form>
      
      
      
      {/* <footer>
      <h2>Address Information</h2>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Billing Address
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
      </Col>
      <Form.Label column sm="2">
      Additional Address
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" placeholder=" " />
      </Col>
        </Form.Group>
     
      </footer>  */}
    
      {/* <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => history.goBack()}
        >
        Create

      </button>  */}

      <button type="submit"
       className="btn btn-success" 
       onClick={handleSubmit}>
        Save
      </button>
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

export default CustomerForm;
