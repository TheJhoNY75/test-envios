import React from "react";
import styled from "styled-components";

const PayCont = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #009447;
  position: fixed;
  bottom: -200px;
  left: 0;
  animation: animatio 1.5s ;
  z-index: 100;
  h1{
    color: white;
    font-size: 3rem;
  }
  @keyframes animatio{
    0%{
      bottom: -200px;
    }
    30%{
      bottom: 0;
    }
    45%{
      bottom: 0;
    }
    100%{
      bottom: -200px;
    }
  }

`;

const Pay = ({ state = false }) => {
  return state && (
    <PayCont state={state}>
      <h1> Thanks for Pay </h1>
    </PayCont>
  );
};

export default Pay;
