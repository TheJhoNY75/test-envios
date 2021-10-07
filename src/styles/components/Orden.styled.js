import styled from "styled-components";
import { colors } from "../../utils/colors";
// import { colors } from "../../utils/colors";

export const OrdenCont = styled.div`
  width: 100%;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
  height: ${(e) => (e.state ? "135px" : "46px")};
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
    transform: translate(0, -5px);
  }
  .ordenCont {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.1rem;
      margin-right: 20px;
      b{
        color: grey;
      }
    }
    .cont {
      display: flex;
      .company{
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
    p {
      color: ${colors.blue_light};
      font-size: 1.1rem;
    }
  }
  .items{
    display: flex;
    .item{
      background: ${colors.blue_light};
      border-radius: 5px;
      padding: 10px;
      margin-right: 10px;
    }
  }
`;
