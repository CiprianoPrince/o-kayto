import React from "react";
import '../Cart/Cart.css';

const Cart = () => {
  return (
    <section className="h-auto">
      <div className="container mt-5 mb-5 ">
        <h3 className="fw-bold mb-2">Your Wishlist</h3>
        <table className="table border-top-1 ">
          <thead className="table-dark fw-bold">
            <tr>
              <th className="w-40 border-top-left-radius-10px">Item</th>
              <th className="w-40 hide-display">Action</th>
              <th className="w-20 text-end border-top-right-radius-10px">Price</th>
            </tr>
          </thead>
          <tbody className="table-secondary">
                <tr>
                  <td className="flex-column p-3 gap-3">
                    <div className="flex-row gap-3">
                      <img className="border border-dark border-2" src="http://placehold.it/120x150" alt="" />
                      <div className="mt-3">
                        <p className="mb-1">Name:</p>
                        <p className="mb-1">Size:</p>
                        <p className="mb-1">Color:</p>
                      </div>
                    </div>
                    <div className="input-group ">
                      <button className="btn btn-primary fw-bold" type="button" id="button-addon1">
                        +
                      </button>
                      <div className="w-30">
                        <input
                          type="text"
                          className="form-control text-center w-40"
                          defaultValue={1}
                        />
                      </div>
                      <button className="btn btn-primary fw-bold " type="button" id="button-addon2">
                        -
                      </button>
                    </div>
                    <div className="hide-display-1">
                      <div className="d-flex gap-1">
                      <button className="btn btn-primary text-light fw-bold">Add Cart</button>
                      <button className="btn btn-danger text-light fw-bold">Delete</button>
                      </div>
                    </div>
                  </td>
                  <td className="hide-display gap-3 ">
                    <div className="d-flex gap-1 mt-5">
                      <button className="btn btn-primary text-light fw-bold">Add Cart</button>
                      <button className="btn btn-danger text-light fw-bold">Delete</button>
                    </div>
                  </td>
                  <td>
                    <p className="mb-1 mt-5 text-end fw-bold">₱500.00</p>
                  </td>
                </tr>
          </tbody>
          <tfoot className="table-dark fw-bold">
            <tr >
               <td className="border-bottom-left-radius-10px">O-KAYTO</td>
               <td className="hide-display"></td>
               <td className="border-bottom-right-radius-10px text-end"></td>
            </tr>
          </tfoot>
        </table>
        <div className="flex-justify-between ms-1">
          <button className="btn btn-primary p-3 fw-bold">Continue Shopping</button>
          <button className="btn btn-success p-3 fw-bold">Open Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
