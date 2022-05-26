import { Button } from "@mui/material";
import React from "react";
import { useStateValue } from "../context/StateContext";

const Public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

const CheckoutProduct = ({ id, rating, title, images, quantity, pricing }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="product w-full flex bg-white  m-2 items-start p-5">
      <img
        src={Public_folder + "/assets/products/" + images}
        alt=""
        className="productImage w-full object-contain max-h-110 min-w-[100px] mb-2"
      />
      <div className="content">
        <h1 className="title">{title}</h1>

        <div className="ratings flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#9734;</p>
            ))}
        </div>

        <div className="pricing my-1">
          <small>$</small>
          <span>{pricing}</span>
        </div>
        <Button
          className="bg-[#f0c14b] p-1 border border-solid "
          onClick={removeFromBasket}
        >
          Remove from Basket
        </Button>
        <input type="selection" className="quantity" />
      </div>
    </div>
  );
};

export default CheckoutProduct;
