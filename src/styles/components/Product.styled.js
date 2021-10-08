import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ProductCont = styled.div`
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 12px;
  width: 23%;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
  }
  .productCont {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    img {
      width: 100%;
    }
    .info {
      min-height: 40px;
      padding-top: 10px;
      bottom: 0;
      .name {
        color: ${colors.blue_light};
        font-weight: bold;
      }
      p {
        margin-bottom: 5px;
      }
    }
  }
  @media (max-width:1024px){
    width: 31%;
  }
  @media (max-width:768px){
    width: 48%;
  }
  @media (max-width:480px){
    width: 100%;
  }
`;
