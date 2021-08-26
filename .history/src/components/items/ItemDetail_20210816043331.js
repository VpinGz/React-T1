import { useHistory, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemById } from "../../store/actions/itemActions";

const ItemDetail = () => {
  let history = useHistory(); 

  const item = useSelector((state) => state.items);
  
  const dispatch = useDispatch();
  const { itemId } = useParams();

  useEffect(() => {
    dispatch(getItemById(itemId));
  }, [itemId]);

  console.log(item.ItemID);
  return (
    <>
    <br />
      <h2>Item Detail</h2>
      <div className="float-end">

        <Link to="/ItemForm">
        <button
        type = "button"
        className = "btn btn-outline-info"
        >
          Add
        </button>
        </Link>
      </div>
    

      <div className="container">
        <div className="row">
          <span className="col">
            <br />
            <h3>{item.ItemID}</h3>
          </span>
          </div>
          <br />
          <div className="row">
          <label className="form-label col-sm-2">Item Code :</label>
          <div className="col">{item.ItemCode}</div>
          <label className="form-label col-sm-2">Item Name :</label>
          <div className="col">{item.ItemName}</div>
        </div>
        <div className="row">
          <label className="form-label col-sm-2">Item Type :</label>
          <div className="col">{item.ItemType}</div>
          <label className="form-label col-sm-2">Unit Price :</label>
          <div className="col">{item.UnitPrice}</div>
        </div>
        <div className="row">
          <label className="form-label col-sm-2">Unit Cost :</label>
          <div className="col">{item.UnitCost}</div>
          <label className="form-label col-sm-2">Reserve :</label>
          <div className="col">{item.OnhandQty}</div>
        </div>
        <div className="row">
          <label className="form-label col-sm-2">Available :</label>
          <div className="col">{item.AvailableQty}</div>
        </div>
        </div>
  

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

export default ItemDetail;
