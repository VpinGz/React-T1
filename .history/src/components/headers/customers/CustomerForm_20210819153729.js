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

const CustomerForm = ({
  customerId,
  customerName,
  customerCode,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  let history = useHistory();
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch(); 
  const { customerID } = useParams();
  
  useEffect(() => {
    console.log(customerID);
  }, [customerID]);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCustomer(customerID));
    const data = {
      'CustomerID': CustomerID,
      'CustomerName': CustomerName,
      'CustomerCode': CustomerCode,
      'CustomerType': CustomerType,
      'BillingAddress1':BillingAddress1,
      'BillingAmphur':BillingAmphur,
      'BillingProvince':BillingProvince,
      'BillingPostalCode':BillingPostalCode,
      'CurrencyCode':CurrencyCode,
      'BranchCode':BranchCode,
      'TaxID':TaxID

    }
     console.log(CustomerName);
    }

  const [CustomerName,setCustomerName] = useState('');
  const [CustomerID,setCustomerID] = useState('');
  const [CustomerCode,serCustomerCode] = useState('');
  const [CustomerType,setCustomerType] = useState('');
  const [BillingAddress1,setBillingAddress1] = useState('');
  const [BillingAmphur,setBillingAmphur] = useState('');
  const [BillingProvince,setBillingProvince] = useState('');
  const [BillingPostalCode,setBillingPostalCode] = useState('');
  const [CurrencyCode,setCurrencyCode] = useState('');
  const [BranchCode,setBranchCode] = useState('');
  const [TaxID,setTaxID] = useState('');
    
  return (
    <>
    
      <h2>Customer Form</h2>
      <h2>General Information</h2>

      <form onSubmit={onSave}>
      <h2>{customer.CustomerID ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="CustomerID"
        label="CustomerID"
        value={customer.CustomerID}
        onChange={onChange}
        error={errors.CustomerID}
      />

      <SelectInput
        name="CustomerID"
        label="Customer"
        value={customer.CustomerID || ""}
        defaultOption="Select Customer"
        options={customer.map(author => ({
          value: customer.ustomerID,
          text: customer.CustomerName
        }))}
        onChange={onChange}
        error={errors.CustomerName}
      />

      <TextInput
        name="CustomerName"
        label="CustomerName"
        value={customer.CustomerName}
        onChange={onChange}
        error={errors.CustomerName}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
        
      {/* <Form >
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2" >
        CustomerID
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" required isInvalid placeholder=" " />
      </Col>
      <Form.Label column sm="2">
        Customer Name
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" required isInvalid placeholder=" " />
      </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Tax ID
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" required isInvalid placeholder="" />
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
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
      <Form.Label column sm="2">
        Customer Group
      </Form.Label>
      <Col sm="3">
      <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
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
      <Form.Select aria-label="Default select example" required isInvalid>
          <option>Open this select menu</option>
          <option value="1">THB</option>
          <option value="2">DIV</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
      <Form.Label column sm="2">
        Payment Term
      </Form.Label>
      <Col sm="3">
      <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
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
          <option>Open this select menu</option>
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
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
        </Form.Group>
      </Form> */}
      
      
      
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
