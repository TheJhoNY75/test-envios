import styled from "styled-components";
import { colors } from "../../utils/colors";
// import { colors } from "../../utils/colors";

export const OrdenCont = styled.div`
  width: 100%;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
  height: ${(e) => (e.state ? `${e.hItems + 77}px` : "56px")};
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;
  transform: translate(0, 0);
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    transform: translate(0, -2px);
  }
  .ordenCont {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.1rem;
      margin-right: 20px;
      b {
        color: grey;
      }
    }
    .cont {
      display: flex;
      .company {
        color: ${colors.blue_light};
        font-weight: 600;
      }
      p {
        font-size: 1.1rem;
        margin-right: 10px;
      }
    }
  }
  .more {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
    p {
      color: ${colors.blue_light};
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
  .less {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    p {
      color: ${colors.blue_light};
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 5px;
    align-items: center;
    .titleItems {
      width: 100%;
      font-size: 1.6rem;
      margin: 10px 0;
      color: ${colors.white};
    }
    .item {
      background: ${colors.blue_regular};
      border-radius: 5px;
      padding: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      p {
        color: ${colors.white};
        font-size: 1.1rem;
      }
    }
    .addMore {
      height: 40px;
      width: 40px;
      display: flex;
      cursor: pointer;
      .iconMore {
        height: 100%;
        width: 100%;
        path {
          stroke: ${colors.white};
          opacity: 0.75;
        }
      }
    }
    .pay {
      width: 100%;
      height: 40px;
      background-color: ${colors.white};
      border-radius: 5px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .btn-pay {
        background-color: #009447;
        padding: 5px 10px;
        font-size: 1.5rem;
        color: white;
        border-radius: 10px;
        height: 30px;
        border: none;
        cursor: pointer;
        position: relative;
        margin-right: 10px;
        width: 100px;
      }
      p {
        font-size: 1.3rem;
        margin-right: 10px;
      }
    }
  }
`;
