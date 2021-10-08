import React, { useEffect, useState } from "react";
import axios from "axios";
import { OrdersCont } from "../styles/pages/Orders.styled";
import Orden from "../components/Orden";
// import { Context } from "../context/Context";

const Orders = () => {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_URL_API}api/v2/orders`, {
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
    <OrdersCont>
      <div className="ordersCont">
        <h1 className="title">Orders</h1>
        <div className="ordenes">
          {data != null ? (
            data.orders.map((data, i) => (
              <Orden 
                key={i}
                data={data} 
                state={index === i} 
                onClick={() => index === i ? setIndex(null) : setIndex(i)} 
              />
            ))
          ) : (
            <p> No Orders </p>
          )}
        </div>
      </div>
    </OrdersCont>
  );
};
export default Orders;
