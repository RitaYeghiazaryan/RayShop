import React from "react";

function ShopItems({ shopItems, loading,...props }) {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <main>
      {shopItems.map((item, id) => (
        <div className="shop__item" key={id}>
          <img src={item.imageUrl} alt="itmImg" className="shop__img" />
          <div className="shop__description">
            <div className="shop__name">{item.name}</div>
            <div className="shop__price">{item.price}$</div>
          </div>
          <div
            className="shop__addCart"
            onClick={() => props.onAdd(item)}
          >
            +
          </div>
        </div>
      ))}
    </main>
  );
}

export default ShopItems;
