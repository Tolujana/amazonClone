import React from "react";
import Card from "../component/Card";
import Products from "../component/Products";
import { useStateValue } from "../context/StateContext";

const Home = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="Home max-w-8xl mx-auto ">
      <img
        src="/assets/banner1.jpg"
        alt=""
        className="banner gradient-mask-b-0 -z-1 -mb-[30px]"
      />
      <div className="products flex z-10 my[5px]">
        {/* <Card
          rating={4}
          pricing={24}
          id="12321"
          title="Gaming accessories"
          images={["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]}
        /> */}
        {basket.map((items) => (
          <Products key={items.id} {...items} />
        ))}

        <Products
          rating={4}
          pricing={24}
          key="123214"
          id="123214"
          title="Gaming accessories"
          images={["image1.jpg"]}
        />
      </div>
    </div>
  );
};

export default Home;
