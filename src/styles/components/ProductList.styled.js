import styled from 'styled-components';

export const ProductListCont = styled.div`
width: 1000px;
display: flex;
.productListCont {
  .title {
    margin: 20px 0;
  }
  .addBtn {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn {
      padding: 5px 10px;
      font-size: 1.8rem;
      color: white;
      background-color: #00c4cc;
      border-radius: 10px;
      height: 40px;
      border:none;
      cursor:pointer;
      position:relative;
      span{
        position:absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top:-15px;
        right:-15px;
        background: #00608D;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        font-size: 1.3rem;
      }
    }
  }
  .porductsList {
    height: 100%;
    max-height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 12px; 
    }
    &::-webkit-scrollbar-track {
      background: #e2e2e2;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #00c4cc; 
      border-radius: 20px; 
      border: 3px solid #e2e2e2; 
    }
    .product {
      width: 300px;
      border: 1px solid rgba(0,0,0,0.2);
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 5px;
      position: relative;
      .buttonAddMore{
        position:absolute;
        top:5px;
        right:5px;
        background:#00c4cc;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        font-size: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg{
          width: 20px;
          height: 20px;
          path{
            stroke: white;
          }
        }
      }
    }
  }
}
`;