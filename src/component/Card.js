import React from "react";

const Card = ({ id, rating, title, images, pricing }) => {
  return (
    <div className="card width">
      <h1 className="title">{title}</h1>
      <div className="images flex flex-wrap">
        {images.map((image) => (
          <img
            src={"assets/products/" + image}
            alt=""
            className="productImage"
          />
        ))}
      </div>
      <div className="ratings flex">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>:star</p>
          ))}
      </div>
    </div>
  );
};

export default Card;
