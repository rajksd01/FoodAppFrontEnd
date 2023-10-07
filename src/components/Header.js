import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const user = {
    login: true,
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log();
  return (
    <div className="flex bg-slate-50 shadow-xl">
      <Link to="/">
        <img className="h-32" src={require("../../logo_img.png")} />
      </Link>
      <ul className="flex flex-wrap ml-0 lg: ml-50 md:ml-50 xl:ml-50  text-2xl ">
        <li className="m-10">
          <Link to="/about"> About Us </Link>
        </li>
        <li className="m-10">
          <Link to="/career"> Career</Link>
        </li>
        <li className="m-10">
          <Link to="/support"> Support</Link>
        </li>
        <li className="m-10">
          <Link to="/work"> Work</Link>
        </li>
        <li className="m-10">
          <Link to="/cart">
            <button>Cart-{cartItems.length}</button>
          </Link>
        </li>
        {user.login == true ? (
          <li className="m-10">Log Out </li>
        ) : (
          <li className="m-10">Log In</li>
        )}
      </ul>
    </div>
  );
}

export default Header;
