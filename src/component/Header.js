import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../context/StateContext";
const Header = () => {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="bg-[#131921] flex flex-1 items-center h-[3.75rem] sticky top-0 z-999">
      <Link to="/">
        <img
          src="assets/download.png"
          alt=""
          className="h-[2.5rem] object-contain"
        />
      </Link>

      {/* delivery box */}
      <div className="w-[5.5rem] text-[#CCCCCC] text-xs">
        <span className="deliver block">Deliver to</span>
        <span className="text-white weight-800 text-base">Nigeria</span>
      </div>
      {/* search box */}
      <div className=" rounded flex-1 flex items-center w-[468px] h-[40px] bg-white">
        <div className="dropdown  bg-[#F3f3f3] h-full w-[200px]"> </div>
        <Input
          className="flex-1"
          position="right"
          Icon={<SearchIcon className="bg-orange-500 !h-[40px] !w-[45px]" />}
        />
      </div>
      {/* links */}
      {/* first link */}
      <div className="header__nav flex justify-evenly text-white items-end max-h-[50px]">
        <div className="flex !items-end">
          <img src="" alt="" className="flag" /> <ArrowDropDownIcon />
        </div>
        <div className="account flex items-end ">
          <div className="account-lists flex flex-col">
            <Link to="/Login">
              <span className="hello block text-[0.8rem] decoration-none text-gray-400 ">
                Hello, Sign in
              </span>
              <span className="lists text-white ">Account &amp; Lists</span>
            </Link>
          </div>
          <ArrowDropDownIcon />
        </div>
        {/* second link */}
        <Link to="/login">
          <div className=" flex flex-col justify-start">
            <span className="returns text-[0.8rem]">Returns </span>
            <span className="orders">&amp;Orders</span>
          </div>
        </Link>
        {/* 3rd link- cart */}
        <Link to="checkout">
          <div className=" flex !flex-col !items-center relative ">
            <span className="itemNumber absolute text-sm top-[0.4rem] text-[0.8rem]">
              {basket?.length}
            </span>
            <span className="icon">
              <ShoppingCartIcon className=" !text-[3.1em] text-orange-500 " />
            </span>
          </div>
        </Link>
      </div>
      {/* signing menu */}
    </nav>
  );
};

export default Header;
