import React, { useEffect, useState } from "react";
import axios from "axios";
import {ProductListCont} from "../styles/components/ProductList.styled";
import ProductModal from "./ProductModal";
import { GrFormAdd } from 'react-icons/gr'

const ProductList = ({items, setItems, setModal}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_URL_API}api/v2/products`, {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN_API_KEY,
          },
        })
        .then((e) => {
          setData(e.data);
        })
        .catch((error) => console.log(error));
    };
    if (data === null) {
      fetchData();
    }
  });
  const addItems = (data) => {
    const value = {
      id: data.id,
      name: data.name,
      price: data.price,
    }
    setItems([...items, value])
  }
  return (
    <ProductListCont>
      <div className="productListCont">
        <div className="addBtn">
        <h1 className="title">List of products </h1>
          <button className="btn" onClick={() => setModal(false)}>add Products <span> {items.length} </span> </button>
        </div>
        <div className="porductsList">
          {data ? (
            data.products.map((d, i) => (
              <div className="product" key={i}>
                <div className="buttonAddMore" onClick={() => addItems(d)}>
                  <GrFormAdd />
                </div>
                <ProductModal data={d} />
              </div>
            ))
          ) : (
            <p>No products</p>
          )}
        </div>
      </div>
    </ProductListCont>
  );
};

export default ProductList;
