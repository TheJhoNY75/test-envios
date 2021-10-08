import styled from 'styled-components';

export const ModalStyle = styled.div`
.bg {
  z-index: ${(e) => (e.state ? 100 : -1)};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${(e) => (e.state ? 1 : 0)};
}
.content {
  z-index: ${(e) => (e.state ? 100 : -1)};
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 15px;
  margin: auto;
  transition: 0.3s;
  background-color: white;
  opacity: ${(e) => (e.state ? 1 : 0)};
  transform: ${(e) => (e.state ? "translate(-50%, -50%)" : "translate(-50%, -45%)")};
  max-height: 95%;
  &-cont{
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px);
  }
  .headerModal {
    display: flex;
    justify-content: flex-end;
    height: 40px;
    .btnClose {
      width: 25px;
      height: 25px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin: 7.5px;
      span {
        width: 100%;
        height: 2px;
        background-color: #323232;
        transform: rotate(45deg);
        position: relative;
        &:after {
          content: "";
          width: 100%;
          height: 2px;
          top: 0;
          left: 0;
          position: absolute;
          background-color: #323232;
          transform: rotate(-90deg);
        }
      }
    }
  }
}
@media (max-width: 1124px) {
  .content {
    width: calc(100% - 40px);
  }
}
`;
