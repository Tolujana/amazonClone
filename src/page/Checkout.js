import { ListItem } from "@mui/material";
import React from "react";
import CheckoutProduct from "../component/CheckoutProduct";
import SubTotal from "../component/SubTotal";
import { useStateValue } from "../context/StateContext";

const Checkout = (props) => {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="wrapper flex">
      <div className="products flex-1 bg-white rounded m-5">
        {basket.length === 0 ? (
          ///show this if you do not have product
          <div className="noCart p-1 ">
            <h1 className="title  weigh">Your Shopping Basket is empty</h1>
            <span className="description">
              You have no items in your basket. To buy one of more items . Click
              "Add to basket" next to the itme
            </span>
          </div>
        ) : (
          ///show this if you have productin cart
          <div className="product flex ">
            <ul>
              {basket.map((items) => (
                <CheckoutProduct {...items} key={items.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="checkout flex flex-col">
        <div className="checkout-box w-[300px] h-[100px] pt-5 pb-4 my-5 bg-white rounded">
          <SubTotal />
        </div>
        <div className="sponsor px-3.5 py-4.5 h-[calc(100vh-100px)] bg-white rounded">
          sdfs
        </div>
      </div>
    </div>
  );
};

Checkout.propTypes = {};

export default Checkout;
