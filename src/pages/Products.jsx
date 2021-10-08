import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product"

import { ProductsCont } from "../styles/pages/Products.styled";

const Products = () => {
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
  return (
    <ProductsCont>
      <div className="productsCont">
        <h1 className="title">Products</h1>
        <div className="porductsList">
          {data ? data.products.map((d, i) => (
            <Product 
              key={d.id}
              data={d}
            />
          )) : <p>No products</p> }
        </div>
      </div>
    </ProductsCont>
  );
};

export default Products;
