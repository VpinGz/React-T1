import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addCustomer } from "../../../store/actions/customerActions";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TextInput from "../customers/TextInput";
import SelectInput from "../customers/SelectInput";
import Select from 'react-select';
import Container from 'react-bootstrap/Container';
import { bindActionCreators } from "redux";

const CustomerForm = () => {
  const initalCustomer = {
    CustomerCode : "",
    CustomerName : "",
    CustomerType : "",
    TaxID : "",
    CustomerId:null,
    CompanyId:null,
    BillingAddress1:"",
    BillingAmphur:"",
    BillingProvince:"",
    BillingPostalCode:"",
    CurrencyCode:"",
    BranchCode:""
  };

  const [validated, setValidated] = useState(false);
  const [Customer,setCustomer] = useState(initalCustomer);

  let history = useHistory();
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch(); 
  const { customerID } = useParams();
 
  useEffect(() => { 
    dispatch(addCustomer(customerID));
  }, [customerID]);

  const handleChange = (e) =>{
    const value = e.target.value;
    setCustomer({...Customer, [e.target.name]: value});
    // debugger;
  }

  // function handleSave(e) {
  //   e.preventDefault();
  //   addCustomer(Customer)
  //     .then(() => {
  //       toast.success("Customer saved.");
  //       history.push("/courses");
  //     })
  //     .catch(error => {
  //       setSaving(false);
  //       setErrors({ onSave: error.message });
  //     });
  // }


  const handleSubmit = (e) => {
    console.log(Customer.CustomerCode);
    console.log(Customer.CustomerName);
    console.log(Customer.CustomerType);
    console.log(Customer.TaxID);
    e.preventDefault();
    dispatch(addCustomer(Customer));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

    

  return (
    <>
    
      <h2>Customer Form</h2>
      <h2>General Information</h2>
      
    <div>
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
      </div>  

      <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2" >Customer Code</Form.Label>
      <Col sm="3">
        
        <Form.Control required 
         type="text" 
         name="CustomerCode"
         value={Customer.CustomerCode}
         onChange={handleChange}
        //  required isInvalid placeholder=" " 
         />
      </Col>

      <Form.Label column sm="2">
        Company Name
      </Form.Label>
      <Col sm="3">
      <Form.Control required 
         type="text"
         name="CustomerName"
         value={Customer.CustomerName}
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
      <Form.Control required 
         type="text"
         name="TaxID"
         value={Customer.TaxID}
         onChange={handleChange}
        //  required isInvalid placeholder=" " 
         />
      </Col>

      <Form.Label column sm="2">
        Head Office/Branch
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text" />
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
      <Form.Select required 
      value={Customer.CustomerType} 
      name="CustomerType"
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
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
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
       <h2>Address Information</h2>  
      </Form>
      
      
      
      <footer>
     
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Billing Address
      </Form.Label>
      <Col sm="3">
        <Form.Control
        type="text" 
        required/>
      </Col>
      <Form.Label column sm="2">
      Additional Address
      </Form.Label>
      <Col sm="3">
        <Form.Control type="text"  />
      </Col>
        </Form.Group>
     
      </footer> 
    
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
