import React from "react";
import { ModalStyle } from "../styles/components/Modal.styled";


const Modal = ({ state = false, setState, children }) => {
  return (
    <ModalStyle state={state}>
      <div className="bg" onClick={() => setState(false)} />
      <div className="content">
        <div className="headerModal">
          <button className="btnClose" onClick={() => setState(false)}>
            <span></span>
          </button>
        </div>
        <div className="content-cont">{children}</div>
      </div>
    </ModalStyle>
  );
};

export default Modal;
