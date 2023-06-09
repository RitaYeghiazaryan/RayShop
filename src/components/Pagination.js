import React, {useMemo } from "react";

import { useState } from "react";
import ShopItems from "./ShopItems";


function Pagenation(props) {
  let allGoods = props.data
  const [shopItems, setShopItems] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  useMemo(()=>{
    const getShopItems = async () => {
      console.log("qani angam");
      setLoading(true);
      const res = await allGoods;
      setShopItems(res);
      setLoading(false);
    };
    getShopItems();


  },[setShopItems,allGoods])

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
              <button
                className={number===currentPage ? 'pagination__link active' :'pagination__link' } 
                onClick={(e)=>{e.preventDefault()
                  paginate(number)
                }
              
              }
                >
                  {number}
              </button>
            </li>

            
        ))}
      </ul>
      </div>
      </>
   
  );
}

export default Pagenation;

       