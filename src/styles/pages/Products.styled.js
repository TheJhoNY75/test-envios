import styled from "styled-components";
import { colors } from "../../utils/colors"

export const ProductsCont = styled.div`
  .productsCont {
    max-width: 1024px;
    margin: auto;
    padding:0 20px;
    .title{
      color:${colors.black} ;
      font-size: 2.8rem;
      font-weight: 700;
      margin: 20px 0 40px 0;
    }
    .porductsList{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;
