import { useHistory } from "react-router-dom";
import { useState } from "react";
import { addItemById } from "../../store/actions/itemActions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ItemForm = () => {
  let history = useHistory();
  const handleSubmit = event => {
    event.preventDefault(addItemById);
    var data = {
      'ItemCode' : ItemCode,
      'ItemType' : ItemType,
      'ItemName' : ItemName,
      'UnitPrice' : UnitPrice,
      'UnitCost' : UnitCost,
    }
  }
  const [ItemCode, setItemCode] = useState('');
  const [ItemType, setItemType] = useState('');
  const [ItemName, setItemName] = useState('');
  const [UnitCost, setUnitCost] = useState('');
  const [UnitPrice, setUnitPrice] = useState('');


  return (
    <>
    <br />
    <form className="flex">
     <div className="float-end">
      <button type="submit" className="btn btn-success" >
        Save
      </button>
      </div>
      </form>
      <h2>Item's Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Item Code :
          </Form.Label>
          <Col sm="3">
            <Form.Control type="text" 
            placeholder=" " 
            onChange={(e) => setItemCode(e.target.value)}/>
          </Col>
          <Form.Label column sm="2">
            Item Image :
          </Form.Label>
          <Col sm="3">
            <Form.Control type="text" 
            placeholder=" " 
            onChange={(e) => setItemType(e.target.value)}/>
          </Col>
        </Form.Group>
        {/* ///////////////////////////*/}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Item Name :
          </Form.Label>
          <Col sm="3">
            <Form.Control type="text" 
            placeholder=" " 
            onChange={(e) => setItemName(e.target.value)}/>
          </Col>
          <Form.Label column sm="2">
            Brand's of Product :
          </Form.Label>
          <Col sm="3">
            <Form.Control type="text" placeholder=" " />
          </Col>
        </Form.Group>
        {/* ///////////////////////////*/}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Item Group :
          </Form.Label>
          <Col sm="3">
            <Form.Control type="text" placeholder=" " />
          </Col>
          <Form.Label column sm="2">
            In Stock :
          </Form.Label>
          <Col sm="3">
            <Form.Check label="Follow" type="radio" aria-label="radio 1" />
            <Form.Check label="Unfollow" type="radio" aria-label="radio 1" />
          </Col>
        </Form.Group>
        {/* ///////////////////////////*/}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Item for :
          </Form.Label>
          <Col sm="3">
            <Form.Check label="Item for sale" aria-label="option 1" />
            <Form.Check label="Item for purchase" aria-label="option 2" />
          </Col>
          <Form.Label column sm="2">
            Unit Sale :
          </Form.Label>
          <Col sm="3">
            <Form.Control type="string" 
            placeholder=" " 
            onChange={(e) => setUnitCost(e.target.value)}/>
          </Col>
        </Form.Group>
        {/* ///////////////////////////*/}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Unit Price :
          </Form.Label>
          <Col sm="3">
            <Form.Control type="string" 
            placeholder=" " 
            onChange={(e) => setUnitPrice(e.target.value)}/> 
          </Col>
          <Form.Label column sm="2">
            Anotation :
          </Form.Label>
          <Col sm="3">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </Col>
        </Form.Group>
        {/* ///////////////////////////*/}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Tax :
          </Form.Label>
          <Col sm="3">
            <Form.Control type="string" placeholder=" " />
          </Col>
        </Form.Group>
      </Form>

      <div className="float-end">
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => history.goBack()}
      >
        Back
      </button>
      </div>
    </>
  );
};

export default ItemForm;
