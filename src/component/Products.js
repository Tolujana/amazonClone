import React from "react";
import { useStateValue } from "../context/StateContext";
import Button from "./Button";

const Products = ({ id, rating, title, images, quantity, pricing }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        images,
        quantity,
      },
    });
  };

  return (
    <div className="product w-full flex bg-white flex-col m-2 items-start p-5">
      <img
        src={"assets/products/" + images}
        alt=""
        className="productImage w-full object-contain max-h-110 min-w-[100px] mb-2"
      />
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
        onClick={addToBasket}
      >
        Add to Basket
      </Button>
      <input type="selection" className="quantity" />
    </div>
  );
};

export default Products;
