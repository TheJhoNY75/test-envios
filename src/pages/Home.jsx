import React, { useEffect, useState } from "react";
import axios from "axios";
import { HomeCont } from "../styles/pages/Home.styled";
import Orden from "../components/Orden";

const Home = () => {
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
  console.log(data);
  return (
    <HomeCont>
      <div className="homeCont">
        <h1 className="title">Ordenes</h1>
        <div className="ordenes">
          {data != null ? (
            data.orders.map((data, i) => (
              <Orden 
                data={data} 
                state={index === i} 
                onClick={() => index === i ? setIndex(null) : setIndex(i)} 
              />
            ))
          ) : (
            <p> No hay ordenes para mostar </p>
          )}
        </div>
      </div>
    </HomeCont>
  );
};
export default Home;
