import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clear, removeItem } from "../../Store/Slices/Cart";

export default function Cart() {
  const { list } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  let totalPrice = 0;
  const items = list?.map((e, index) => {
    totalPrice += e.price * e.quantity;
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <img src={e.image} style={{ width: "60px", height: "60px" }} />
        </td>
        <td>{e.title}</td>
        <td>{e.price}</td>
        <td>{e.quantity}</td>
        <td>{e.price * e.quantity}</td>
        <td>
          <button
            className="btn btn-danger mx-2 "
            onClick={() => dispatch(removeItem(e.id))}
          >
            -
          </button>

          <button
            className="btn btn-success mx-2 "
            onClick={() => dispatch(addItem(e))}
          >
            +
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      {list.length > 0 ? (
        <>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Add/Remove</th>
              </tr>
            </thead>
            <tbody>{items}</tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total Price</td>
                <td>{totalPrice}</td>
              </tr>
            </tfoot>
          </table>
          <button
            className="btn btn-danger  btn-lg  "
            onClick={() => dispatch(clear())}
          >
            Clear Cart
          </button>
        </>
      ) : (
        <h2>Cart id Empty</h2>
      )}
    </>
  );
}
