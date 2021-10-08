import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ProductModalCont = styled.div`
  display: flex;
  height: 100%;
  .productModalCont {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .headerModalP {
      display: flex;
      flex-direction: column;
      h2 {
        color: ${colors.black};
        font-size: 1.8rem;
        margin-bottom: 10px;
      }
      p {
        font-size: 1.1rem;
        margin-bottom: 10px;
        b{
          color: ${colors.blue_regular};
        }
      }
    }
    .bodyModalP{
      img{
        width: 100%;
        max-width: 350px;
        margin: 20px 0;
      }
      .priceModal{
        p{
          font-size:1.6rem;
          text-align: center;
          b{
            color: ${colors.blue_light};
          }
        }
      }
    }
  }
`;
