import React from "react";
import { ProductModalCont } from "../styles/components/ProductModalCont.styled";

//assets
import imageNoPicture from "../assets/no-picture.jpg";

const ProductModal = ({ data }) => {
  return (
    <ProductModalCont>
      <div className="productModalCont">
        <div className="headerModalP">
          <h2> {data.name} </h2>
          <p>
            <b>ID:</b> {data.id}{" "}
          </p>
          <p>
            <b>Description:</b> {data.description}
          </p>
          <p>
            <b>Sku: </b>{data.sku}
          </p>
        </div>
        <div className="bodyModalP">
          <img src={data.imageUrl ? data.imageUrl : imageNoPicture} alt="" />
          <div className="priceModal">
            <p>
              <b>Pirce: </b> {data.price} {data.currency}
            </p>
          </div>
        </div>
      </div>
    </ProductModalCont>
  );
};

export default ProductModal;
