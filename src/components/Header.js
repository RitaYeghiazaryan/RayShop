import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import modal from "../img/modal.jpg";
import crown from "../img/crown.svg";
import Order from "./Order";

const showOrders = (props) => {
  let amount=0;
  props.orders.forEach(element => amount+=Number(parseFloat(element.price)));
  return (
    <>
      {props.orders.map((el,id) => (
        <Order onDelete={props.onDelete}  key={id} item={el}  />
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
    <div className="modal">
      <i>Your basket is empty</i>
      <img src={modal} alt="modal__img" className="modal__img" />
    </div>
  );
};


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  const showCart=()=>{
    setCartOpen((cartOpen = !cartOpen))
  }
  return (
    <header key={props.id}>
      <div className="haeder__logo">
        <img src={crown} alt="img-logo" /> Ray Shop
      </div>
      <ul className="nav">
        <div className="orders__wrapper">
          <div className="orders__count">
            {props.orders.length >= 1 ? props.orders.length : " "}
          </div>
          <FaShoppingCart
            onClick={showCart}
            className={`shop-cart-button ${cartOpen && "active"} `}
          />
        </div>

        {cartOpen && (
          <div className="order__cart">
            <div className="order__close" onClick={showCart}>X</div>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}

      </ul>
    </header>
  );
}
