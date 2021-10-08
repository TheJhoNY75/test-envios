import React from "react";
import { ProductCont } from "../styles/components/Product.styled";
import Modal from "./Modal";
import ProductModal from "./ProductModal";

//assets
import imageNoPicture from "../assets/no-picture.jpg";

const Product = ({ data }) => {
  const [modalState, setModalState] = React.useState(false);
  return (
    <>
      <ProductCont onClick={() => setModalState(true)}>
        <div className="productCont">
          <img
            src={data.imageUrl ? data.imageUrl : imageNoPicture}
            alt={data.name}
          />
          <div className="info">
            <p className="name"> {data.name} </p>
            <p>
              {data.price} <b>{data.currency}</b>
            </p>
          </div>
        </div>
      </ProductCont>
      <Modal state={modalState} setState={setModalState}>
        <ProductModal data={data} />
      </Modal>
    </>
  );
};

export default Product;
