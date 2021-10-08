import React, { useRef, useState } from "react";
import { OrdenCont } from "../styles/components/Orden.styled";
import Modal from "./Modal";
import ProductList from "./ProductList";
import Pay from "./Pay"

import { GrFormAdd } from 'react-icons/gr'

const Orden = ({ data, onClick, state }) => {
  const [modalState, setModalState] = useState(false);
  const [items, setItems] = useState(data.items);
  const [pay, setPay] = useState(false)
  const heightItems = useRef();
  const total = () => {
    var totalConter = 0.0;
    for(let data of items) {
      totalConter = totalConter + parseFloat(data.price);
    }
    return totalConter
  }
  return (
    <>
      <OrdenCont state={state} hItems={heightItems?.current?.offsetHeight}>
        <div className="ordenCont">
          <p><b>ID Order:</b> {data.id}</p>
          <div className="cont">
            <p><b>status pay:</b> {pay ? <span style={{color: '#009447'}}>PAID OUT</span> : <span style={{color: 'red'}}>pending</span>}</p>
            <p><b>direction:</b> {data.billingAddress.address1}</p>
            <p><b>city:</b> {data.billingAddress.city}</p>
            <p className="company"><b>company:</b> {data.billingAddress.company}</p>
          </div>
        </div>
        <div className="more" onClick={onClick}> <p>{state !== true && 'Show more' }</p> </div>
        <div className="items" ref={heightItems}>
          <h3 className="titleItems">ITEMS</h3>
          {items.map((d,i) => (
            <div className="item" key={i}>
              <p><b>ID:</b> {d.id}</p>
              <p><b>Name:</b> {d.name}</p>
              <p><b>Price:</b> {d.price}</p>
            </div>
          ))}
          <div className="addMore" onClick={() => setModalState(true) } >
            {!pay && <GrFormAdd className="iconMore" />}
          </div>
          <div className="pay">
            <p><b>Total: </b> {total()}.00 MXN</p>
            {!pay && <button class='btn-pay' onClick={() => setPay(true)}>PAY </button>}
          </div>
        </div>
        <div className="less" onClick={onClick}> <p>{state && 'Show less'}</p> </div>
      </OrdenCont>
      <Pay state={pay} />
      <Modal state={modalState} setState={setModalState}>
        <ProductList items={items} setItems={setItems} setModal={setModalState} />
      </Modal>
    </>
  );
};

export default Orden;
