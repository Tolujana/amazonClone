import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <div className="wrapper flex">
        <div className="productDetails flex flex-1 bg-white">
          <img
            src="assets/products/image2.jpg"
            alt=""
            className="image object-contain"
          />
          <span className="flex-1"> content</span>
        </div>
        <div className="sidebar flex flex-col items-start max-w-[200px]">
          <span className="price p-2"> $ 56.99 </span>
          <div className="deliveryInfo flex flex-col">
            <span className="p2">$13 Shipping to Nigeria</span>
            <p className="shipingDetails p-2">
              Delivery Tuesday, June 7
              <span className="">
                Or fastest delivery Thursday, May 26. Order within 9 hrs 30 mins
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
