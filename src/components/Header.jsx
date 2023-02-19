import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const result = useSelector((state) => state.cartData.length)
    console.warn("redux result in header", result);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"
          alt="cart"
        />
      </div>
      Header
    </div>
  );
};

export default Header;
