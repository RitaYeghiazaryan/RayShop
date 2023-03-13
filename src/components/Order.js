import React, { Component } from "react";
import {FaTrash} from "react-icons/fa"
class Order extends Component {
info=this.props.item
render() {
    return (
      <div className="order__item">
     
        <img src={this.info.imageUrl} alt="itmImg"  className="order__img"/>
        <div className="order__description">
          <div className="order__name">{this.info.name}</div>
          <div className="order__price">{this.info.price}$</div>
          <FaTrash className="order__delete" onClick={()=>this.props.onDelete(this.info.id)
          }/>
        </div>
      </div>
    );
  }
}

export default Order;
