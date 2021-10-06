import styled from "styled-components";
import { colors } from "../../utils/colors"

export const HomeCont = styled.div`
  .homeCont {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
    .title{
      color:${colors.black} ;
      font-size: 2.8rem;
      font-weight: 700;
    }
  }
`;
