import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/actions/itemActions";
import { Link } from "react-router-dom";

const ItemList = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      <br />
      <h2>Item List</h2>;
      <table className="table table-border table-hover">
        <thead>
          <tr>
            <th scope="col">Item No.</th>
            <th scope="col">Item Code</th>
            <th scope="col">Item Name</th>
            <th scope="col">Item Type</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Unit Cost</th>
            <th scope="col">Reserve</th>
            <th scope="col">Available</th>
          </tr>
        </thead>
        <tbody>
        {items.map((i) => {
            return (
              <tr key={i.ItemID}>
                <td>
                  <Link to={"/item/" + i.ItemID}>{i.ItemID}</Link>
                </td>
                <td>{i.ItemCode}</td>
                <td>{i.ItemName}</td>
                <td>{i.ItemType}</td>
                <td>{i.UnitPrice}</td>
                <td>{i.UnitCost}</td>
                <td>{i.OnhandQty}</td>
                <td>{i.AvailableQty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
