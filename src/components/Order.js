import React, { Component } from "react";
import {FaTrash} from "react-icons/fa"
class Order extends Component {
// info=this.props.item;
// onDelete=this.props.onDelete
render() {
  return (
    <div className="order__item" key={this.props.item.id}>
        <img src={this.props.item.imageUrl} alt="itmImg"  className="order__img"/>
        <div className="order__description">
          <div className="order__name">{this.props.item.name}</div>
          <div className="order__price">{this.props.item.price}$</div>
          <FaTrash className="order__delete" onClick={()=>this.props.onDelete(this.props.item.id)
          }/>
        </div>
      </div>
    );
  }
}

export default Order;
