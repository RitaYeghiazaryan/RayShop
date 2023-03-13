import React, { useState } from "react";
import { FaShoppingCart,FaSearchengin } from "react-icons/fa";
import modal from "../img/modal.jpg";
import crown from "../img/crown.svg";
import Order from "./Order";

const showOrders = (props) => {
  let amount=0;
  props.orders.forEach(element => amount+=Number(parseFloat(element.price)));
  return (
    <>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete}  key={el.id} item={el}  />
      ))}
      <p className="shop__amount">Amount : {
      // new Intl.NumberFormat().format(amount)
      amount
      }$</p>
    </>
  );
};
const showNothing = () => {
  return (
    <div className="empty">
      <i>Your basket is empty</i>
      <img src={modal} alt="modalImg" className="modalImg" />
    </div>
  );
};



export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header >
      <div className="haeder__logo">
        <img src={crown} alt="img-logo" /> Ray Shop
      </div>
      <ul className="nav">
        <div className="orders__wrapper">
          <div className="orders__count">
            {props.orders.length >= 1 ? props.orders.length : " "}
          </div>
          <FaShoppingCart
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`shop-cart-button ${cartOpen && "active"} `}
          />
        </div>

        {cartOpen && (
          <div className="order__cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
        {/* <li className="nav__item">
          <input placeholder="I am looking for..." className="nav__input"/>
          <FaSearchengin className="nav__search"/>
        </li> */}
     
      </ul>
    </header>
  );
}
