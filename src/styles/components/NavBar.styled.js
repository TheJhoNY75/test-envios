import styled from "styled-components";
import { colors } from "../../utils/colors";

export const NavBarCont = styled.div`
  background: rgb(0,20,69);
  background: linear-gradient(90deg, rgba(0,20,69,1) 0%, rgba(0,196,204,1) 100%);
  height: 120px;
  width:100%;
  .nav{
    max-width: 1024px;
    height:100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
    .links{
      display: flex;
      .link{
        margin-right:20px;
        text-decoration: none;
        color: ${colors.white};
        font-size:2.2rem;
        font-weight: 600;
      }
      .car{
        position: relative;
        .n-items{
          position: absolute;
          right: -5px;
          top: -5px;
          height: 20px;
          width: 20px;
          background: ${colors.blue_dark};
          color: ${colors.white};
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-weight: 600;
        }
        svg{
          fill: ${colors.white};
          height:32px;
          width: 32px;
          cursor: pointer;
        }
      }
    }
  }
`;
