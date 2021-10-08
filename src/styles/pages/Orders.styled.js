import styled from "styled-components";
import { colors } from "../../utils/colors"

export const OrdersCont = styled.div`
  .ordersCont {
    max-width: 1024px;
    margin: auto;
    padding:0 20px;
    .title{
      color:${colors.black} ;
      font-size: 2.8rem;
      font-weight: 700;
      margin: 20px 0 40px 0;
    }
  }
`;
