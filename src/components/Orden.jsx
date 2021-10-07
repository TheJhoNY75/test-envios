import React from "react";
import { OrdenCont } from "../styles/components/Orden.styled";

const Orden = ({ data, onClick, state }) => {
  return (
    <OrdenCont onClick={onClick} state={state}>
      <div className="ordenCont">
        <p><b>ID Orden:</b> {data.id}</p>
        <div className="cont">
          <p><b>direccion:</b> {data.billingAddress.address1}</p>
          <p><b>city:</b> {data.billingAddress.city}</p>
          <p className="company"><b>company:</b> {data.billingAddress.company}</p>
        </div>
      </div>
      <div className="more"> <p>{state !== true && 'Ver más' }</p> </div>
      <div className="items">
        {data.items.map((d,i) => (
          <div className="item" key={i}>
            <p><b>ID:</b> {d.id}</p>
            <p><b>Name:</b> {d.name}</p>
            <p><b>Price:</b> {d.price}</p>
            <p><b>Quantity:</b> {d.quantity}</p>
          </div>
        ))}
      </div>
      <div className="more"> <p>{state && 'Ver menos'}</p> </div>
    </OrdenCont>
  );
};

export default Orden;
