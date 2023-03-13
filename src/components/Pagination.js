import React, { useEffect } from "react";

import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import ShopItems from "./ShopItems";

function Pagenation(props) {
  let allGoods = props.data;
  const [shopItems, setShopItems] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
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

  // const nextPage=()=>setCurrentPage(prev=>prev+1)
  // const prevPage=()=>setCurrentPage(prev=>prev-1)

  return (
    <>
      <ShopItems
        shopItems={currentItems}
        loading={loading}
        onAdd={props.onAdd}
      />
      <div className="page">

      {/* <button className="page__prev">
        <SlArrowLeft  onClick={prevPage} />
      </button> */}
      <ul className="pagination">
        {pageNumbers.map((number,id) => (
            <li className="page-item" key={id}>
              <a
                href="!#"
                className="pagination__link"
                onClick={() => paginate(number)}
                >
              </a>
            </li>
        ))}
      </ul>
      {/* <button className="page__next" onClick={nextPage}>
        <SlArrowRight />
      </button> */}
      </div>
    </>
  );
}

export default Pagenation;

       