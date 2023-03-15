import React, { useEffect } from "react";

import { useState } from "react";
import ShopItems from "./ShopItems";


function Pagenation(props) {
  let allGoods = props.data
  const [shopItems, setShopItems] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  useEffect(() => {
    const getShopItems = async () => {
      setLoading(true);
      const res = await allGoods;
      setShopItems(res);
      setLoading(false);
    };
    getShopItems();
  }, [allGoods]);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = allGoods.slice(firstItemIndex, lastItemIndex);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(shopItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
   
      <ShopItems
        shopItems={currentItems}
        loading={loading}
        onAdd={props.onAdd}
      />
      <div className="page">
      <ul className="pagination">
        {pageNumbers.map((number,id) => (
            <li className="page-item" key={id}>
              <a
                href="!#"  target="_self"
                className ="pagination__link" 
                onClick={()=>{paginate(number)
                }
              
              }
                >
              </a>
            </li>

            
        ))}
      </ul>
      </div>
      </>
   
  );
}

export default Pagenation;

       